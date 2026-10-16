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

$statusLabels = statusItens();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = trim($_POST['nome'] ?? '');
    $descricao = trim($_POST['descricao'] ?? '');
    $marca = trim($_POST['marca'] ?? '');
    $modelo = trim($_POST['modelo'] ?? '');
    $numero_serie = trim($_POST['numero_serie'] ?? '');
    $quantidade = (int) ($_POST['quantidade'] ?? 0);
    $localizacao = trim($_POST['localizacao'] ?? '');
    $status = $_POST['status'] ?? 'disponivel';

    if (empty($nome) || $quantidade < 0) {
        definirMensagem('Preencha os dados corretamente.', 'danger');
        header('Location: items_create.php');
        exit;
    }
    if (!array_key_exists($status, $statusLabels)) {
        definirMensagem('Status inválido.', 'danger');
        header('Location: items_create.php');
        exit;
    }

    if (criarItem($conn, $nome, $descricao, $marca, $modelo, $numero_serie, $quantidade, $localizacao, $status)) {
        $conn->close();
        definirMensagem('Item cadastrado com sucesso.', 'success');
        header('Location: items_list.php');
        exit;
    }
    definirMensagem('Erro ao cadastrar item.', 'danger');
    header('Location: items_create.php');
    exit;
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cadastrar Item - Lab System</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="dashboard.php">Lab System</a>
      <div class="navbar-nav me-auto">
        <a class="nav-link text-white" href="items_list.php">Itens</a>
        <?php if (($_SESSION['tipo'] ?? '') === 'administrador'): ?>
        <a class="nav-link text-white" href="users_list.php">Usuários</a>
        <?php endif; ?>
      </div>
      <div class="navbar-nav ms-auto d-flex align-items-center">
        <span class="navbar-text text-white me-3">Bem-vindo, <?= $_SESSION['username'] ?>!</span>
        <a class="btn btn-outline-light btn-sm" href="logout.php">Sair</a>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <h1 class="h4 mb-4">Cadastrar Item</h1>

    <?php exibirMensagem(); ?>

    <div class="card">
      <div class="card-body">
        <form method="post" class="row g-3">
          <div class="col-md-6">
            <label class="form-label">Item</label>
            <input type="text" name="nome" class="form-control" required>
          </div>
          <div class="col-md-3">
            <label class="form-label">Quantidade</label>
            <input type="number" name="quantidade" min="0" class="form-control" required>
          </div>
          <div class="col-md-3">
            <label class="form-label">Status</label>
            <select name="status" class="form-select">
              <?php foreach ($statusLabels as $valor => $label): ?>
              <option value="<?= $valor ?>"><?= $label ?></option>
              <?php endforeach; ?>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label">Descrição</label>
            <input type="text" name="descricao" class="form-control">
          </div>
          <div class="col-md-3">
            <label class="form-label">Marca</label>
            <input type="text" name="marca" class="form-control">
          </div>
          <div class="col-md-3">
            <label class="form-label">Modelo</label>
            <input type="text" name="modelo" class="form-control">
          </div>
          <div class="col-md-4">
            <label class="form-label">Número de série</label>
            <input type="text" name="numero_serie" class="form-control">
          </div>
          <div class="col-md-4">
            <label class="form-label">Localização</label>
            <input type="text" name="localizacao" class="form-control">
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Salvar</button>
            <a class="btn btn-secondary" href="items_list.php">Voltar</a>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
