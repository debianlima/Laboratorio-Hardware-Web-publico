<?php
function conectar() {
    $host = '127.0.0.1';
    $user = 'root';
    $pass = ''; // Senha padrão do XAMPP é vazia
    $db = 'lab_system';

    try {
        $conn = new mysqli($host, $user, $pass, $db);
        if ($conn->connect_error) {
            return null;
        }
        $conn->set_charset('utf8mb4');
        return $conn;
    } catch (Exception $e) {
        return null;
    }
}
