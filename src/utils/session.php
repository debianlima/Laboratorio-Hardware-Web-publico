<?php

/**
 * Utilitários de sessão para centralizar cookie seguro, timeout e regeneração.
 */
function requisicaoHttps(): bool
{
    if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') {
        return true;
    }

    if (($_SERVER['SERVER_PORT'] ?? null) === '443') {
        return true;
    }

    $forwardedProto = $_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '';
    return strtolower($forwardedProto) === 'https';
}

function iniciarSessaoSegura(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        return;
    }

    session_set_cookie_params([
        'lifetime' => 1800,
        'path' => '/',
        'domain' => '',
        'secure' => requisicaoHttps(),
        'httponly' => true,
        'samesite' => 'Strict',
    ]);

    session_start();
}

function protectSession(int $timeout = 1800): void
{
    iniciarSessaoSegura();

    $agora = time();

    if (isset($_SESSION['last_activity']) && ($agora - (int) $_SESSION['last_activity']) > $timeout) {
        $_SESSION = [];

        if (ini_get('session.use_cookies')) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'], $params['secure'], $params['httponly']);
        }

        session_destroy();
        iniciarSessaoSegura();
    }

    if (empty($_SESSION['session_initialized'])) {
        session_regenerate_id(true);
        $_SESSION['session_initialized'] = true;
    }

    $_SESSION['last_activity'] = $agora;
}
