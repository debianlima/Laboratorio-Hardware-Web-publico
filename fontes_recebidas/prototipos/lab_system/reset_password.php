<?php
require_once 'includes/db.php';
$conn = conectar();

if (!$conn) {
    die("Erro ao conectar no banco.");
}

$username = 'admin';
$nova_senha_texto = 'admin';
$hash = password_hash($nova_senha_texto, PASSWORD_DEFAULT);

$stmt = $conn->prepare("UPDATE usuarios SET senha = ? WHERE username = ?");
$stmt->bind_param("ss", $hash, $username);

if ($stmt->execute()) {
    echo "<h3>Senha resetada com sucesso!</h3>";
    echo "Usuário: <b>admin</b><br>";
    echo "Nova Senha: <b>admin</b><br><br>";
    echo "<a href='index.php'>Ir para o Login</a>";
} else {
    echo "Erro ao resetar senha: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
