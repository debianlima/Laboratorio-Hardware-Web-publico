<?php
// Configurações de conexão (padrão XAMPP)
$host = '127.0.0.1';
$user = 'root';
$pass = '';
$sql_file = 'database.sql';

echo "<h3>Importador Automático de Banco de Dados</h3>";

// 1. Conectar ao MySQL (sem selecionar banco de dados ainda)
$conn = @new mysqli($host, $user, $pass);

if ($conn->connect_error) {
    die("<span style='color:red'>Erro de conexão: " . $conn->connect_error . "</span><br>Certifique-se de que o MySQL está ligado no XAMPP.");
}

echo "Conectado ao MySQL com sucesso!<br>";

// 2. Ler o arquivo SQL
if (!file_exists($sql_file)) {
    die("<span style='color:red'>Erro: Arquivo $sql_file não encontrado na pasta raiz.</span>");
}

$sql_content = file_get_contents($sql_file);

// Remover BOM (Byte Order Mark) se existir
$bom = pack('H*','EFBBBF');
$sql_content = preg_replace("/^$bom/", '', $sql_content);

// 3. Executar o SQL (comandos múltiplos)
// O mysqli->multi_query permite executar várias instruções separadas por ;
if ($conn->multi_query($sql_content)) {
    do {
        // Limpar resultados para poder continuar
        if ($result = $conn->store_result()) {
            $result->free();
        }
    } while ($conn->next_result());
    
    echo "<span style='color:green; font-weight:bold;'>BINGO! Banco de dados criado e tabelas importadas com sucesso!</span><br>";
    echo "Agora você pode tentar fazer o login em: <a href='index.php'>Página de Login</a><br>";
    echo "<b>Usuário:</b> admin | <b>Senha:</b> admin";
} else {
    echo "<span style='color:red'>Erro ao executar SQL: " . $conn->error . "</span>";
}

$conn->close();
?>
