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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $senha = $_POST['senha'];
    $tipo = $_POST['tipo'];

    if (empty($username) || empty($senha)) {
        definirMensagem('Preencha usuário e senha.', 'danger');
        header('Location: users_create.php');
        exit;
    }
    if (criarUsuario($conn, $username, $senha, $tipo)) {
        $conn->close();
        definirMensagem('Usuário cadastrado com sucesso.', 'success');
        header('Location: users_list.php');
        exit;
    }
    definirMensagem('Erro ao criar usuário. Username já existe?', 'danger');
    header('Location: users_create.php');
    exit;
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastrar Usuário - Lab System</title>
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
    <h1 class="h4 mb-4">Cadastrar Usuário</h1>

    <?php exibirMensagem(); ?>

    <div class="card">
      <div class="card-body">
        <form method="post" class="row g-3">
          <div class="col-md-4">
            <label class="form-label">Usuário</label>
            <input type="text" name="username" class="form-control" required>
          </div>
          <div class="col-md-4">
            <label class="form-label">Senha</label>
            <input type="password" name="senha" class="form-control" required>
          </div>
          <div class="col-md-4">
            <label class="form-label">Perfil</label>
            <select name="tipo" class="form-select">
              <option value="padrão">Padrão</option>
              <option value="administrador">Administrador</option>
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
