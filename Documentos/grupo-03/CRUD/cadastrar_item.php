
<?php
$connection = new mysqli("localhost","root","", "lab_hard");
$sql = "Select * from tipo_item;";
$resultado = $connection->query($sql);
session_start();
require_once 'flash.php';
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
                <a href="cadastrar_item.php" class="destaque">Cadastrar Item</a>
                <a href="cadastrar_tipo.php">Cadastrar tipo de item</a>
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
                Cadastrar Item
            </div>
        
    <form action="cadastrar_item_BD.php" method="POST" enctype="multipart/form-data">
        <div class="linha">
            <div class="campo flex">
                <label for="item_nome">Nome do item</label>
                <input type="text" class="glass" id="item_nome" name="item_nome" maxlength="100" placeholder="Insira o nome do Item">
            </div>
        </div>
        <div class="linha">
            <div class="campo flex">
                <label for="item_nserie">Número de Série</label>
                <input type="text" class="glass"id="item_nserie" name="item_nserie" maxlength="20" onblur="" placeholder="Inisira aqui">
            </div>
        </div>
        <div class="linha">
            <div class="campo flex">
                <label for="item_data_garantia">Data em que a garantia acaba</label>
                <input type="date" id="item_data_garantia" name="item_data_garantia" class="glass">
            </div>
        </div>
        <div class="linha">
            <div class="campo flex">
                <label for="tipo_item">Tipo do Item </label>
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
                <label for="item_desc">Descrição do Item </label>
                <input type="text" id="item_desc" name="item_desc" class="glass">
            </div>
        </div>


        <div class="linha">
            <div class="campo flex">
                <input type="submit" value="Cadastrar" class="glass">
            </div>
        </div>

            </form>
<?php
/* if (isset($_SESSION['resultado'])){ */
    exibirMensagem();
    session_destroy();
/* }
 */$connection -> close();
?>




    </div>
    </main>

    <footer>
        Footer
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
