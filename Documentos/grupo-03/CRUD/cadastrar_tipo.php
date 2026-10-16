<?php     
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
                <a href="cadastrar_item.php" >Cadastrar Item</a>
                <a href="cadastrar_tipo.php" class="destaque">Cadastrar tipo de item</a>
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




            <form action="cadastrar_tipo_BD.php"  method="POST">
            <div class="linha">
            <div class="campo flex">
                <label for="nome_tipo">Nome do tipo</label>
                <input type="text" id="nome_tipo" class="glass" name="nome_tipo" maxlength="100">
</div>
</div>
            <div class="linha">
            <div class="campo flex">
                <input type="submit" class="glass" value="Cadastrar">
                </div>
</div>
<?php
exibirMensagem();
?>
            </form>
    </div>
    </main>
    
    <footer>
        Footer
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
