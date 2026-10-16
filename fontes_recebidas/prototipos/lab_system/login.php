<input type="hidden" name="csrf" value="<?php echo generate_csrf(); ?>">
<?php
if (!validate_csrf($_POST['csrf'] ?? '')) {
    definirMensagem('Token CSRF inválido.', 'danger');
    header('Location: index.php');
    exit;
}

require_once 'includes/security.php';
session_start();
require_once 'includes/users_db.php';
require_once 'includes/flash.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php');
    exit;
}

$username = trim($_POST['username'] ?? '');
$senha = trim($_POST['password'] ?? '');

if (empty($username) || empty($senha)) {
    definirMensagem('Preencha usuário e senha.', 'danger');
    header('Location: index.php');
    exit;
}

$conn = conectar();
if (!$conn) {
    definirMensagem('Erro ao conectar no banco.', 'danger');
    header('Location: index.php');
    exit;
}

$resultado = buscarUsuario($conn, $username);
$conn->close();

$autenticado = false;
$migrarSenhaLegada = false;

if ($resultado) {
    if (password_verify($senha, $resultado['senha'])) {
        $autenticado = true;
    } elseif (hash_equals($resultado['senha'], $senha)) {
        // Compatibilidade com registros antigos salvos em texto puro.
        $autenticado = true;
        $migrarSenhaLegada = true;
    }
}

if ($autenticado) {
    if ($migrarSenhaLegada) {
        $conn = conectar();
        if ($conn) {
            $novoHash = password_hash($senha, PASSWORD_DEFAULT);
            $stmt = $conn->prepare('UPDATE usuarios SET senha = ? WHERE id = ?');
            if ($stmt) {
                $stmt->bind_param('si', $novoHash, $resultado['id']);
                $stmt->execute();
                $stmt->close();
            }
            $conn->close();
        }
    }

    $_SESSION['user_id'] = $resultado['id'];
    $_SESSION['username'] = $resultado['username'];
    $_SESSION['tipo'] = $resultado['tipo'];
    header('Location: dashboard.php');
    exit;
}

definirMensagem('Usuário ou senha inválidos.', 'danger');
header('Location: index.php');
exit;