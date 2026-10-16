<?php
$connection = new mysqli("localhost","root","", "lab_hard");
$item_nserie = (int) ($_GET['item_nserie'] ?? $_POST['item_nserie'] ?? 0);
$id_tipo = (int) ($_GET['id_tipo'] ?? $_POST['id_tipo'] ?? 0);
$sql = "Select * from tipo_item;";
$resultado = $connection->query($sql);
session_start();
$sql = "Select nome_tipo from tipo_item where id_tipo = $id_tipo";
$tipo_antigo = $connection->query($sql);
$tipo_antigasso = $tipo_antigo->fetch_assoc();
$sql = "Select * from inventario where item_nserie = $item_nserie";
$placeholder = $connection->query($sql);
$old = $placeholder->fetch_assoc();
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
                Editar Item <br>
                Deixe em branco para manter
                
            </div>
            <form action="editar_itens_BD.php"  method="POST">
            <div class="linha">
            <div class="campo flex">
                <label for="item_nome">Novo nome do item</label>
                <input type="text" class="glass" id="item_nome" name="item_nome" maxlength="100" placeholder="Insira o nome do Item" value="<?=$old['item_nome']?>">
            </div>
        </div>
        <div class="linha">
            <div class="campo flex">
                <label for="item_data_garantia">Nova Data em que a garantia acaba</label>
                <input type="date" id="item_data_garantia" name="item_data_garantia" class="glass" value="<?=$old['item_data_garantia']?>">
            </div>
        </div>
        <div class="linha">
            <div class="campo flex">
                <label for="tipo_item">Novo Tipo do Item (Tipo antigo: <?= $tipo_antigasso["nome_tipo"] ?>)</label>
                <select name="tipo_item" id="tipo_item" class="glass">
                    <?php if ($resultado->num_rows> 0):
                        while ($tipo = $resultado->fetch_assoc()):  ?>
                        <option value="<?=$tipo['id_tipo']?>"><?= $tipo['nome_tipo'] ?></option>
                    <?php endwhile; 
                    endif;?>
                </select>
            </div>
        </div>

        <div class="linha">
            <div class="campo flex">
               <label for="item_desc">Nova Descrição do Item </label>
                <input type="text" id="item_desc" name="item_desc" class="glass" value="<?=$old['item_desc']?>">
            </div>
        </div>
    <input type="hidden" name="item_nserie" value="<?=$old['item_nserie']?>">

        <div class="linha">
            <div class="campo flex">
                 <input type="submit" value="Editar" class="glass">
            </div>
        </div>
                </form>













                </div>
    </main>
    
    <footer>
        Footer
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
