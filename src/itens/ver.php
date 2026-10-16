<?php
session_start();
require_once __DIR__ . '/../config/db.php';

$usuarioLogado = isset($_SESSION['user_id']);

$conn = conectar();
if (!$conn) {
    http_response_code(500);
    die('Erro ao conectar ao banco de dados.');
}

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
if (!$id) {
    http_response_code(400);
    die('Item inválido.');
}

$stmt = $conn->prepare("
    SELECT i.id, i.codigo_patrimonio, i.nome, i.status, i.descricao, i.localizacao, i.criado_em,
           t.nome AS tipo_nome
    FROM itens i
    LEFT JOIN tipos_itens t ON i.tipo_id = t.id
    WHERE i.id = ?
    LIMIT 1
");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$item = $result->fetch_assoc();
$stmt->close();
$conn->close();

if (!$item) {
    http_response_code(404);
    die('Item não encontrado.');
}

$statusLabels = [
    'disponivel' => 'Disponível',
    'emprestado' => 'Emprestado',
    'manutencao' => 'Manutenção'
];

$statusClass = match($item['status']) {
    'disponivel' => 'bg-success',
    'emprestado' => 'bg-warning text-dark',
    'manutencao' => 'bg-danger',
    default => 'bg-secondary'
};
$statusLabel = $statusLabels[$item['status']] ?? $item['status'];

$qrUrl = '/itens/qrcode.php?id=' . $item['id'];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($item['nome'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?> - Lab Hardware</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { background-color: #f8f9fa; }
        .card { border-radius: 0.75rem; }
        .detail-label { font-weight: 600; color: #6c757d; font-size: 0.875rem; text-transform: uppercase; }
        .detail-value { font-size: 1rem; margin-bottom: 1rem; }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="<?= $usuarioLogado ? '/index.php' : '#' ?>">Lab Hardware</a>
            <?php if ($usuarioLogado): ?>
            <div class="navbar-nav me-auto">
                <a class="nav-link text-white" href="/itens/listar.php">Itens</a>
            </div>
            <?php endif; ?>
        </div>
    </nav>

    <div class="container mt-3 mt-md-4">
        <div class="d-flex justify-content-between align-items-center mb-3 mb-md-4">
            <h1 class="h4 mb-0"><?= htmlspecialchars($item['nome'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></h1>
            <?php if ($usuarioLogado): ?>
                <a class="btn btn-outline-primary btn-sm" href="<?= $qrUrl ?>">QR Code</a>
            <?php endif; ?>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-12 mb-3">
                        <span class="badge <?= $statusClass ?> fs-6"><?= htmlspecialchars($statusLabel, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></span>
                    </div>

                    <div class="col-6 col-md-4">
                        <div class="detail-label">Código de Patrimônio</div>
                        <div class="detail-value"><code><?= htmlspecialchars($item['codigo_patrimonio'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></code></div>
                    </div>

                    <?php if ($item['tipo_nome']): ?>
                    <div class="col-6 col-md-4">
                        <div class="detail-label">Tipo</div>
                        <div class="detail-value"><?= htmlspecialchars($item['tipo_nome'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></div>
                    </div>
                    <?php endif; ?>

                    <?php if ($item['localizacao']): ?>
                    <div class="col-6 col-md-4">
                        <div class="detail-label">Localização</div>
                        <div class="detail-value"><?= htmlspecialchars($item['localizacao'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></div>
                    </div>
                    <?php endif; ?>

                    <?php if ($item['descricao']): ?>
                    <div class="col-12">
                        <div class="detail-label">Descrição</div>
                        <div class="detail-value"><?= htmlspecialchars($item['descricao'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></div>
                    </div>
                    <?php endif; ?>

                    <div class="col-6 col-md-4">
                        <div class="detail-label">Cadastrado em</div>
                        <div class="detail-value"><?= date('d/m/Y H:i', strtotime($item['criado_em'])) ?></div>
                    </div>
                </div>
            </div>
        </div>

        <?php if ($usuarioLogado): ?>
        <div class="d-flex gap-2 mt-3">
            <a class="btn btn-outline-secondary btn-sm" href="/itens/editar.php?id=<?= (int) $item['id'] ?>">Editar</a>
            <a class="btn btn-secondary btn-sm" href="/itens/listar.php">Voltar à lista</a>
        </div>
        <?php endif; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
