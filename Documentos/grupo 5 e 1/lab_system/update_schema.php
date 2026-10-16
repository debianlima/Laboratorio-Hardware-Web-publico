<?php
require_once 'includes/db.php';
$conn = conectar();
if (!$conn) die("Falha na conexão.");

// 1. Remover tabela antiga
echo "Dropando tabela itens... ";
$conn->query("DROP TABLE IF EXISTS itens");
echo "OK.<br>";

// 2. Criar nova tabela
echo "Criando tabela laboratorios... ";
$sql = "CREATE TABLE IF NOT EXISTS laboratorios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    lugar VARCHAR(100) NOT NULL DEFAULT 'IFF Bom Jesus',
    nome VARCHAR(100) NOT NULL,
    tipo ENUM('redes', 'hardware', 'robotica', 'informatica_normal') NOT NULL DEFAULT 'informatica_normal',
    tecnico_responsavel VARCHAR(100),
    informacao_adicional TEXT
)";
if ($conn->query($sql)) {
    echo "OK.<br>";
} else {
    echo "Erro: " . $conn->error . "<br>";
}

// 3. Atualizar admin (garantir que existe)
echo "Verificando admin... ";
$conn->query("INSERT IGNORE INTO usuarios (username, senha, tipo) VALUES ('admin', '$2y$10$uSjd/UFE8qJ4wqVjllQraeHAeyZmICDr3TbcEJ.PoC2cFMtVuWhua', 'administrador')");
echo "OK.<br>";

echo "<h3>Refatoração de banco concluída!</h3>";
$conn->close();
?>
