<?php
// includes/header.php
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $pageTitle ?? 'Lab System' ?></title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    :root {
      --bs-primary: #dc3545; /* Vermelho */
      --bs-primary-rgb: 220, 53, 69;
      --bs-dark: #000000; /* Preto */
      --bs-dark-rgb: 0, 0, 0;
    }
    .bg-primary {
      background-color: var(--bs-primary) !important;
    }
    .btn-primary {
      background-color: var(--bs-primary);
      border-color: var(--bs-primary);
    }
    .btn-primary:hover {
      background-color: #bb2d3b;
      border-color: #b02a37;
    }
    .text-primary {
      color: var(--bs-primary) !important;
    }
    .navbar-dark {
      background-color: var(--bs-dark) !important;
    }
    .card-header {
      background-color: #f8f9fa;
      border-bottom: 2px solid var(--bs-primary);
    }
    body {
        background-color: #f4f4f4;
    }
  </style>
</head>
<body>
<?php if (!isset($hideNavbar) || !$hideNavbar): ?>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="dashboard.php">Lab System</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMain">
        <div class="navbar-nav me-auto">
          <a class="nav-link" href="labs_list.php">Laboratórios</a>
          <?php if (($_SESSION['tipo'] ?? '') === 'administrador'): ?>
          <a class="nav-link" href="users_list.php">Usuários</a>
          <?php endif; ?>
        </div>
        <div class="navbar-nav ms-auto d-flex align-items-center">
          <span class="navbar-text text-white me-3">Bem-vindo, <?= $_SESSION['username'] ?? 'Usuário' ?>!</span>
          <a class="btn btn-outline-light btn-sm" href="logout.php">Sair</a>
        </div>
      </div>
    </div>
  </nav>
<?php endif; ?>
