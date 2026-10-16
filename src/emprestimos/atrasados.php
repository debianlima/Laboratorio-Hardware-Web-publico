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

if (usarPostgres()) {
    $diasAtrasoExpr = "GREATEST(EXTRACT(DAY FROM (NOW() - e.data_devolucao))::int, 0)";
} else {
    $diasAtrasoExpr = "GREATEST(DATEDIFF(NOW(), e.data_devolucao), 0)";
}

$sql = "SELECT e.id, e.data_emprestimo, e.data_devolucao, e.status, e.observacao,
               u.username AS usuario_nome,
               eq.nome AS equipamento_nome,
               {$diasAtrasoExpr} AS dias_atraso
        FROM emprestimos e
        JOIN usuarios u ON e.usuario_id = u.id
        JOIN equipamentos eq ON e.equipamento_id = eq.id
        WHERE e.status = 'atrasado'
           OR (e.status = 'pendente' AND e.data_devolucao IS NOT NULL AND e.data_devolucao < NOW())
        ORDER BY dias_atraso DESC, e.data_devolucao ASC";

$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->get_result();
$emprestimos = $result->fetch_all(MYSQLI_ASSOC);
$stmt->close();
$conn->close();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Empréstimos Atrasados - Lab Hardware</title>
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
                <a class="nav-link text-white" href="/emprestimos/listar.php">Empréstimos</a>
                <a class="nav-link text-white active" href="/emprestimos/atrasados.php">Atrasados</a>
            </div>
        </div>
    </nav>

    <div class="container mt-3 mt-md-4">
        <h1 class="h4 mb-4">Empréstimos Atrasados</h1>

        <?php exibirMensagem(); ?>

        <div class="card">
            <div class="card-body p-0">
                <div class="table-responsive">
                    <table class="table table-hover mb-0">
                        <thead class="table-danger">
                            <tr>
                                <th>ID</th>
                                <th>Usuário</th>
                                <th>Equipamento</th>
                                <th>Data Empréstimo</th>
                                <th>Data Prevista</th>
                                <th>Dias em Atraso</th>
                                <th width="160">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if (empty($emprestimos)): ?>
                            <tr>
                                <td colspan="7" class="text-center text-muted py-4">Nenhum empréstimo atrasado.</td>
                            </tr>
                            <?php else: ?>
                            <?php foreach ($emprestimos as $emp): ?>
                            <tr class="table-danger">
                                <td><code><?= (int) $emp['id'] ?></code></td>
                                <td><?= htmlspecialchars($emp['usuario_nome'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></td>
                                <td><?= htmlspecialchars($emp['equipamento_nome'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></td>
                                <td><?= date('d/m/Y H:i', strtotime($emp['data_emprestimo'])) ?></td>
                                <td><?= $emp['data_devolucao'] ? date('d/m/Y', strtotime($emp['data_devolucao'])) : '<span class="text-muted">Não definida</span>' ?></td>
                                <td><strong><?= (int) $emp['dias_atraso'] ?> dia(s)</strong></td>
                                <td>
                                    <div class="d-flex flex-column flex-md-row gap-1">
                                        <a class="btn btn-sm btn-outline-danger btn-action" href="/emprestimos/editar.php?id=<?= (int) $emp['id'] ?>">Registrar Devolução</a>
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
