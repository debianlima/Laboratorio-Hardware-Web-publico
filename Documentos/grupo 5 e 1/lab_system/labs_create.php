<?php
// labs_create.php
session_start();
require_once 'includes/labs_db.php';
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

$tiposLabels = tiposLaboratorios();
$lugares = getLugares();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $codigo = trim($_POST['codigo'] ?? '');
    $lugar = $_POST['lugar'] ?? '';
    $nome = trim($_POST['nome'] ?? '');
    $tipo = $_POST['tipo'] ?? 'informatica_normal';
    $tecnico = trim($_POST['tecnico_responsavel'] ?? '');
    $info = trim($_POST['informacao_adicional'] ?? '');

    if (empty($codigo) || empty($nome)) {
        definirMensagem('Preencha os campos obrigatórios (Código e Nome).', 'danger');
    } else {
        if (criarLaboratorio($conn, $codigo, $lugar, $nome, $tipo, $tecnico, $info)) {
            $conn->close();
            definirMensagem('Laboratório cadastrado com sucesso.', 'success');
            header('Location: labs_list.php');
            exit;
        } else {
            definirMensagem('Erro ao cadastrar laboratório. Verifique se o código já existe.', 'danger');
        }
    }
}

$pageTitle = 'Cadastrar Laboratório - Lab System';
include 'includes/header.php';
?>

  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="h4 mb-0">Cadastrar Laboratório</h1>
        <a class="btn btn-secondary btn-sm" href="labs_list.php">Voltar</a>
    </div>

    <?php exibirMensagem(); ?>

    <div class="card shadow-sm">
      <div class="card-body">
        <form method="post" class="row g-3">
          <div class="col-md-3">
            <label class="form-label font-weight-bold">Código</label>
            <input type="text" name="codigo" class="form-control" placeholder="Ex: LAB01" required>
          </div>
          <div class="col-md-9">
            <label class="form-label">Nome do Laboratório</label>
            <input type="text" name="nome" class="form-control" placeholder="Ex: Laboratório de Redes" required>
          </div>
          
          <div class="col-md-6">
            <label class="form-label">Lugar</label>
            <select name="lugar" class="form-select" required>
              <option value="">Selecione o lugar...</option>
              <?php foreach ($lugares as $valor => $label): ?>
              <option value="<?= $valor ?>"><?= $label ?></option>
              <?php endforeach; ?>
            </select>
          </div>
          
          <div class="col-md-6">
            <label class="form-label">Tipo</label>
            <select name="tipo" class="form-select">
              <?php foreach ($tiposLabels as $valor => $label): ?>
              <option value="<?= $valor ?>"><?= $label ?></option>
              <?php endforeach; ?>
            </select>
          </div>

          <div class="col-md-12">
            <label class="form-label">Técnico Responsável</label>
            <input type="text" name="tecnico_responsavel" class="form-control">
          </div>

          <div class="col-12">
            <label class="form-label">Informação Adicional</label>
            <textarea name="informacao_adicional" class="form-control" rows="3"></textarea>
          </div>

          <div class="col-12 mt-4">
            <button type="submit" class="btn btn-primary px-4">Salvar Laboratório</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
