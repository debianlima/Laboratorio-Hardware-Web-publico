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
    definirMensagem('Erro ao conectar no banco.', 'danger');
    header('Location: dashboard.php');
    exit;
}

$usuarios = buscarUsuarios($conn);
$conn->close();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Listar Usuários - Lab System</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="dashboard.php">Lab System</a>
      <div class="navbar-nav me-auto">
        <a class="nav-link text-white" href="items_list.php">Itens</a>
        <a class="nav-link text-white" href="users_list.php">Usuários</a>
      </div>
      <div class="navbar-nav ms-auto d-flex align-items-center">
        <span class="navbar-text text-white me-3">Bem-vindo, <?= $_SESSION['username'] ?>!</span>
        <a class="btn btn-outline-light btn-sm" href="logout.php">Sair</a>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="h4 mb-0">Listar Usuários</h1>
      <a class="btn btn-primary" href="users_create.php">Cadastrar novo usuário</a>
    </div>

    <?php exibirMensagem(); ?>

    <div class="card">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-light">
              <tr>
                <th>ID</th>
                <th>Usuário</th>
                <th>Perfil</th>
                <th width="140">Acoes</th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($usuarios as $usuario): ?>
              <tr>
                <td><?= $usuario['id'] ?></td>
                <td><?= $usuario['username'] ?></td>
                <td><span class="badge bg-secondary"><?= $usuario['tipo'] ?></span></td>
                <td>
                  <a class="btn btn-sm btn-primary" href="users_edit.php?id=<?= $usuario['id'] ?>">Editar</a>
                  <?php if ($usuario['id'] != $_SESSION['user_id']): ?>
                    <form method="post" action="users_delete.php" class="d-inline" onsubmit="return confirm('Excluir este usuario?');">
                      <input type="hidden" name="id" value="<?= $usuario['id'] ?>">
                      <button type="submit" class="btn btn-sm btn-danger">Excluir</button>
                    </form>
                  <?php else: ?>
                  <span class="text-muted small">(voce)</span>
                  <?php endif; ?>
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
