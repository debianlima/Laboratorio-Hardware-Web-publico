<?php
session_start();
require_once 'includes/users_db.php';
require_once 'includes/flash.php';

if (empty($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}

if (($_SESSION['tipo'] ?? '') !== 'administrador') {
    header('Location: dashboard.php');
    exit;
}

$conn = conectar();
if (!$conn) {
    header('Location: dashboard.php');
    exit;
}

$relatorio = buscarRelatorios($conn);
$conn->close();

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Listar Usuários - Lab System</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
  html, body { height: 100%; }
  body {
    background-image: url('bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
  }
  .container { background: rgba(255,255,255,0.9); padding: 1rem; border-radius: .25rem; }
</style>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="dashboard.php">
        <img src="assets/header.png" alt="Header" height="48" class="me-2">
      </a>
      <div class="navbar-nav me-auto">
        <a class="nav-link text-white" href="users_list.php">Usuários</a>
        <a class="nav-link text-white" href="relatorios_list.php">Relatórios</a>
      </div>
      <div class="navbar-nav ms-auto d-flex align-items-center">
        <span class="navbar-text text-white me-3">Bem-vindo, <?= $_SESSION['username'] ?>!</span>
        <img src="assets/avatar.png" alt="Avatar" height="34" class="rounded-circle me-2">
        <a class="btn btn-outline-light btn-sm" href="logout.php">Sair</a>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="h4 mb-0">Listar Relatórios</h1>
      <a class="btn btn-primary" href="relatorios.php">Cadastrar novo usuário</a>
    </div>

    <?php exibirMensagem(); ?>

    <div class="card">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-light">
              <tr>
                <th>Titulo</th>
                <th>Categoria</th>
                <th>Emissor</th>
                <th>Data</th>
                <th>Descrição</th>
                <th width="140">Ações</th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($relatorio as $relatorio): ?>
              <tr>
                <td><?= $relatorio['titulo'] ?></td>
                <td><span class="badge bg-secondary"><?= $relatorio['categoria'] ?></span></td>
                <td><?= $relatorio['emissor'] ?></td>
                <td><?= $relatorio['data'] ?></td>
                <td><?= $relatorio['descricao'] ?></td>
                <td>
                  <a class="btn btn-sm btn-primary" href="relatorios_edit.php?titulo=<?= $relatorio['titulo'] ?>">Editar</a>
                    <form method="post" action="relatorios_delete.php" class="d-inline" onsubmit="return confirm('Excluir este relatório?');">
                      <input type="hidden" name="titulo" value="<?= $relatorio['titulo'] ?>">
                      <button type="submit" class="btn btn-sm btn-danger">Excluir</button>
                    </form>
                </td>
              </tr>
              <?php endforeach; ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
