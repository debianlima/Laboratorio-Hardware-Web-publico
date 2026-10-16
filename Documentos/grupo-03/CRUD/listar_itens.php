<?php
$connection = new mysqli("localhost","root","", "lab_hard");
$sql = "select inventario.*, tipo_item.nome_tipo from inventario inner join tipo_item on inventario.id_tipo = tipo_item.id_tipo;";
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
                <a href="remocao_itens.php">Remover Item</a>
                <a href="listar_itens.php" class="destaque">Listar e Editar itens</a>
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
                Listar Itens
            </div>
            <div class="linha centro-jc">
            <table class="glass-s">
                 <tr>
                        <th>Numero de serie</th>
                        <th>Nome</th>
                        <th>tipo de item </th>
                        <th>Descrição</th>
                        <th>Ação</th> 
                    </tr>       

                <?php if ($resultado->num_rows> 0):
                        while ($item = $resultado->fetch_assoc()):  ?>
                        <tr>
                            <th><?=$item['item_nserie']?></th>
                            <th><?=$item['item_nome']?></th>
                            <th><?=$item['nome_tipo']?></th>
                            <th><?=$item['item_desc']?></th>
                            <th><button class="cinza-c"><a href="editar_itens.php?item_nserie=<?= $item['item_nserie'] ?>&id_tipo=<?= $item['id_tipo']?>">Editar</button></th>
                        <tr>
                    <?php endwhile; 
                    endif;?>
            </table>
            <?php
if (isset($_SESSION['resultado'])){
    echo $_SESSION['resultado'];
    session_destroy();
}
$connection -> close();
?>
                </div>
        </div>
    </main>
    
    <footer>
        Footer
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
