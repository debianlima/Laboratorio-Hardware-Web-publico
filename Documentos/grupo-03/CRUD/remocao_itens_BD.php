<?php
$item_nserie = $_POST['item_nserie'];
$motivo = $_POST['motivo'];
$connection = new mysqli("localhost","root","", "lab_hard");
$sql = "Delete from inventario where item_nserie=$item_nserie;";
$sql_log = "Insert into logs(id_log,id_tipo,log) Values (0,0,'$motivo');";
session_start();


if ($connection->connect_error) {
        echo "Erro ao conectar ao BD";
    }
    else {
        if($motivo != ""){
            if ($item_nserie != "") {
                if ($connection->query($sql) == TRUE && $connection->query($sql_log) == TRUE) {
                    $_SESSION['resultado'] = "item removido com sucesso";
                    header("location: remocao_itens.php");
                    exit(); 

            }
                else {
                    $_SESSION['resultado'] = "Erro ao remover o item: " . $connection->error;;
                    header("location: remocao_itens.php");
                    exit();
            }
        }
    }
        else{
            $_SESSION['resultado'] = "Erro ao remover o item: " . "Faltou o motivo de exclusão";;
            header("location: remocao_itens.php");
            exit();
        }
}  

$connection -> close();
?>

