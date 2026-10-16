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

if ((int) ($_POST['id'] ?? 0) <= 0) {
    definirMensagem('Erro ao excluir usuÃ¡rio.', 'danger');
    header('Location: users_list.php');
    exit;
}

$id = (int) $_POST['id'];

if ($id == $_SESSION['user_id']) {
    definirMensagem('NÃ£o Ã© possÃ­vel excluir seu prÃ³prio usuÃ¡rio.', 'warning');
    header('Location: users_list.php');
    exit;
}

$conn = conectar();
if (!$conn) {
    definirMensagem('Erro ao conectar no banco.', 'danger');
    header('Location: users_list.php');
    exit;
}
$resultado = excluirUsuario($conn, $id);
$conn->close();

if ($resultado) {
    definirMensagem('UsuÃ¡rio excluÃ­do com sucesso.', 'success');
} else {
    definirMensagem('Erro ao excluir usuÃ¡rio.', 'danger');
}
header('Location: users_list.php');
exit;




