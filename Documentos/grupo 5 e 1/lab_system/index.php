<?php 
// index.php
session_start();
require_once 'includes/flash.php';

$pageTitle = 'Login - Lab System';
$hideNavbar = true;
include 'includes/header.php'; 
?>
<body class="bg-dark d-flex align-items-center justify-content-center" style="height: 100vh;">
  <div class="container-sm bg-white rounded shadow-lg p-4" style="max-width: 360px;">
    <div class="text-center mb-4">
        <h2 class="text-primary fw-bold">Lab System</h2>
        <p class="text-muted small">Faça login para continuar</p>
    </div>
    
    <?php exibirMensagem(); ?>
    
    <form action="login.php" method="post">
      <div class="mb-3">
        <label for="username" class="form-label">Usuário</label>
        <input type="text" class="form-control" id="username" name="username" placeholder="Digite seu usuário" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Senha</label>
        <input type="password" class="form-control" id="password" name="password" placeholder="Digite sua senha" required>
      </div>
      <button type="submit" class="btn btn-primary w-100 py-2 fw-bold">Entrar</button>
    </form>
    
    <div class="text-center mt-4 text-muted small">
        &copy; <?= date('Y') ?> Lab System
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
