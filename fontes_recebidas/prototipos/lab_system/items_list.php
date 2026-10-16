<?php
session_start();
require_once 'includes/items_db.php';
require_once 'includes/flash.php';

if (empty($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}

$conn = conectar();
if (!$conn) {
    definirMensagem('Erro ao conectar no banco.', 'danger');
    header('Location: dashboard.php');
    exit;
}

$itens = buscarItens($conn);
$conn->close();
$statusLabels = statusItens();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Itens do Laboratório - Lab System</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="dashboard.php">Lab System</a>
      <div class="navbar-nav me-auto">
        <a class="nav-link text-white" href="items_list.php">Itens</a>
        <?php if (($_SESSION['tipo'] ?? '') === 'administrador'): ?>
        <a class="nav-link text-white" href="users_list.php">UsuÃ¡rios</a>
        <?php endif; ?>
      </div>
      <div class="navbar-nav ms-auto d-flex align-items-center">
        <span class="navbar-text text-white me-3">Bem-vindo, <?= $_SESSION['username'] ?>!</span>
        <a class="btn btn-outline-light btn-sm" href="logout.php">Sair</a>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="h4 mb-0">Itens do Laboratório</h1>
      <a class="btn btn-primary" href="items_create.php">Cadastrar novo item</a>
    </div>

    <?php exibirMensagem(); ?>

    <div class="card">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="table-light">
              <tr>
                <th>ID</th>
                <th>Item</th>
                <th>Quantidade</th>
                <th>Status</th>
                <th>LocalizaÃ§Ã£o</th>
                <th width="140">AÃ§Ãµes</th>
              </tr>
            </thead>
            <tbody>
              <?php if (empty($itens)): ?>
              <tr>
                <td colspan="6" class="text-center text-muted py-4">Nenhum item cadastrado.</td>
              </tr>
              <?php else: ?>
              <?php foreach ($itens as $item): ?>
              <tr>
                <td><?= $item['id'] ?></td>
                <td><?= $item['nome'] ?></td>
                <td><?= $item['quantidade'] ?></td>
                <td><span class="badge bg-secondary"><?= $statusLabels[$item['status']] ?? $item['status'] ?></span></td>
                <td><?= $item['localizacao'] ?></td>
                <td>
                  <a class="btn btn-sm btn-primary" href="items_edit.php?id=<?= $item['id'] ?>">Editar</a>
                  <form method="post" action="items_delete.php" class="d-inline" onsubmit="return confirm('Excluir este item?');">
                    <input type="hidden" name="id" value="<?= $item['id'] ?>">
                    <button type="submit" class="btn btn-sm btn-danger">Excluir</button>
                  </form>
                </td>
              </tr>
              <?php endforeach; ?>
              <?php endif; ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
