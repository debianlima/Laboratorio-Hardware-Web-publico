<?php
$item_nome = $_POST["item_nome"];
$item_nserie = $_POST["item_nserie"];
/* $item_imagem = $_FILES["item_imagem"];  */
$item_imagem = NULL;
$item_data_garantia = $_POST["item_data_garantia"];
$id_tipo = $_POST["tipo_item"];
$item_desc = $_POST["item_desc"];
session_start();
require_once 'flash.php';


$connection = new mysqli("localhost","root","", "lab_hard");
if ($connection->connect_error) {
    definirMensagem("Erro a conectar ao BD","warning");
    echo "aaaaaaaaa";
    printf($item_data_garantia);
    header("location: cadastrar_item.php");
    exit(); 
}
else{

    if($item_imagem != NULL) {
        
        $nomeFinal = time().'.jpg';
        if (move_uploaded_file($item_imagem['tmp_name'], $nomeFinal)) {
            $tamanhoImg = filesize($nomeFinal);


            $mysqlImg = addslashes(fread(fopen($nomeFinal, "r"), $tamanhoImg));

            $connection->query("INSERT INTO inventario (item_nome,item_nserie,item_imagem,item_data_garantia,id_tipo,item_desc)
            VALUES ('$item_nome','$item_nserie','$mysqlImg','$item_data_garantia','$id_tipo','$item_desc');") or
            die("O sistema não foi capaz de executar a query");

            unlink($nomeFinal);
            definirMensagem("Item cadastrado com sucesso","sucess");

        }
    }
        else {
            printf($item_data_garantia);
            $connection->query("INSERT INTO inventario (item_nome,item_nserie,item_data_garantia,id_tipo,item_desc)
            VALUES ('$item_nome','$item_nserie','$item_data_garantia','$id_tipo','$item_desc');") or
            die("O sistema não foi capaz de executar a query");
            definirMensagem("Item cadastrado com sucesso","sucess");
    }
header("location: cadastrar_item.php");
exit(); 
    }

$connection -> close();


?>