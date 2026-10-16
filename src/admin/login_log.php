<?php
session_start();
require_once __DIR__ . '/../config/auth.php';
require_once __DIR__ . '/../config/rate_limit.php';

requerLogin();

if (tipoUsuarioAtual() !== 'administrador') {
    header('Location: /index.php');
    exit;
}

$conn = conectar();
if (!$conn) {
    die('Erro ao conectar ao banco de dados.');
}
ensureLoginAttemptsTable($conn);

$filter = $_GET['filter'] ?? 'all';
$where = '';
if ($filter === 'failed') {
    $where = 'WHERE la.success = 0';
} elseif ($filter === 'success') {
    $where = 'WHERE la.success = 1';
} else {
    $filter = 'all';
}

$search = trim($_GET['search'] ?? '');
if ($search !== '') {
    $searchTerm = '%' . $search . '%';
    if ($where) {
        $where .= ' AND (la.username LIKE ? OR la.ip_address LIKE ?)';
    } else {
        $where = 'WHERE (la.username LIKE ? OR la.ip_address LIKE ?)';
    }
}

$page = max(1, (int)($_GET['page'] ?? 1));
$perPage = 50;
$offset = ($page - 1) * $perPage;

$countSql = 'SELECT COUNT(*) as total FROM login_attempts la ' . $where;
$dataSql = 'SELECT la.* FROM login_attempts la ' . $where . ' ORDER BY la.attempted_at DESC LIMIT ? OFFSET ?';

if ($search !== '') {
    $stmt = $conn->prepare($countSql);
    $stmt->bind_param('ss', $searchTerm, $searchTerm);
    $stmt->execute();
    $total = $stmt->get_result()->fetch_assoc()['total'];
    $stmt->close();

    $stmt = $conn->prepare($dataSql);
    $stmt->bind_param('ssii', $searchTerm, $searchTerm, $perPage, $offset);
    $stmt->execute();
    $attempts = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
} else {
    $total = $conn->query($countSql)->fetch_assoc()['total'];
    $stmt = $conn->prepare($dataSql);
    $stmt->bind_param('ii', $perPage, $offset);
    $stmt->execute();
    $attempts = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
}

$conn->close();
$totalPages = max(1, (int) ceil($total / $perPage));
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log de Login - Lab Hardware</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div class="container">
            <a class="navbar-brand" href="/index.php">Lab Hardware</a>
            <span class="navbar-text">Log de Login</span>
        </div>
    </nav>

    <div class="container">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h1>Log de Tentativas de Login</h1>
            <a href="/index.php" class="btn btn-outline-secondary">Voltar</a>
        </div>

        <form method="get" class="row g-2 mb-3">
            <div class="col-auto">
                <select name="filter" class="form-select" onchange="this.form.submit()">
                    <option value="all" <?= $filter === 'all' ? 'selected' : '' ?>>Todas</option>
                    <option value="failed" <?= $filter === 'failed' ? 'selected' : '' ?>>Falhas</option>
                    <option value="success" <?= $filter === 'success' ? 'selected' : '' ?>>Sucessos</option>
                </select>
            </div>
            <div class="col">
                <input type="text" name="search" class="form-control" placeholder="Buscar por IP ou usuário..."
                       value="<?= htmlspecialchars($search, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?>">
            </div>
            <div class="col-auto">
                <button type="submit" class="btn btn-primary">Filtrar</button>
            </div>
        </form>

        <div class="table-responsive">
            <table class="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>IP</th>
                        <th>Usuário</th>
                        <th>Data/Hora</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (empty($attempts)): ?>
                    <tr><td colspan="5" class="text-muted text-center">Nenhum registro encontrado.</td></tr>
                    <?php else: ?>
                    <?php foreach ($attempts as $a): ?>
                    <tr>
                        <td><?= (int) $a['id'] ?></td>
                        <td><code><?= htmlspecialchars($a['ip_address'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></code></td>
                        <td><?= htmlspecialchars($a['username'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></td>
                        <td><?= htmlspecialchars($a['attempted_at'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></td>
                        <td>
                            <?php if ($a['success']): ?>
                                <span class="badge bg-success">Sucesso</span>
                            <?php else: ?>
                                <span class="badge bg-danger">Falha</span>
                            <?php endif; ?>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>

        <?php if ($totalPages > 1): ?>
        <nav>
            <ul class="pagination justify-content-center">
                <li class="page-item <?= $page <= 1 ? 'disabled' : '' ?>">
                    <a class="page-link" href="?page=<?= $page - 1 ?>&filter=<?= urlencode($filter) ?>&search=<?= urlencode($search) ?>">Anterior</a>
                </li>
                <?php for ($i = 1; $i <= $totalPages; $i++): ?>
                <li class="page-item <?= $i === $page ? 'active' : '' ?>">
                    <a class="page-link" href="?page=<?= $i ?>&filter=<?= urlencode($filter) ?>&search=<?= urlencode($search) ?>"><?= $i ?></a>
                </li>
                <?php endfor; ?>
                <li class="page-item <?= $page >= $totalPages ? 'disabled' : '' ?>">
                    <a class="page-link" href="?page=<?= $page + 1 ?>&filter=<?= urlencode($filter) ?>&search=<?= urlencode($search) ?>">Próximo</a>
                </li>
            </ul>
        </nav>
        <?php endif; ?>

        <p class="text-muted small">Total de registros: <?= (int) $total ?></p>
    </div>
</body>
</html>
