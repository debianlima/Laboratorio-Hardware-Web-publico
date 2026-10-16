<?php
$connection = new mysqli("localhost","root","", "lab_hard");
$sql = "Select * from inventario;";
$resultado = $connection->query($sql);
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Inventário - HardLab</title>
    <link rel="icon" type="images/png" href="assets/iconesinventario.png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/padrao.css">
</head>

<body>
    <header>
        <nav class="glass" style="border: none;">
            <button>
                <img src="assets/burger.png" aria-label="abrir menu">
            </button>
            
            <div class="logo">
                <img src="assets/iff-lab.png">
            </div>
            
            <div class="paginas"> <!-- Opcoes da navbar para desktop -->
                <a href="cadastrar_item.php" >Cadastrar Item</a>
                <a href="cadastrar_tipo.php" >Cadastrar tipo de item</a>
                <a href="remocao_itens.php" class="destaque">Remover Item</a>
                <a href="listar_itens.php" >Listar e Editar itens</a>
                
            </div>
            
            <figure class="conta"> 
                <img src="assets/conta.png">
            </figure>
        </nav>
        <div class="hamburguer"> <!-- Menu Hamburguer para Mobile -->
            <a href="index.html">Início</a>
            <a href="agenda.html">Agenda</a>
            <a href="inventario.html">Inventário</a>
            <a href="relatorios.html">Relatórios</a>
            <a href="suporte.html">Suporte</a>
            <a href="conta.html">Conta</a>
        </div>
    </header>

    <main>
        <div class="fundo glass">
            <div class="fundo__titulo">
                Remover Item
            </div>

<form action="remocao_itens_BD.php" method="post">
            <div class="linha">
            <div class="campo flex">
                <label for="item_nserie">Item a ser excluído</label>
    <select name="item_nserie" id="item_nserie" class="glass">
    <?php if ($resultado->num_rows> 0):
        while ($item = $resultado->fetch_assoc()):  ?>
        <option value="<?=$item['item_nserie']?>"><?= $item['item_nome'] ?> <?= $item['item_nserie']?></option>
    <?php endwhile; 
    endif;?>
</select>
</div>
</div>
        <div class="linha">
            <div class="campo flex"> 
<label for="motivo">Motivo da Remoção</label>
<input type="text" name="motivo" id="motivo" class="glass">
</div>
</div>
<div class="linha">
            <div class="campo flex">
<input type="submit" value="Remover" class="glass">
</div>
</div>
</form>

<?php
if (isset($_SESSION['resultado'])){
    echo $_SESSION['resultado'];
    session_destroy();
}
$connection -> close();
?>
