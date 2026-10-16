<?php
session_start();
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/flash.php';
require_once __DIR__ . '/../config/auth.php';
require_once __DIR__ . '/../config/csrf.php';
requerLogin();
if (!verificarPermissao(['admin','librarian'])) {
    definirMensagem('Acesso negado.', 'danger');
    header('Location: /index.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /itens/listar.php');
    exit;
}

$token = $_POST['csrf_token'] ?? '';
if (!validarTokenCSRF($token)) {
    definirMensagem('Sessão inválida. Tente novamente.', 'danger');
    header('Location: /itens/listar.php');
    exit;
}

$id = $_POST['id'] ?? null;
if (!$id) {
    definirMensagem('Item não informado.', 'danger');
    header('Location: /itens/listar.php');
    exit;
}

$conn = conectar();
if (!$conn) {
    definirMensagem('Erro ao conectar no banco de dados.', 'danger');
    header('Location: /index.php');
    exit;
}

$stmt = $conn->prepare("SELECT id, nome FROM itens WHERE id = ? LIMIT 1");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$item = $result->fetch_assoc();
$stmt->close();

if (!$item) {
    definirMensagem('Item não encontrado.', 'danger');
    header('Location: /itens/listar.php');
    exit;
}

$stmt = $conn->prepare("DELETE FROM itens WHERE id = ?");
$stmt->bind_param("i", $id);
$ok = $stmt->execute();
$stmt->close();
$conn->close();

if ($ok) {
    definirMensagem('Item "' . htmlspecialchars($item['nome']) . '" excluído com sucesso.', 'success');
} else {
    definirMensagem('Erro ao excluir item.', 'danger');
}

header('Location: /itens/listar.php');
exit;
