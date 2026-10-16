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

$stmtUsuarios = $conn->prepare("SELECT id, username FROM usuarios ORDER BY username");
$stmtUsuarios->execute();
$resultUsuarios = $stmtUsuarios->get_result();
$usuarios = $resultUsuarios->fetch_all(MYSQLI_ASSOC);
$stmtUsuarios->close();

$stmtEquip = $conn->prepare("SELECT id, nome FROM equipamentos WHERE disponivel > 0 ORDER BY nome");
$stmtEquip->execute();
$resultEquip = $stmtEquip->get_result();
$equipamentos = $resultEquip->fetch_all(MYSQLI_ASSOC);
$stmtEquip->close();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario_id = (int) ($_POST['usuario_id'] ?? 0);
    $equipamento_id = (int) ($_POST['equipamento_id'] ?? 0);
    $data_prevista = trim($_POST['data_prevista'] ?? '');
    $observacao = trim($_POST['observacao'] ?? '');

    $token = $_POST['csrf_token'] ?? '';
    if (!validarTokenCSRF($token)) {
        definirMensagem('Sessão inválida. Tente novamente.', 'danger');
        header('Location: /emprestimos/cadastrar.php');
        exit;
    }

    if ($usuario_id <= 0 || $equipamento_id <= 0) {
        definirMensagem('Selecione um usuário e um equipamento.', 'danger');
        header('Location: /emprestimos/cadastrar.php');
        exit;
    }

    $stmtCheckUser = $conn->prepare("SELECT id FROM usuarios WHERE id = ? LIMIT 1");
    $stmtCheckUser->bind_param("i", $usuario_id);
    $stmtCheckUser->execute();
    $stmtCheckUser->store_result();
    if ($stmtCheckUser->num_rows === 0) {
        $stmtCheckUser->close();
        definirMensagem('Usuário inválido.', 'danger');
        header('Location: /emprestimos/cadastrar.php');
        exit;
    }
    $stmtCheckUser->close();

    $stmtCheckEquip = $conn->prepare("SELECT id, disponivel FROM equipamentos WHERE id = ? LIMIT 1");
    $stmtCheckEquip->bind_param("i", $equipamento_id);
    $stmtCheckEquip->execute();
    $resultEquipamento = $stmtCheckEquip->get_result();
    $equipamento = $resultEquipamento->fetch_assoc();
    $stmtCheckEquip->close();
    if (!$equipamento || (int) $equipamento['disponivel'] <= 0) {
        definirMensagem('Equipamento indisponível.', 'danger');
        header('Location: /emprestimos/cadastrar.php');
        exit;
    }

    $stmtCheckPendente = $conn->prepare("SELECT id FROM emprestimos WHERE equipamento_id = ? AND status IN ('pendente', 'atrasado') LIMIT 1");
    $stmtCheckPendente->bind_param("i", $equipamento_id);
    $stmtCheckPendente->execute();
    $stmtCheckPendente->store_result();
    if ($stmtCheckPendente->num_rows > 0) {
        $stmtCheckPendente->close();
        definirMensagem('Este equipamento já está emprestado e ainda não foi devolvido.', 'danger');
        header('Location: /emprestimos/cadastrar.php');
        exit;
    }
    $stmtCheckPendente->close();

    $dataEmprestimo = date('Y-m-d H:i:s');
    $dataPrevistaDT = $data_prevista !== '' ? $data_prevista . ' 23:59:59' : null;

    $conn->begin_transaction();

    $stmt = $conn->prepare("INSERT INTO emprestimos (usuario_id, equipamento_id, data_emprestimo, data_devolucao, status, observacao) VALUES (?, ?, ?, ?, 'pendente', ?)");
    $stmt->bind_param("iisss", $usuario_id, $equipamento_id, $dataEmprestimo, $dataPrevistaDT, $observacao);
    $ok = $stmt->execute();
    $stmt->close();

    if ($ok) {
        $stmtUpdateDisp = $conn->prepare("UPDATE equipamentos SET disponivel = disponivel - 1 WHERE id = ? AND disponivel > 0");
        $stmtUpdateDisp->bind_param("i", $equipamento_id);
        $stmtUpdateDisp->execute();
        $ok = $stmtUpdateDisp->affected_rows === 1;
        $stmtUpdateDisp->close();
    }

    if ($ok) {
        $conn->commit();
        definirMensagem('Empréstimo registrado com sucesso.', 'success');
        header('Location: /emprestimos/listar.php');
        exit;
    }

    $conn->rollback();
    definirMensagem('Erro ao registrar empréstimo.', 'danger');
    header('Location: /emprestimos/cadastrar.php');
    exit;
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo Empréstimo - Lab Hardware</title>
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
        <h1 class="h4 mb-4">Novo Empréstimo</h1>

        <?php exibirMensagem(); ?>

        <div class="card">
            <div class="card-body">
                <form method="post" class="row g-3">
                    <input type="hidden" name="csrf_token" value="<?= gerarTokenCSRF() ?>">
                    <div class="col-12 col-md-5">
                        <label for="usuario_id" class="form-label">Usuário *</label>
                        <select name="usuario_id" id="usuario_id" class="form-select" required>
                            <option value="">Selecione um usuário...</option>
                            <?php foreach ($usuarios as $u): ?>
                            <option value="<?= $u['id'] ?>"><?= htmlspecialchars($u['username']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="col-12 col-md-5">
                        <label for="equipamento_id" class="form-label">Equipamento *</label>
                        <select name="equipamento_id" id="equipamento_id" class="form-select" required>
                            <option value="">Selecione um equipamento...</option>
                            <?php foreach ($equipamentos as $eq): ?>
                            <option value="<?= $eq['id'] ?>"><?= htmlspecialchars($eq['nome']) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div class="col-6 col-md-2">
                        <label for="data_prevista" class="form-label">Data Prevista Devolução</label>
                        <input type="date" name="data_prevista" id="data_prevista" class="form-control">
                    </div>
                    <div class="col-12">
                        <label for="observacao" class="form-label">Observações</label>
                        <textarea name="observacao" id="observacao" class="form-control" rows="2" maxlength="500" placeholder="Observações opcionais"></textarea>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-lg">Registrar Empréstimo</button>
                        <a class="btn btn-secondary btn-lg" href="/emprestimos/listar.php">Voltar</a>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
