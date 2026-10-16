<?php
// dashboard.php
session_start();
require_once 'includes/flash.php';

if (empty($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}

$pageTitle = 'Dashboard - Lab System';
include 'includes/header.php';
?>

  <div class="container mt-4">
    <?php exibirMensagem(); ?>
    <h1 class="h4 text-muted">Página inicial</h1>
    
    <div class="row mt-4">
        <div class="col-md-4">
            <div class="card shadow-sm border-0">
                <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">Laboratórios</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">Gerenciar os laboratórios cadastrados no sistema.</p>
                    <a href="labs_list.php" class="btn btn-primary d-block">Acessar</a>
                </div>
            </div>
        </div>
        <?php if (($_SESSION['tipo'] ?? '') === 'administrador'): ?>
        <div class="col-md-4">
            <div class="card shadow-sm border-0">
                <div class="card-header bg-dark text-white">
                    <h5 class="mb-0">Usuários</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">Gerenciar usuários e permissões de acesso.</p>
                    <a href="users_list.php" class="btn btn-dark d-block">Acessar</a>
                </div>
            </div>
        </div>
        <?php endif; ?>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
