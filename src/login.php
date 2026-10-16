<?php
require_once __DIR__ . '/config/security_headers.php';
require_once __DIR__ . '/utils/session.php';
require_once __DIR__ . '/config/rate_limit.php';
require_once __DIR__ . '/config/db.php';

protectSession();

$error = '';
$ip = getClientIp();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $senha = $_POST['senha'] ?? '';
    $csrf = $_POST['csrf'] ?? '';

    if (!hash_equals($_SESSION['csrf_token'] ?? '', $csrf)) {
        $error = 'Token de segurança inválido. Tente novamente.';
        logLoginAttempt($ip, $username, false);
    } elseif (isRateLimited($ip)) {
        $error = 'Muitas tentativas de login. Aguarde 15 minutos.';
        logLoginAttempt($ip, $username, false);
    } elseif ($username === '' || $senha === '') {
        $error = 'Preencha todos os campos.';
        logLoginAttempt($ip, $username, false);
    } else {
        $conn = conectar();
        if (!$conn) {
            $error = 'Erro ao conectar ao banco de dados.';
        } else {
            $stmt = $conn->prepare('SELECT id, username, senha, tipo FROM usuarios WHERE username = ? LIMIT 1');
            $stmt->bind_param('s', $username);
            $stmt->execute();
            $result = $stmt->get_result();
            $user = $result->fetch_assoc();
            $stmt->close();
            $conn->close();

            if ($user && password_verify($senha, $user['senha'])) {
                logLoginAttempt($ip, $username, true);
                session_regenerate_id(true);
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                $_SESSION['tipo'] = $user['tipo'];
                $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
                $_SESSION['last_activity'] = time();
                header('Location: /index.php');
                exit;
            }

            $error = 'Usuário ou senha inválidos.';
            logLoginAttempt($ip, $username, false);
        }
    }
}

if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Lab Hardware</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
            min-height: 100vh;
            display: flex;
            align-items: center;
        }
        .login-card {
            max-width: 400px;
            margin: 0 auto;
            border-radius: 0.75rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card login-card shadow-sm">
            <div class="card-body p-4">
                <h2 class="card-title text-center mb-4">Lab Hardware</h2>
                <h5 class="text-center mb-4 text-muted">Acesso ao Sistema</h5>

                <?php if ($error): ?>
                <div class="alert alert-danger" role="alert">
                    <?= htmlspecialchars($error, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?>
                    <?php if (!str_contains($error, 'Muitas tentativas')): ?>
                        <small class="d-block mt-1">Tentativas restantes: <?= getRemainingAttempts($ip) ?></small>
                    <?php endif; ?>
                </div>
                <?php endif; ?>

                <form method="post" action="/login.php">
                    <div class="mb-3">
                        <label for="username" class="form-label">Usuário</label>
                        <input type="text" class="form-control" id="username" name="username" required autofocus>
                    </div>
                    <div class="mb-4">
                        <label for="senha" class="form-label">Senha</label>
                        <input type="password" class="form-control" id="senha" name="senha" required>
                    </div>
                    <input type="hidden" name="csrf" value="<?= htmlspecialchars($_SESSION['csrf_token'] ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?>">
                    <button type="submit" class="btn btn-primary w-100">Entrar</button>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
