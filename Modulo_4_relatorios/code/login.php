<?php
session_start();
require_once 'includes/users_db.php';
require_once 'includes/flash.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php');
    exit;
}

$username = $_POST['username'];
$senha = $_POST['password'];

if (empty($username) || empty($senha)) {
    definirMensagem('Preencha usuário e senha.', 'danger');
    header('Location: index.php');
    exit;
}

$conn = conectar();
$resultado = buscarUsuario($conn, $username);
$conn->close();

if ($resultado && password_verify($senha, $resultado['senha'])) {
    $_SESSION['user_id'] = $resultado['id'];
    $_SESSION['username'] = $resultado['username'];
    $_SESSION['tipo'] = $resultado['tipo'];
    header('Location: dashboard.php');
    exit;
}

definirMensagem('Usuário ou senha inválidos.', 'danger');
header('Location: index.php');
exit;
