<?php
session_start();
require_once __DIR__ . '/config/csrf.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /login.php');
    exit;
}

$token = $_POST['csrf_token'] ?? '';
if (!validarTokenCSRF($token)) {
    header('Location: /login.php');
    exit;
}

$_SESSION = [];
session_destroy();
header('Location: /login.php');
exit;
