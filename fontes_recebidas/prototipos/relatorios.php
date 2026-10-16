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
    $titulo = $_POST['titulo'];
    $categoria = $_POST['categoria'];
    $emissor = $_POST['emissor'];
  $data = $_POST['data'];
  $descricao = $_POST['descricao'] ?? '';

    if (empty($titulo) || empty($emissor)) {
        definirMensagem('Preencha usuário e senha.', 'danger');
        header('Location: relatorios.php');
        exit;
    }
    if (criarRelatorio($conn, $titulo, $categoria, $emissor, $data, $descricao)) {
        $conn->close();
        definirMensagem('Usuário cadastrado com sucesso.', 'success');
        header('Location: relatorios_list.php');
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
  <title>Cadastrar Relatório - Lab System</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    html, body {
      height: 100%;
    }
    body {
      background-image: url('bg.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      background-attachment: fixed;
    }
    .container {
      background: rgba(255,255,255,0.9);
      padding: 1rem;
      border-radius: .25rem;
    }
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
    <h1 class="h4 mb-4">Cadastrar Relatório</h1>

    <?php exibirMensagem(); ?>
    <div class="card">
      <div class="card-body">
        <form method="post" class="row g-3">
          <div class="col-md-4">
            <label class="form-label">Título</label>
            <input type="text" name="titulo" class="form-control" required>
          </div>
          <div class="col-md-4">
            <label class="form-label">Categoria</label>
            <select name="categoria" class="form-select">
              <option value="padrão">Pratica</option>
              <option value="administrador">Aula</option>
            </select>
          </div>
          <div class="col-md-4">
            <label class="form-label">Emissor</label>
            <input type="text" name="emissor" class="form-control" required>
          </div>
          <div class="col-md-4">
            <label class="form-label">Data</label>
            <input type="date" name="data" class="form-control" required>
          </div>
          <div class="col-12">
            <label class="form-label">Descrição</label>
            <textarea name="descricao" class="form-control" rows="3"></textarea>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Salvar</button>
            <a class="btn btn-secondary" href="relatorios_list.php">Voltar</a>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
