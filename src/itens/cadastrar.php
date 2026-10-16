<?php
session_start();
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/flash.php';
require_once __DIR__ . '/../config/auth.php';
require_once __DIR__ . '/../config/csrf.php';

requerLogin();
if (!verificarPermissao(['administrador'])) {
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
        header('Location: /itens/cadastrar.php');
        exit;
    }

    if ($codigo_patrimonio === '' || $nome === '') {
        definirMensagem('Preencha o código de patrimônio e o nome.', 'danger');
        header('Location: /itens/cadastrar.php');
        exit;
    }

    if (!array_key_exists($status, $statusLabels)) {
        definirMensagem('Status inválido.', 'danger');
        header('Location: /itens/cadastrar.php');
        exit;
    }

    $stmtCheck = $conn->prepare("SELECT id FROM itens WHERE codigo_patrimonio = ? LIMIT 1");
    $stmtCheck->bind_param("s", $codigo_patrimonio);
    $stmtCheck->execute();
    $stmtCheck->store_result();
    if ($stmtCheck->num_rows > 0) {
        $stmtCheck->close();
        $conn->close();
        definirMensagem('Código de patrimônio já existe.', 'danger');
        header('Location: /itens/cadastrar.php');
        exit;
    }
    $stmtCheck->close();

    $stmt = $conn->prepare("INSERT INTO itens (codigo_patrimonio, nome, tipo_id, status, descricao, localizacao) VALUES (?, ?, ?, ?, ?, ?)");
    $tipoIdValue = $tipo_id !== '' ? (int) $tipo_id : null;
    $stmt->bind_param("ssisss", $codigo_patrimonio, $nome, $tipoIdValue, $status, $descricao, $localizacao);
    $ok = $stmt->execute();
    $newId = $ok ? $conn->insert_id : null;
    $stmt->close();
    $conn->close();

    if ($ok) {
        definirMensagem('Item cadastrado com sucesso. Acesse a lista para gerar o QR Code.', 'success');
        header('Location: /itens/listar.php');
        exit;
    }
    definirMensagem('Erro ao cadastrar item.', 'danger');
    header('Location: /itens/cadastrar.php');
    exit;
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Item - Lab Hardware</title>
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
        <h1 class="h4 mb-4">Cadastrar Item</h1>

        <?php exibirMensagem(); ?>

        <div class="card">
            <div class="card-body">
                <form method="post" class="row g-3">
                    <input type="hidden" name="csrf_token" value="<?= gerarTokenCSRF() ?>">
                    <div class="col-12 col-md-4">
                        <label for="codigo_patrimonio" class="form-label">Código de Patrimônio *</label>
                        <input type="text" name="codigo_patrimonio" id="codigo_patrimonio" class="form-control" required maxlength="50" placeholder="Ex: PAT-001">
                    </div>
                    <div class="col-12 col-md-5">
                        <label for="nome" class="form-label">Nome *</label>
                        <input type="text" name="nome" id="nome" class="form-control" required maxlength="100" placeholder="Nome do item">
                    </div>
                    <div class="col-6 col-md-3">
                        <label for="status" class="form-label">Status</label>
                        <select name="status" id="status" class="form-select">
                            <?php foreach ($statusLabels as $valor => $label): ?>
                            <option value="<?= $valor ?>"><?= $label ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="col-6 col-md-4">
                        <label for="tipo_id" class="form-label">Tipo</label>
                        <select name="tipo_id" id="tipo_id" class="form-select">
                            <option value="">Selecione...</option>
                            <?php foreach ($tipos as $tipo): ?>
                            <option value="<?= $tipo['id'] ?>"><?= htmlspecialchars($tipo['nome']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="col-6 col-md-4">
                        <label for="localizacao" class="form-label">Localização</label>
                        <input type="text" name="localizacao" id="localizacao" class="form-control" maxlength="100" placeholder="Ex: Prateleira A3">
                    </div>
                    <div class="col-12 col-md-8">
                        <label for="descricao" class="form-label">Descrição</label>
                        <input type="text" name="descricao" id="descricao" class="form-control" maxlength="500" placeholder="Descrição opcional">
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-lg">Salvar</button>
                        <a class="btn btn-secondary btn-lg" href="/itens/listar.php">Voltar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
