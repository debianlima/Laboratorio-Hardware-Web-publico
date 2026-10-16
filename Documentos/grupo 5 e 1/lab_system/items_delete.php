<?php
session_start();
require_once 'includes/items_db.php';
require_once 'includes/flash.php';

if (empty($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: items_list.php');
    exit;
}

if ((int) ($_POST['id'] ?? 0) <= 0) {
    definirMensagem('Erro ao excluir item.', 'danger');
    header('Location: items_list.php');
    exit;
}

$id = (int) $_POST['id'];
$conn = conectar();
if (!$conn) {
    definirMensagem('Erro ao conectar no banco.', 'danger');
    header('Location: items_list.php');
    exit;
}

$resultado = excluirItem($conn, $id);
$conn->close();

if ($resultado) {
    definirMensagem('Item excluÃ­do com sucesso.', 'success');
} else {
    definirMensagem('Erro ao excluir item.', 'danger');
}
header('Location: items_list.php');
exit;
