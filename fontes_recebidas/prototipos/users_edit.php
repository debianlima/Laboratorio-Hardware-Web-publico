<?php
session_start();
require_once 'includes/users_db.php';
require_once 'includes/flash.php';

if (empty($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}

if ($_SESSION['tipo'] !== 'administrador') {
    header('Location: dashboard.php');
    exit;
}

$conn = conectar();

$id = (int) ($_GET['id'] ?? $_POST['id'] ?? 0);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $username = $_POST['username'];
    $senha = $_POST['senha'];
    $tipo = $_POST['tipo'];

    if (editarUsuario($conn, $id, $username, $tipo, $senha ?: null)) {
        $conn->close();
        definirMensagem('Usuário atualizado com sucesso.', 'success');
        header('Location: users_list.php');
        exit;
    }
    definirMensagem('Erro ao atualizar. Username já existe?', 'danger');
    header('Location: users_edit.php?id=' . $id);
    exit;
}

$usuario = buscarUsuarioPorId($conn, $id);
$conn->close();

if (!$usuario) {
    definirMensagem('Usuário não encontrado.', 'danger');
    header('Location: users_list.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Editar Usuário - Lab System</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="dashboard.php">Lab System</a>
      <div class="navbar-nav me-auto">
        <a class="nav-link text-white" href="users_list.php">Usuários</a>
        <a class="nav-link text-white" href="relatorios_list.php">Relatórios</a>
      </div>
      <div class="navbar-nav ms-auto d-flex align-items-center">
        <span class="navbar-text text-white me-3">Bem-vindo, <?= $_SESSION['username'] ?>!</span>
        <a class="btn btn-outline-light btn-sm" href="logout.php">Sair</a>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <h1 class="h4 mb-4">Editar Usuário</h1>

    <?php exibirMensagem(); ?>

    <div class="card">
      <div class="card-body">
        <form method="post" class="row g-3">
          <input type="hidden" name="id" value="<?= $usuario['id'] ?>">
          <div class="col-md-4">
            <label class="form-label">Usuário</label>
            <input type="text" name="username" class="form-control" value="<?= $usuario['username'] ?>" required>
          </div>
          <div class="col-md-4">
            <label class="form-label">Nova senha <span class="text-muted">(deixe em branco para manter)</span></label>
            <input type="password" name="senha" class="form-control">
          </div>
          <div class="col-md-4">
            <label class="form-label">Perfil</label>
            <select name="tipo" class="form-select">
              <option value="padrão" <?= $usuario['tipo'] === 'padrão' ? 'selected' : '' ?>>Padrão</option>
              <option value="administrador" <?= $usuario['tipo'] === 'administrador' ? 'selected' : '' ?>>Administrador</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Salvar</button>
            <a class="btn btn-secondary" href="users_list.php">Voltar</a>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
