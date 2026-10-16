<?php
$connection = new mysqli("localhost","root","", "lab_hard");
$nome = $_POST["nome_tipo"];
$sql = "Insert INTO tipo_item VALUES(0,'$nome');";
require_once 'flash.php';
session_start();
if ($connection->connect_error) {
        echo "Erro ao conectar ao BD";
    }
    else {
        if ($nome != "") {
            if ($connection->query($sql) == TRUE) {
                echo "tipo cadastrado com sucesso";
                definirMensagem("Tipo cadastrado com sucesso","sucess");


        }
            else {
                $_SESSION['resultado'] = "Erro ao cadastrar o tipo: " . $connection->error;
        }
    }
    
}
header("location: cadastrar_tipo.php");
exit();
$connection -> close();
?>