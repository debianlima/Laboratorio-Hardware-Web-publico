<?php
session_start();
require_once __DIR__ . '/../config/db.php';
require_once __DIR__ . '/../config/auth.php';
requerLogin();

$conn = conectar();
if (!$conn) {
    header('Location: /index.php');
    exit;
}

$id = filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT);
if (!$id) {
    header('Location: /itens/listar.php');
    exit;
}

$stmt = $conn->prepare("
    SELECT i.id, i.codigo_patrimonio, i.nome, i.status, i.descricao, i.localizacao,
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
    header('Location: /itens/listar.php');
    exit;
}

$statusLabels = [
    'disponivel' => 'Disponível',
    'emprestado' => 'Emprestado',
    'manutencao' => 'Manutenção'
];
$statusLabel = $statusLabels[$item['status']] ?? $item['status'];

$baseUrl = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http')
    . '://' . $_SERVER['HTTP_HOST'];
$qrTargetUrl = $baseUrl . '/itens/ver.php?id=' . $item['id'];
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR Code - <?= htmlspecialchars($item['nome']) ?> - Lab Hardware</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js"></script>
    <style>
        body { background-color: #f8f9fa; }
        .card { border-radius: 0.75rem; }
        #qrcode { display: flex; justify-content: center; margin: 1.5rem 0; }
        #qrcode img { border: 4px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

        .label-preview {
            border: 2px dashed #dee2e6;
            border-radius: 0.5rem;
            padding: 1rem;
            text-align: center;
            background: #fff;
            max-width: 300px;
            margin: 1rem auto;
        }
        .label-preview .item-name { font-weight: 700; font-size: 1rem; margin: 0.5rem 0 0.25rem; }
        .label-preview .item-code { font-size: 0.8rem; color: #6c757d; }
        .label-preview .item-status { font-size: 0.75rem; color: #adb5bd; }

        @media print {
            body * { visibility: hidden; }
            .print-area, .print-area * { visibility: visible; }
            .print-area {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
            }
            .print-area .label-preview {
                border: 1px solid #000;
                box-shadow: none;
                page-break-inside: avoid;
            }
            .no-print { display: none !important; }
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary no-print">
        <div class="container-fluid">
            <a class="navbar-brand" href="/index.php">Lab Hardware</a>
            <div class="navbar-nav me-auto">
                <a class="nav-link text-white" href="/itens/listar.php">Itens</a>
                <a class="nav-link text-white" href="/itens/ver.php?id=<?= $item['id'] ?>">Detalhes</a>
            </div>
        </div>
    </nav>

    <div class="container mt-3 mt-md-4 no-print">
        <h1 class="h4 mb-3">QR Code — <?= htmlspecialchars($item['nome']) ?></h1>

        <div class="card">
            <div class="card-body">
                <div id="qrcode"></div>
                <p class="text-center text-muted small">URL: <code><?= htmlspecialchars($qrTargetUrl) ?></code></p>
            </div>
        </div>

        <div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title">Pré-visualização da Etiqueta</h5>
                <div class="label-preview" id="labelPreview">
                    <div id="qrcode-label"></div>
                    <div class="item-name"><?= htmlspecialchars($item['nome']) ?></div>
                    <div class="item-code"><?= htmlspecialchars($item['codigo_patrimonio']) ?></div>
                    <?php if ($item['tipo_nome']): ?>
                    <div class="item-status"><?= htmlspecialchars($item['tipo_nome']) ?> — <?= $statusLabel ?></div>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <div class="d-flex gap-2 mt-3">
            <button class="btn btn-primary" onclick="window.print()">Imprimir Etiqueta</button>
            <a class="btn btn-outline-secondary" href="/itens/ver.php?id=<?= $item['id'] ?>">Voltar</a>
        </div>
    </div>

    <div class="print-area" style="display:none;">
        <div class="label-preview" id="printLabel">
            <div id="qrcode-print"></div>
            <div class="item-name"><?= htmlspecialchars($item['nome']) ?></div>
            <div class="item-code"><?= htmlspecialchars($item['codigo_patrimonio']) ?></div>
            <?php if ($item['tipo_nome']): ?>
            <div class="item-status"><?= htmlspecialchars($item['tipo_nome']) ?> — <?= $statusLabel ?></div>
            <?php endif; ?>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var qrUrl = <?= json_encode($qrTargetUrl) ?>;

            new QRCode(document.getElementById('qrcode'), {
                text: qrUrl,
                width: 200,
                height: 200,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.M
            });

            new QRCode(document.getElementById('qrcode-label'), {
                text: qrUrl,
                width: 128,
                height: 128,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.M
            });

            new QRCode(document.getElementById('qrcode-print'), {
                text: qrUrl,
                width: 150,
                height: 150,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.M
            });

            document.querySelector('.print-area').style.display = 'none';
        });
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
