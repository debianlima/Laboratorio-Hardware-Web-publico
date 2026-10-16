<?php
session_start();
require_once 'includes/users_db.php';
require_once 'includes/flash.php';

if (empty($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}

if ($_SESSION['tipo'] !== 'administrador') {
    header('Location: dashboard.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: users_list.php');
    exit;
}

if ($_POST['id'] <= 0) {
    setFlash('Erro ao excluir usuário.', 'danger');
    header('Location: users_list.php');
    exit;
}

if ($_POST['id'] == $_SESSION['user_id']) {
    setFlash('Não é possível excluir seu próprio usuário.', 'warning');
    header('Location: users_list.php');
    exit;
}

$conn = conectar();
$resultado = excluirUsuario($conn, $_POST['id']);
$conn->close();

if ($resultado) {
    definirMensagem('Usuário excluído com sucesso.', 'success');
} else {
    definirMensagem('Erro ao excluir usuário.', 'danger');
}
header('Location: users_list.php');
exit;
