<?php
session_start();
require_once __DIR__ . '/config/flash.php';
require_once __DIR__ . '/config/auth.php';
require_once __DIR__ . '/config/csrf.php';
requerLogin();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab Hardware - Painel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; }
        .card { border-radius: 0.75rem; }
        .card-link { text-decoration: none; }
        .card-link:hover .card { border-color: #0d6efd; box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1); }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.php">Lab Hardware</a>
            <div class="navbar-nav me-auto">
                <a class="nav-link text-white" href="/itens/listar.php">Itens</a>
                <a class="nav-link text-white" href="/emprestimos/listar.php">Empréstimos</a>
            </div>
            <div class="navbar-nav">
                <?php if (isset($_SESSION['username'])): ?>
                    <span class="nav-link text-white">Olá, <?= htmlspecialchars($_SESSION['username']) ?></span>
                    <form method="post" action="/logout.php" class="d-inline">
                        <input type="hidden" name="csrf_token" value="<?= gerarTokenCSRF() ?>">
                        <button type="submit" class="btn nav-link text-white border-0">Sair</button>
                    </form>
                <?php else: ?>
                    <a class="nav-link text-white" href="/login.php">Entrar</a>
                <?php endif; ?>
            </div>
        </div>
    </nav>

    <div class="container mt-3 mt-md-4">
        <h1 class="h4 mb-4">Painel do Laboratório</h1>

        <?php exibirMensagem(); ?>

        <div class="row g-3">
            <div class="col-12 col-md-6 col-lg-4">
                <a class="card-link" href="/itens/listar.php">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h5 class="card-title">Itens / Equipamentos</h5>
                            <p class="card-text text-muted">Cadastrar, listar, editar e excluir itens do laboratório.</p>
                            <span class="btn btn-primary">Gerenciar Itens</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <a class="card-link" href="/emprestimos/listar.php">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h5 class="card-title">Empréstimos</h5>
                            <p class="card-text text-muted">Registrar, acompanhar e devolver empréstimos de equipamentos.</p>
                            <span class="btn btn-primary">Gerenciar Empréstimos</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
