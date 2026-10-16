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
    header('Location: relatorios_list.php');
    exit;
}

$conn = conectar();
$resultado = excluirRelatorio($conn, $_POST['titulo']);
$conn->close();

if ($resultado) {
    definirMensagem('Relatório excluído com sucesso.', 'success');
} else {
    definirMensagem('Erro ao excluir relatório.', 'danger');
}
header('Location: relatorios_list.php');
exit;
