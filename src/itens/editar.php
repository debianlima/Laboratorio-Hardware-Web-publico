<?php
session_start();
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/flash.php';
require_once __DIR__ . '/../config/auth.php';
require_once __DIR__ . '/../config/csrf.php';
requerLogin();
if (!verificarPermissao(['admin','librarian'])) {
    definirMensagem('Acesso negado.', 'danger');
    header('Location: /index.php');
    exit;
}

$conn = conectar();
if (!$conn) {
    definirMensagem('Erro ao conectar no banco de dados.', 'danger');
    header('Location: /index.php');
    exit;
}

$statusLabels = [
    'disponivel' => 'Disponível',
    'emprestado' => 'Emprestado',
    'manutencao' => 'Manutenção'
];

$id = $_GET['id'] ?? $_POST['id'] ?? null;
if (!$id) {
    definirMensagem('Item não informado.', 'danger');
    header('Location: /itens/listar.php');
    exit;
}

$stmt = $conn->prepare("SELECT id, codigo_patrimonio, nome, tipo_id, status, descricao, localizacao FROM itens WHERE id = ? LIMIT 1");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$item = $result->fetch_assoc();
$stmt->close();

if (!$item) {
    definirMensagem('Item não encontrado.', 'danger');
    header('Location: /itens/listar.php');
    exit;
}

$stmtTipos = $conn->prepare("SELECT id, nome FROM tipos_itens ORDER BY nome");
$stmtTipos->execute();
$resultTipos = $stmtTipos->get_result();
$tipos = $resultTipos->fetch_all(MYSQLI_ASSOC);
$stmtTipos->close();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $codigo_patrimonio = trim($_POST['codigo_patrimonio'] ?? '');
    $nome = trim($_POST['nome'] ?? '');
    $tipo_id = trim($_POST['tipo_id'] ?? '');
    $status = $_POST['status'] ?? 'disponivel';
    $descricao = trim($_POST['descricao'] ?? '');
    $localizacao = trim($_POST['localizacao'] ?? '');

    $token = $_POST['csrf_token'] ?? '';
    if (!validarTokenCSRF($token)) {
        definirMensagem('Sessão inválida. Tente novamente.', 'danger');
        header('Location: /itens/editar.php?id=' . (int) $id);
        exit;
    }

    if ($codigo_patrimonio === '' || $nome === '') {
        definirMensagem('Preencha o código de patrimônio e o nome.', 'danger');
        header('Location: /itens/editar.php?id=' . (int) $id);
        exit;
    }

    if (!array_key_exists($status, $statusLabels)) {
        definirMensagem('Status inválido.', 'danger');
        header('Location: /itens/editar.php?id=' . (int) $id);
        exit;
    }

    $stmtCheck = $conn->prepare("SELECT id FROM itens WHERE codigo_patrimonio = ? AND id != ? LIMIT 1");
    $stmtCheck->bind_param("si", $codigo_patrimonio, $id);
    $stmtCheck->execute();
    $stmtCheck->store_result();
    if ($stmtCheck->num_rows > 0) {
        $stmtCheck->close();
        $conn->close();
        definirMensagem('Código de patrimônio já existe em outro item.', 'danger');
        header('Location: /itens/editar.php?id=' . (int) $id);
        exit;
    }
    $stmtCheck->close();

    $stmt = $conn->prepare("UPDATE itens SET codigo_patrimonio = ?, nome = ?, tipo_id = ?, status = ?, descricao = ?, localizacao = ? WHERE id = ?");
    $tipoIdValue = $tipo_id !== '' ? (int) $tipo_id : null;
    $stmt->bind_param("ssisssi", $codigo_patrimonio, $nome, $tipoIdValue, $status, $descricao, $localizacao, $id);
    $ok = $stmt->execute();
    $stmt->close();
    $conn->close();

    if ($ok) {
        definirMensagem('Item atualizado com sucesso.', 'success');
        header('Location: /itens/listar.php');
        exit;
    }
    definirMensagem('Erro ao atualizar item.', 'danger');
    header('Location: /itens/editar.php?id=' . (int) $id);
    exit;
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Item - Lab Hardware</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; }
        .card { border-radius: 0.75rem; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.php">Lab Hardware</a>
            <div class="navbar-nav me-auto">
                <a class="nav-link text-white" href="/itens/listar.php">Itens</a>
            </div>
        </div>
    </nav>

    <div class="container mt-3 mt-md-4">
        <h1 class="h4 mb-4">Editar Item</h1>

        <?php exibirMensagem(); ?>

        <div class="card">
            <div class="card-body">
                <form method="post" class="row g-3">
                    <input type="hidden" name="csrf_token" value="<?= gerarTokenCSRF() ?>">
                    <input type="hidden" name="id" value="<?= (int) $item['id'] ?>">
                    <div class="col-12 col-md-4">
                        <label for="codigo_patrimonio" class="form-label">Código de Patrimônio *</label>
                        <input type="text" name="codigo_patrimonio" id="codigo_patrimonio" class="form-control" required maxlength="50" value="<?= htmlspecialchars($item['codigo_patrimonio']) ?>">
                    </div>
                    <div class="col-12 col-md-5">
                        <label for="nome" class="form-label">Nome *</label>
                        <input type="text" name="nome" id="nome" class="form-control" required maxlength="100" value="<?= htmlspecialchars($item['nome']) ?>">
                    </div>
                    <div class="col-6 col-md-3">
                        <label for="status" class="form-label">Status</label>
                        <select name="status" id="status" class="form-select">
                            <?php foreach ($statusLabels as $valor => $label): ?>
                            <option value="<?= $valor ?>" <?= $item['status'] === $valor ? 'selected' : '' ?>><?= $label ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="col-6 col-md-4">
                        <label for="tipo_id" class="form-label">Tipo</label>
                        <select name="tipo_id" id="tipo_id" class="form-select">
                            <option value="">Selecione...</option>
                            <?php foreach ($tipos as $tipo): ?>
                            <option value="<?= $tipo['id'] ?>" <?= $item['tipo_id'] == $tipo['id'] ? 'selected' : '' ?>><?= htmlspecialchars($tipo['nome']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="col-6 col-md-4">
                        <label for="localizacao" class="form-label">Localização</label>
                        <input type="text" name="localizacao" id="localizacao" class="form-control" maxlength="100" value="<?= htmlspecialchars($item['localizacao'] ?? '') ?>">
                    </div>
                    <div class="col-12 col-md-8">
                        <label for="descricao" class="form-label">Descrição</label>
                        <input type="text" name="descricao" id="descricao" class="form-control" maxlength="500" value="<?= htmlspecialchars($item['descricao'] ?? '') ?>">
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-lg">Salvar</button>
                        <a class="btn btn-outline-dark btn-lg" href="/itens/qrcode.php?id=<?= (int) $item['id'] ?>">QR Code</a>
                        <a class="btn btn-secondary btn-lg" href="/itens/listar.php">Voltar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
