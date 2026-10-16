<?php
echo "1. Iniciando teste...<br>";
flush();

$host = '127.0.0.1';
$user = 'root';
$pass = '';

echo "2. Tentando conectar ao host: $host com usuário: $user...<br>";
flush();

// Silenciar erros para tratar manualmente
mysqli_report(MYSQLI_REPORT_OFF);

$start = microtime(true);
$conn = mysqli_init();
$conn->options(MYSQLI_OPT_CONNECT_TIMEOUT, 2); // Timeout curto de 2 segundos

echo "3. Chamando real_connect...<br>";
flush();

$success = @$conn->real_connect($host, $user, $pass);

$end = microtime(true);
$time = round($end - $start, 2);

if ($success) {
    echo "4. <b style='color:green'>SUCESSO!</b> Conectado em $time segundos.<br>";
    $conn->close();
} else {
    echo "4. <b style='color:red'>FALHA!</b> Erro: " . mysqli_connect_error() . " (Levou $time segundos)<br>";
    echo "Dica: Se levou muito tempo, o problema é rede/firewall. Se foi instantâneo, é usuário/senha.<br>";
}

echo "<br><b>Verifique no XAMPP Control Panel se o MySQL está verde e qual porta aparece.</b>";
?>
