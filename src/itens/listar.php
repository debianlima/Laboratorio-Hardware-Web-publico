<?php
session_start();
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/flash.php';
require_once __DIR__ . '/../config/auth.php';
require_once __DIR__ . '/../config/csrf.php';
requerLogin();

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

$busca = trim($_GET['busca'] ?? '');
$filtroTipo = trim($_GET['tipo_id'] ?? '');
$filtroStatus = trim($_GET['status'] ?? '');

$sql = "SELECT i.id, i.codigo_patrimonio, i.nome, i.status, i.localizacao, t.nome AS tipo_nome
        FROM itens i
        LEFT JOIN tipos_itens t ON i.tipo_id = t.id
        WHERE 1=1";
$params = [];
$types = '';

if ($busca !== '') {
    $sql .= " AND (i.nome LIKE ? OR i.codigo_patrimonio LIKE ?)";
    $buscaParam = "%{$busca}%";
    $params[] = $buscaParam;
    $params[] = $buscaParam;
    $types .= 'ss';
}

if ($filtroTipo !== '') {
    $sql .= " AND i.tipo_id = ?";
    $params[] = (int) $filtroTipo;
    $types .= 'i';
}

if ($filtroStatus !== '') {
    $sql .= " AND i.status = ?";
    $params[] = $filtroStatus;
    $types .= 's';
}

$sql .= " ORDER BY i.nome";

$stmt = $conn->prepare($sql);
if ($params) {
    $stmt->bind_param($types, ...$params);
}
$stmt->execute();
$result = $stmt->get_result();
$itens = $result->fetch_all(MYSQLI_ASSOC);
$stmt->close();

$stmtTipos = $conn->prepare("SELECT id, nome FROM tipos_itens ORDER BY nome");
$stmtTipos->execute();
$resultTipos = $stmtTipos->get_result();
$tipos = $resultTipos->fetch_all(MYSQLI_ASSOC);
$stmtTipos->close();

$conn->close();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Itens do Laboratório - Lab Hardware</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; }
        .card { border-radius: 0.75rem; }
        .table th { font-size: 0.875rem; }
        .table td { vertical-align: middle; }
        @media (max-width: 768px) {
            .btn-action { width: 100%; margin-bottom: 0.25rem; }
        }
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
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-md-4 gap-2">
            <h1 class="h4 mb-0">Itens do Laboratório</h1>
            <a class="btn btn-primary btn-lg" href="/itens/cadastrar.php">+ Cadastrar Item</a>
        </div>

        <?php exibirMensagem(); ?>

        <div class="card mb-3">
            <div class="card-body">
                <form method="get" class="row g-2">
                    <div class="col-12 col-md-4">
                        <label for="busca" class="form-label">Buscar</label>
                        <input type="text" name="busca" id="busca" class="form-control" placeholder="Nome ou código" value="<?= htmlspecialchars($busca) ?>">
                    </div>
                    <div class="col-6 col-md-3">
                        <label for="tipo_id" class="form-label">Tipo</label>
                        <select name="tipo_id" id="tipo_id" class="form-select">
                            <option value="">Todos</option>
                            <?php foreach ($tipos as $tipo): ?>
                            <option value="<?= $tipo['id'] ?>" <?= $filtroTipo == $tipo['id'] ? 'selected' : '' ?>><?= htmlspecialchars($tipo['nome']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="col-6 col-md-3">
                        <label for="status" class="form-label">Status</label>
                        <select name="status" id="status" class="form-select">
                            <option value="">Todos</option>
                            <?php foreach ($statusLabels as $valor => $label): ?>
                            <option value="<?= $valor ?>" <?= $filtroStatus === $valor ? 'selected' : '' ?>><?= $label ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="col-12 col-md-2 d-flex align-items-end">
                        <button type="submit" class="btn btn-secondary w-100">Filtrar</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="card">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th class="d-none d-md-table-cell">Tipo</th>
                                <th>Status</th>
                                <th class="d-none d-md-table-cell">Localização</th>
                                <th width="80">QR</th>
                                <th width="160">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if (empty($itens)): ?>
                            <tr>
                                <td colspan="7" class="text-center text-muted py-4">Nenhum item cadastrado.</td>
                            </tr>
                            <?php else: ?>
                            <?php foreach ($itens as $item): ?>
                            <tr>
                                <td><code><?= htmlspecialchars($item['codigo_patrimonio']) ?></code></td>
                                <td><a href="/itens/ver.php?id=<?= $item['id'] ?>"><?= htmlspecialchars($item['nome']) ?></a></td>
                                <td class="d-none d-md-table-cell"><?= $item['tipo_nome'] ? htmlspecialchars($item['tipo_nome']) : '<span class="text-muted">—</span>' ?></td>
                                <td>
                                    <?php
                                    $statusClass = match($item['status']) {
                                        'disponivel' => 'bg-success',
                                        'emprestado' => 'bg-warning text-dark',
                                        'manutencao' => 'bg-danger',
                                        default => 'bg-secondary'
                                    };
                                    ?>
                                    <span class="badge <?= $statusClass ?>"><?= $statusLabels[$item['status']] ?? $item['status'] ?></span>
                                </td>
                                <td class="d-none d-md-table-cell"><?= $item['localizacao'] ? htmlspecialchars($item['localizacao']) : '<span class="text-muted">—</span>' ?></td>
                                <td>
                                    <a class="btn btn-sm btn-outline-dark btn-action" href="/itens/qrcode.php?id=<?= $item['id'] ?>" title="QR Code">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5zm1 4.5v-4h4v4h-4zM9 .5A.5.5 0 0 1 9.5 0h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5zm1 4.5v-4h4v4h-4zM0 9.5A.5.5 0 0 1 .5 9h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5zm1 4.5v-4h4v4h-4zM9 12h1v1H9v-1zm2 0h1v1h-1v-1zm-2 2h1v1H9v-1zm3-2h1v1h-1v-1zm-1 1h1v1h-1v-1zm2 1h1v1h-1v-1zm-5 2h1v1H8v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-6 1h1v1H7v-1zm8 0h1v1h-1v-1zm-4 1h1v1h-1v-1zm2 0h1v1h-1v-1z"/>
                                        </svg>
                                    </a>
                                </td>
                                <td>
                                    <div class="d-flex flex-column flex-md-row gap-1">
                                        <a class="btn btn-sm btn-outline-primary btn-action" href="/itens/editar.php?id=<?= $item['id'] ?>">Editar</a>
                                        <form method="post" action="/itens/excluir.php" class="d-inline" onsubmit="return confirm('Excluir o item &quot;<?= htmlspecialchars($item['nome']) ?>&quot;?');">
                                            <input type="hidden" name="csrf_token" value="<?= gerarTokenCSRF() ?>">
                                            <input type="hidden" name="id" value="<?= $item['id'] ?>">
                                            <button type="submit" class="btn btn-sm btn-outline-danger btn-action">Excluir</button>
                                        </form>
                                    </div>
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
