<?php
if (!isset($_SESSION)) {
    session_start();
}

function definirMensagem($mensagem, $tipo = 'info') {
    $tiposValidos = ['info', 'success', 'warning', 'danger'];
    if (!in_array($tipo, $tiposValidos, true)) {
        $tipo = 'info';
    }
    $_SESSION['flash'] = [
        'mensagem' => $mensagem,
        'tipo'    => $tipo
    ];
}

function exibirMensagem() {
    if (isset($_SESSION['flash'])) {
        $tipo = htmlspecialchars($_SESSION['flash']['tipo'], ENT_QUOTES, 'UTF-8');
        $mensagem = htmlspecialchars($_SESSION['flash']['mensagem'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        echo "<div class='alert alert-{$tipo} mb-3'>{$mensagem}</div>";
        unset($_SESSION['flash']);
    }
}
