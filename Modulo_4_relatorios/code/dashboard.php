<?php
session_start();
require_once 'includes/flash.php';

if (empty($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard - Lab System</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="dashboard.php">Lab System</a>
      <?php if (($_SESSION['tipo'] ?? '') === 'administrador'): ?>
      <div class="navbar-nav">
        <a class="nav-link text-white" href="users_list.php">Usuários</a>
        <a class="nav-link text-white" href="relatorios.php">Relatórios</a>
      </div>
      <?php endif; ?>
      <div class="navbar-nav ms-auto d-flex align-items-center">
        <span class="navbar-text text-white me-3">Bem-vindo, <?= $_SESSION['username'] ?>!</span>
        <a class="btn btn-outline-light btn-sm" href="logout.php">Sair</a>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <?php exibirMensagem(); ?>
    <h1 class="h4 text-muted">Página inicial</h1>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
