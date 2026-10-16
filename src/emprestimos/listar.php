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
    'pendente' => 'Pendente',
    'devolvido' => 'Devolvido',
    'atrasado' => 'Atrasado'
];

$busca = trim($_GET['busca'] ?? '');
$filtroStatus = trim($_GET['status'] ?? '');
$page = max(1, (int) ($_GET['page'] ?? 1));
$perPage = 10;
$offset = ($page - 1) * $perPage;

$where = ' WHERE 1=1';
$params = [];
$types = '';

if ($busca !== '') {
    $where .= ' AND (u.username LIKE ? OR eq.nome LIKE ?)';
    $buscaParam = "%{$busca}%";
    $params[] = $buscaParam;
    $params[] = $buscaParam;
    $types .= 'ss';
}

if ($filtroStatus !== '' && array_key_exists($filtroStatus, $statusLabels)) {
    $where .= ' AND e.status = ?';
    $params[] = $filtroStatus;
    $types .= 's';
} else {
    $filtroStatus = '';
}

$from = ' FROM emprestimos e
          JOIN usuarios u ON e.usuario_id = u.id
          JOIN equipamentos eq ON e.equipamento_id = eq.id';

$countSql = 'SELECT COUNT(*) AS total' . $from . $where;
$stmtCount = $conn->prepare($countSql);
if ($params) {
    $stmtCount->bind_param($types, ...$params);
}
$stmtCount->execute();
$total = (int) $stmtCount->get_result()->fetch_assoc()['total'];
$stmtCount->close();

$sql = 'SELECT e.id, e.data_emprestimo, e.data_devolucao, e.status, e.observacao,
               u.username AS usuario_nome,
               eq.nome AS equipamento_nome'
     . $from . $where . ' ORDER BY e.data_emprestimo DESC LIMIT ? OFFSET ?';

$queryParams = $params;
$queryParams[] = $perPage;
$queryParams[] = $offset;
$queryTypes = $types . 'ii';

$stmt = $conn->prepare($sql);
$stmt->bind_param($queryTypes, ...$queryParams);
$stmt->execute();
$result = $stmt->get_result();
$emprestimos = $result->fetch_all(MYSQLI_ASSOC);
$stmt->close();
$conn->close();

$totalPages = max(1, (int) ceil($total / $perPage));
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Empréstimos - Lab Hardware</title>
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
                <a class="nav-link text-white active" href="/emprestimos/listar.php">Empréstimos</a>
                <a class="nav-link text-white" href="/emprestimos/atrasados.php">Atrasados</a>
            </div>
        </div>
    </nav>

    <div class="container mt-3 mt-md-4">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3 mb-md-4 gap-2">
            <h1 class="h4 mb-0">Empréstimos</h1>
            <a class="btn btn-primary btn-lg" href="/emprestimos/cadastrar.php">+ Novo Empréstimo</a>
        </div>

        <?php exibirMensagem(); ?>

        <div class="card mb-3">
            <div class="card-body">
                <form method="get" class="row g-2">
                    <div class="col-12 col-md-4">
                        <label for="busca" class="form-label">Buscar</label>
                        <input type="text" name="busca" id="busca" class="form-control" placeholder="Usuário ou equipamento" value="<?= htmlspecialchars($busca, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?>">
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
                    <div class="col-12 col-md-3 d-flex align-items-end">
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
                                <th>ID</th>
                                <th>Usuário</th>
                                <th>Equipamento</th>
                                <th>Data Empréstimo</th>
                                <th class="d-none d-md-table-cell">Data Prevista/Devolução</th>
                                <th>Status</th>
                                <th width="160">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if (empty($emprestimos)): ?>
                            <tr>
                                <td colspan="7" class="text-center text-muted py-4">Nenhum empréstimo encontrado.</td>
                            </tr>
                            <?php else: ?>
                            <?php foreach ($emprestimos as $emp): ?>
                            <?php
                                $statusClass = match($emp['status']) {
                                    'pendente' => 'bg-warning text-dark',
                                    'devolvido' => 'bg-success',
                                    'atrasado' => 'bg-danger',
                                    default => 'bg-secondary'
                                };
                            ?>
                            <tr class="<?= $emp['status'] === 'atrasado' ? 'table-danger' : '' ?>">
                                <td><code><?= (int) $emp['id'] ?></code></td>
                                <td><?= htmlspecialchars($emp['usuario_nome'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></td>
                                <td><?= htmlspecialchars($emp['equipamento_nome'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></td>
                                <td><?= date('d/m/Y H:i', strtotime($emp['data_emprestimo'])) ?></td>
                                <td class="d-none d-md-table-cell"><?= $emp['data_devolucao'] ? date('d/m/Y H:i', strtotime($emp['data_devolucao'])) : '<span class="text-muted">—</span>' ?></td>
                                <td>
                                    <span class="badge <?= $statusClass ?>"><?= $statusLabels[$emp['status']] ?? htmlspecialchars($emp['status'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></span>
                                </td>
                                <td>
                                    <div class="d-flex flex-column flex-md-row gap-1">
                                        <a class="btn btn-sm btn-outline-primary btn-action" href="/emprestimos/editar.php?id=<?= (int) $emp['id'] ?>">Editar</a>
                                        <?php if ($emp['status'] !== 'devolvido'): ?>
                                        <a class="btn btn-sm btn-outline-success btn-action" href="/emprestimos/editar.php?id=<?= (int) $emp['id'] ?>&devolver=1">Devolver</a>
                                        <?php endif; ?>
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

        <?php if ($totalPages > 1): ?>
        <nav aria-label="Paginação" class="mt-3">
            <ul class="pagination justify-content-center">
                <li class="page-item <?= $page <= 1 ? 'disabled' : '' ?>">
                    <a class="page-link" href="?page=<?= $page - 1 ?>&busca=<?= urlencode($busca) ?>&status=<?= urlencode($filtroStatus) ?>">Anterior</a>
                </li>
                <?php for ($i = 1; $i <= $totalPages; $i++): ?>
                <li class="page-item <?= $i === $page ? 'active' : '' ?>">
                    <a class="page-link" href="?page=<?= $i ?>&busca=<?= urlencode($busca) ?>&status=<?= urlencode($filtroStatus) ?>"><?= $i ?></a>
                </li>
                <?php endfor; ?>
                <li class="page-item <?= $page >= $totalPages ? 'disabled' : '' ?>">
                    <a class="page-link" href="?page=<?= $page + 1 ?>&busca=<?= urlencode($busca) ?>&status=<?= urlencode($filtroStatus) ?>">Próximo</a>
                </li>
            </ul>
        </nav>
        <?php endif; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
