<?php
$item_nome = $_POST["item_nome"];
$item_data_garantia = $_POST["item_data_garantia"];
$id_tipo = $_POST["tipo_item"];
$item_desc = $_POST["item_desc"];
$item_nserie = $_POST["item_nserie"];
$connection = new mysqli("localhost","root","", "lab_hard");
$sql = "UPDATE inventario SET item_desc = '$item_desc', item_data_garantia = '$item_data_garantia', item_nome = '$item_nome', id_tipo = '$id_tipo' WHERE item_nserie = $item_nserie";
$connection->query($sql);
$_SESSION['resultado'] = "item Editado com sucesso";
header("location: listar_itens.php");
exit(); 
?>