<?php
if (!isset($_SESSION)) {
    session_start();
}

function definirMensagem($mensagem, $tipo = 'info') {
    $_SESSION['flash'] = [
        'mensagem' => $mensagem,
        'tipo'    => $tipo
    ];
}

function exibirMensagem() {
    if (isset($_SESSION['flash'])) {
        echo "<div class='alert alert-{$_SESSION['flash']['tipo']} mb-3' >{$_SESSION['flash']['mensagem']}</div>";
        unset($_SESSION['flash']);
    }
}