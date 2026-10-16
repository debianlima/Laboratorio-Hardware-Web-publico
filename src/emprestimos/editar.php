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

$id = (int) ($_GET['id'] ?? $_POST['id'] ?? 0);
if ($id <= 0) {
    $conn->close();
    definirMensagem('Empréstimo inválido.', 'danger');
    header('Location: /emprestimos/listar.php');
    exit;
}

$stmt = $conn->prepare("SELECT e.*, u.username AS usuario_nome, eq.nome AS equipamento_nome
                        FROM emprestimos e
                        JOIN usuarios u ON e.usuario_id = u.id
                        JOIN equipamentos eq ON e.equipamento_id = eq.id
                        WHERE e.id = ? LIMIT 1");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$emp = $result->fetch_assoc();
$stmt->close();

if (!$emp) {
    $conn->close();
    definirMensagem('Empréstimo não encontrado.', 'danger');
    header('Location: /emprestimos/listar.php');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['csrf_token'] ?? '';
    if (!validarTokenCSRF($token)) {
        $conn->close();
        definirMensagem('Sessão inválida. Tente novamente.', 'danger');
        header('Location: /emprestimos/editar.php?id=' . $id);
        exit;
    }

    $data_devolucao_efetiva = trim($_POST['data_devolucao_efetiva'] ?? '');
    $observacao = trim($_POST['observacao'] ?? '');

    if ($emp['status'] === 'devolvido') {
        $conn->close();
        definirMensagem('Este empréstimo já foi devolvido.', 'warning');
        header('Location: /emprestimos/listar.php');
        exit;
    }

    if ($data_devolucao_efetiva === '') {
        definirMensagem('Informe a data de devolução efetiva.', 'danger');
        header('Location: /emprestimos/editar.php?id=' . $id);
        exit;
    }

    $dataDevDateTime = $data_devolucao_efetiva . ' 23:59:59';
    $equipamentoId = (int) $emp['equipamento_id'];

    $conn->begin_transaction();
    try {
        $novoStatus = 'devolvido';
        $stmtUpd = $conn->prepare("UPDATE emprestimos SET data_devolucao = ?, status = ?, observacao = ? WHERE id = ?");
        $stmtUpd->bind_param("sssi", $dataDevDateTime, $novoStatus, $observacao, $id);
        $ok = $stmtUpd->execute();
        $stmtUpd->close();

        if (!$ok) {
            throw new RuntimeException('Falha ao atualizar empréstimo.');
        }

        $stmtUpdDisp = $conn->prepare("UPDATE equipamentos SET disponivel = disponivel + 1 WHERE id = ?");
        $stmtUpdDisp->bind_param("i", $equipamentoId);
        $okDisp = $stmtUpdDisp->execute();
        $stmtUpdDisp->close();

        if (!$okDisp) {
            throw new RuntimeException('Falha ao atualizar disponibilidade.');
        }

        $conn->commit();
        $conn->close();
        definirMensagem('Devolução registrada com sucesso.', 'success');
        header('Location: /emprestimos/listar.php');
        exit;
    } catch (Throwable $e) {
        $conn->rollback();
        $conn->close();
        definirMensagem('Erro ao atualizar empréstimo.', 'danger');
        header('Location: /emprestimos/editar.php?id=' . $id);
        exit;
    }
}

$conn->close();

$statusClass = match($emp['status']) {
    'pendente' => 'bg-warning text-dark',
    'devolvido' => 'bg-success',
    'atrasado' => 'bg-danger',
    default => 'bg-secondary'
};
$statusLabels = ['pendente' => 'Pendente', 'devolvido' => 'Devolvido', 'atrasado' => 'Atrasado'];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Empréstimo - Lab Hardware</title>
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
                <a class="nav-link text-white" href="/emprestimos/listar.php">Empréstimos</a>
                <a class="nav-link text-white" href="/emprestimos/atrasados.php">Atrasados</a>
            </div>
        </div>
    </nav>

    <div class="container mt-3 mt-md-4">
        <h1 class="h4 mb-4">
            <?= $emp['status'] === 'devolvido' ? 'Detalhes do Empréstimo' : 'Registrar Devolução' ?>
        </h1>

        <?php exibirMensagem(); ?>

        <div class="card mb-3">
            <div class="card-body">
                <dl class="row mb-0">
                    <dt class="col-sm-3">Usuário</dt>
                    <dd class="col-sm-9"><?= htmlspecialchars($emp['usuario_nome'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></dd>
                    <dt class="col-sm-3">Equipamento</dt>
                    <dd class="col-sm-9"><?= htmlspecialchars($emp['equipamento_nome'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></dd>
                    <dt class="col-sm-3">Data Empréstimo</dt>
                    <dd class="col-sm-9"><?= date('d/m/Y H:i', strtotime($emp['data_emprestimo'])) ?></dd>
                    <dt class="col-sm-3">Data Prevista/Devolução</dt>
                    <dd class="col-sm-9"><?= $emp['data_devolucao'] ? date('d/m/Y', strtotime($emp['data_devolucao'])) : '<span class="text-muted">Não definida</span>' ?></dd>
                    <dt class="col-sm-3">Status</dt>
                    <dd class="col-sm-9">
                        <span class="badge <?= $statusClass ?>"><?= $statusLabels[$emp['status']] ?? htmlspecialchars($emp['status'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></span>
                    </dd>
                    <?php if (!empty($emp['observacao'])): ?>
                    <dt class="col-sm-3">Observação</dt>
                    <dd class="col-sm-9"><?= htmlspecialchars($emp['observacao'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></dd>
                    <?php endif; ?>
                </dl>
            </div>
        </div>

        <?php if ($emp['status'] !== 'devolvido'): ?>
        <div class="card">
            <div class="card-body">
                <form method="post" class="row g-3">
                    <input type="hidden" name="csrf_token" value="<?= gerarTokenCSRF() ?>">
                    <input type="hidden" name="id" value="<?= (int) $emp['id'] ?>">
                    <div class="col-12 col-md-4">
                        <label for="data_devolucao_efetiva" class="form-label">Data Devolução Efetiva *</label>
                        <input type="date" name="data_devolucao_efetiva" id="data_devolucao_efetiva" class="form-control" value="<?= date('Y-m-d') ?>" required>
                    </div>
                    <div class="col-12">
                        <label for="observacao" class="form-label">Observações</label>
                        <textarea name="observacao" id="observacao" class="form-control" rows="2" maxlength="500"><?= htmlspecialchars($emp['observacao'] ?? '', ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8') ?></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-success btn-lg">Registrar Devolução</button>
                        <a class="btn btn-secondary btn-lg" href="/emprestimos/listar.php">Voltar</a>
                    </div>
                </form>
            </div>
        </div>
        <?php else: ?>
        <div class="alert alert-info">
            Este empréstimo já foi devolvido.
        </div>
        <a class="btn btn-secondary" href="/emprestimos/listar.php">Voltar</a>
        <?php endif; ?>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
