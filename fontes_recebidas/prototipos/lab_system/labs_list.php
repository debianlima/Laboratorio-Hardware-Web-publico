<?php
// labs_list.php
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

$labs = buscarLaboratorios($conn);
$conn->close();
$tiposLabels = tiposLaboratorios();
?>

<?php 
$pageTitle = 'Laboratórios - Lab System';
include 'includes/header.php'; 
?>

  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h1 class="h4 mb-0">Laboratórios</h1>
      <a class="btn btn-primary" href="labs_create.php">Cadastrar novo laboratório</a>
    </div>

    <?php exibirMensagem(); ?>

    <div class="card shadow-sm">
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-hover mb-0">
            <thead class="bg-light">
              <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Lugar</th>
                <th>Responsável</th>
                <th width="160">Ações</th>
              </tr>
            </thead>
            <tbody>
              <?php if (empty($labs)): ?>
              <tr>
                <td colspan="6" class="text-center text-muted py-4">Nenhum laboratório cadastrado.</td>
              </tr>
              <?php else: ?>
              <?php foreach ($labs as $lab): ?>
              <tr>
                <td><strong><?= htmlspecialchars($lab['codigo']) ?></strong></td>
                <td><?= htmlspecialchars($lab['nome']) ?></td>
                <td><?= $tiposLabels[$lab['tipo']] ?? $lab['tipo'] ?></td>
                <td><span class="badge bg-secondary"><?= htmlspecialchars($lab['lugar']) ?></span></td>
                <td><?= htmlspecialchars($lab['tecnico_responsavel']) ?></td>
                <td>
                  <a class="btn btn-sm btn-outline-primary" href="labs_edit.php?id=<?= $lab['id'] ?>">Editar</a>
                  <form method="post" action="labs_delete.php" class="d-inline" onsubmit="return confirm('Excluir este laboratório?');">
                    <input type="hidden" name="id" value="<?= $lab['id'] ?>">
                    <button type="submit" class="btn btn-sm btn-outline-danger">Excluir</button>
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
