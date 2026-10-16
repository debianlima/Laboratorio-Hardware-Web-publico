<?php
session_start();
require_once 'includes/labs_db.php';
require_once 'includes/flash.php';

if (empty($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = (int) ($_POST['id'] ?? 0);

    if ($id <= 0) {
        definirMensagem('ID inválido.', 'danger');
        header('Location: labs_list.php');
        exit;
    }

    $conn = conectar();
    if (!$conn) {
        definirMensagem('Erro ao conectar no banco.', 'danger');
        header('Location: labs_list.php');
        exit;
    }

    if (excluirLaboratorio($conn, $id)) {
        definirMensagem('Laboratório excluído com sucesso.', 'success');
    } else {
        definirMensagem('Erro ao excluir laboratório.', 'danger');
    }

    $conn->close();
}

header('Location: labs_list.php');
exit;
