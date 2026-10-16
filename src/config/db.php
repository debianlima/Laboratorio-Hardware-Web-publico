<?php

/**
 * Carrega variáveis de ambiente do arquivo .env se existir.
 * O arquivo .env NUNCA deve ser commitado no repositório.
 */
$envFile = __DIR__ . '/../../.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === '' || str_starts_with($line, '#')) {
            continue;
        }
        if (str_contains($line, '=')) {
            [$key, $value] = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value, " \t\n\r\0\x0B\"'");
            if (!array_key_exists($key, $_SERVER)) {
                $_SERVER[$key] = $value;
                $_ENV[$key] = $value;
                putenv("$key=$value");
            }
        }
    }
}

if (!defined('MYSQLI_ASSOC')) {
    define('MYSQLI_ASSOC', 1);
}

function envVar(string $key, string $default = ''): string
{
    $value = getenv($key);
    if ($value === false || $value === '') {
        $value = $_SERVER[$key] ?? $_ENV[$key] ?? $default;
    }
    return (string) $value;
}

function usarPostgres(): bool
{
    $driver = strtolower(envVar('DB_DRIVER', ''));
    return $driver === 'pgsql'
        || envVar('POSTGRES_URL') !== ''
        || envVar('DATABASE_URL') !== ''
        || envVar('SUPABASE_DB_URL') !== '';
}

function conectar()
{
    if (usarPostgres()) {
        return conectarPostgres();
    }

    return conectarMySQL();
}

function conectarMySQL()
{
    $host = envVar('DB_HOST', 'localhost');
    $port = envVar('DB_PORT', '3306');
    $db = envVar('DB_NAME', 'lab_hardware');
    $user = envVar('DB_USER', 'lab_user');
    $pass = envVar('DB_PASS', 'lab_password');

    if (!class_exists('mysqli')) {
        return null;
    }

    try {
        $conn = new mysqli($host, $user, $pass, $db, (int) $port);
        if ($conn->connect_error) {
            error_log('Erro MySQL: ' . $conn->connect_error);
            return null;
        }
        $conn->set_charset('utf8mb4');
        return $conn;
    } catch (Throwable $e) {
        error_log('Erro MySQL: ' . $e->getMessage());
        return null;
    }
}

function conectarPostgres(): ?LabHardwarePdoConnection
{
    $url = envVar('POSTGRES_URL', envVar('DATABASE_URL', envVar('SUPABASE_DB_URL', '')));
    $schema = envVar('DB_SCHEMA', 'lab_hardware');

    try {
        if ($url !== '') {
            $parts = parse_url($url);
            if ($parts === false) {
                return null;
            }

            $host = $parts['host'] ?? 'localhost';
            $port = (int) ($parts['port'] ?? 5432);
            $db = ltrim($parts['path'] ?? '/postgres', '/');
            $user = rawurldecode($parts['user'] ?? 'postgres');
            $pass = rawurldecode($parts['pass'] ?? '');
            $query = [];
            parse_str($parts['query'] ?? '', $query);
            $sslmode = $query['sslmode'] ?? envVar('DB_SSLMODE', 'require');
        } else {
            $host = envVar('DB_HOST', 'localhost');
            $port = (int) envVar('DB_PORT', '5432');
            $db = envVar('DB_NAME', 'postgres');
            $user = envVar('DB_USER', 'postgres');
            $pass = envVar('DB_PASS', '');
            $sslmode = envVar('DB_SSLMODE', 'require');
        }

        $dsn = sprintf('pgsql:host=%s;port=%d;dbname=%s;sslmode=%s', $host, $port, $db, $sslmode);
        $pdo = new PDO($dsn, $user, $pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => true,
        ]);
        $pdo->exec('SET search_path TO ' . LabHardwarePdoConnection::quoteIdentifier($schema) . ', public');
        return new LabHardwarePdoConnection($pdo);
    } catch (Throwable $e) {
        error_log('Erro PostgreSQL/Supabase: ' . $e->getMessage());
        return null;
    }
}

class LabHardwarePdoConnection
{
    public int|string $insert_id = 0;

    public function __construct(private PDO $pdo) {}

    public static function quoteIdentifier(string $identifier): string
    {
        return '"' . str_replace('"', '""', $identifier) . '"';
    }

    public function prepare(string $sql): LabHardwarePdoStatement
    {
        return new LabHardwarePdoStatement($this, $this->pdo->prepare($sql), $sql);
    }

    public function query(string $sql)
    {
        $stmt = $this->pdo->query($sql);
        if ($stmt === false) {
            return false;
        }
        if ($stmt->columnCount() > 0) {
            return new LabHardwarePdoResult($stmt->fetchAll(PDO::FETCH_ASSOC));
        }
        return true;
    }

    public function begin_transaction(): bool
    {
        return $this->pdo->beginTransaction();
    }

    public function commit(): bool
    {
        return $this->pdo->commit();
    }

    public function rollback(): bool
    {
        return $this->pdo->rollBack();
    }

    public function close(): void
    {
        // PDO fecha a conexão quando não há mais referências.
    }

    public function lastInsertId(): string
    {
        return $this->pdo->lastInsertId();
    }
}

class LabHardwarePdoStatement
{
    public int $num_rows = 0;
    public int $affected_rows = 0;
    private array $params = [];
    private array $boundResultRefs = [];
    private ?array $rows = null;
    private int $cursor = 0;

    public function __construct(
        private LabHardwarePdoConnection $connection,
        private PDOStatement $stmt,
        private string $sql
    ) {}

    public function bind_param(string $types, &...$params): bool
    {
        $this->params = [];
        foreach ($params as $idx => &$param) {
            $type = $types[$idx] ?? 's';
            if ($type === 'i') {
                $this->params[] = (int) $param;
            } elseif ($type === 'd') {
                $this->params[] = (float) $param;
            } else {
                $this->params[] = $param;
            }
        }
        return true;
    }

    public function execute(): bool
    {
        $ok = $this->stmt->execute($this->params);
        $this->affected_rows = $this->stmt->rowCount();

        if (preg_match('/^\s*insert\s+/i', $this->sql)) {
            try {
                $this->connection->insert_id = $this->connection->lastInsertId();
            } catch (Throwable) {
                $this->connection->insert_id = 0;
            }
        }

        return $ok;
    }

    public function get_result(): LabHardwarePdoResult
    {
        $this->rows = $this->stmt->fetchAll(PDO::FETCH_ASSOC);
        $this->num_rows = count($this->rows);
        return new LabHardwarePdoResult($this->rows);
    }

    public function store_result(): bool
    {
        $this->rows = $this->stmt->fetchAll(PDO::FETCH_ASSOC);
        $this->num_rows = count($this->rows);
        return true;
    }

    public function bind_result(&...$vars): bool
    {
        $this->boundResultRefs = &$vars;
        return true;
    }

    public function fetch(): bool
    {
        if ($this->rows === null) {
            $this->rows = $this->stmt->fetchAll(PDO::FETCH_NUM);
            $this->num_rows = count($this->rows);
        }

        if (!isset($this->rows[$this->cursor])) {
            return false;
        }

        $row = array_values($this->rows[$this->cursor]);
        foreach ($this->boundResultRefs as $idx => &$ref) {
            $ref = $row[$idx] ?? null;
        }
        $this->cursor++;
        return true;
    }

    public function close(): void
    {
        $this->stmt->closeCursor();
    }
}

class LabHardwarePdoResult
{
    private int $cursor = 0;

    public function __construct(private array $rows) {}

    public function fetch_assoc(): ?array
    {
        if (!isset($this->rows[$this->cursor])) {
            return null;
        }
        return $this->rows[$this->cursor++];
    }

    public function fetch_all(int $mode = MYSQLI_ASSOC): array
    {
        return $this->rows;
    }
}
