<?php

function garantirSessaoIniciada(): void
{
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
}

function requerLogin(): void
{
    garantirSessaoIniciada();

    if (!isset($_SESSION['user_id'])) {
        header('Location: /login.php');
        exit;
    }
}

function normalizarTipoUsuario(string $tipo): string
{
    return match ($tipo) {
        'admin' => 'administrador',
        default => $tipo,
    };
}

function tipoUsuarioAtual(): ?string
{
    garantirSessaoIniciada();

    if (!empty($_SESSION['tipo'])) {
        return normalizarTipoUsuario((string) $_SESSION['tipo']);
    }

    $userId = $_SESSION['user_id'] ?? null;
    if (!$userId) {
        return null;
    }

    require_once __DIR__ . '/db.php';
    $conn = conectar();
    if (!$conn) {
        return null;
    }

    $stmt = $conn->prepare('SELECT tipo FROM usuarios WHERE id = ? LIMIT 1');
    $stmt->bind_param('i', $userId);
    $stmt->execute();
    $stmt->bind_result($tipo);
    $stmt->fetch();
    $stmt->close();
    $conn->close();

    if (!$tipo) {
        return null;
    }

    $_SESSION['tipo'] = normalizarTipoUsuario((string) $tipo);
    return $_SESSION['tipo'];
}

function verificarPermissao(array $tiposPermitidos = ['administrador']): bool
{
    requerLogin();

    $tipoAtual = tipoUsuarioAtual();
    if (!$tipoAtual) {
        return false;
    }

    $tiposNormalizados = array_map(
        fn ($tipo) => normalizarTipoUsuario((string) $tipo),
        $tiposPermitidos
    );

    return in_array($tipoAtual, $tiposNormalizados, true);
}

function requerPermissao(array $tiposPermitidos = ['administrador']): void
{
    if (!verificarPermissao($tiposPermitidos)) {
        header('Location: /index.php');
        exit;
    }
}
