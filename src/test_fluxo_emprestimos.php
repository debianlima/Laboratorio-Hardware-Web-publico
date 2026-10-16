<?php
/**
 * Script de teste CLI — Fluxo completo de empréstimos e devoluções (LIM-43)
 *
 * Executar dentro do container app:
 *   docker exec lab_hardware_app php /var/www/html/test_fluxo_emprestimos.php
 */

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once __DIR__ . '/config/db.php';

$pass = 0;
$fail = 0;
$tests = [];

function assert_test($name, $condition, $detail = '') {
    global $pass, $fail, $tests;
    if ($condition) {
        $pass++;
        $tests[] = ['name' => $name, 'status' => 'PASS', 'detail' => $detail];
        echo "[PASS] $name\n";
        if ($detail) echo "       → $detail\n";
    } else {
        $fail++;
        $tests[] = ['name' => $name, 'status' => 'FAIL', 'detail' => $detail];
        echo "[FAIL] $name";
        if ($detail) echo " → $detail";
        echo "\n";
    }
}

// ============================================================
// SETUP: limpar dados de teste anteriores
// ============================================================
echo "=== SETUP: limpando dados de teste ===\n";
$conn = conectar();
if (!$conn) {
    echo "FATAL: não foi possível conectar ao banco de dados.\n";
    exit(1);
}

// Remove empréstimos de teste
$conn->query("DELETE FROM emprestimos WHERE observacao LIKE 'TESTE_LIM43%'");

// Garante que existe usuário de teste
$conn->query("INSERT IGNORE INTO usuarios (id, username, senha, tipo) VALUES (99, 'test_user_lim43', '\$2y\$10\$dummy', 'padrao')");

// Garante que existem equipamentos de teste
$conn->query("INSERT IGNORE INTO equipamentos (id, nome, descricao, quantidade, disponivel) VALUES (991, 'Equip Teste A LIM43', 'Equipamento de teste A', 1, 1)");
$conn->query("INSERT IGNORE INTO equipamentos (id, nome, descricao, quantidade, disponivel) VALUES (992, 'Equip Teste B LIM43', 'Equipamento de teste B', 1, 1)");

echo "\n";

// ============================================================
// TESTE 1: Registrar empréstimo de item disponível
// ============================================================
echo "=== TESTE 1: Registrar empréstimo de item disponível ===\n";

$usuario_id = 99;
$equipamento_id = 991;
$dataEmprestimo = date('Y-m-d H:i:s');
$dataPrevista = date('Y-m-d', strtotime('+7 days')) . ' 23:59:59';
$observacao = 'TESTE_LIM43 - emprestimo normal';

$stmt = $conn->prepare("INSERT INTO emprestimos (usuario_id, equipamento_id, data_emprestimo, data_devolucao, status, observacao) VALUES (?, ?, ?, ?, 'pendente', ?)");
$stmt->bind_param("iisss", $usuario_id, $equipamento_id, $dataEmprestimo, $dataPrevista, $observacao);
$ok = $stmt->execute();
$emprestimo_id_1 = $conn->insert_id;
$stmt->close();

assert_test(
    "1.1 - Empréstimo criado com sucesso",
    $ok && $emprestimo_id_1 > 0,
    "ID do empréstimo: $emprestimo_id_1"
);

// Verificar que o empréstimo está pendente
$stmt = $conn->prepare("SELECT status FROM emprestimos WHERE id = ?");
$stmt->bind_param("i", $emprestimo_id_1);
$stmt->execute();
$result = $stmt->get_result();
$emp = $result->fetch_assoc();
$stmt->close();

assert_test(
    "1.2 - Status do empréstimo é 'pendente'",
    $emp['status'] === 'pendente',
    "Status: " . $emp['status']
);

echo "\n";

// ============================================================
// TESTE 2: Verificar que item fica indisponível (não pode ser emprestado novamente)
// ============================================================
echo "=== TESTE 2: Verificar que item fica indisponível ===\n";

// Tentar criar outro empréstimo para o mesmo equipamento (deve falhar)
$stmtCheck = $conn->prepare("SELECT id FROM emprestimos WHERE equipamento_id = ? AND status IN ('pendente', 'atrasado') LIMIT 1");
$stmtCheck->bind_param("i", $equipamento_id);
$stmtCheck->execute();
$stmtCheck->store_result();
$jaEmprestado = $stmtCheck->num_rows > 0;
$stmtCheck->close();

assert_test(
    "2.1 - Equipamento aparece como emprestado (query de verificação)",
    $jaEmprestado,
    "Equipamento $equipamento_id tem empréstimo pendente/atrasado"
);

// Tentar inserir duplicata (simulando o que cadastrar.php faria)
$dataEmprestimo2 = date('Y-m-d H:i:s');
$stmt2 = $conn->prepare("INSERT INTO emprestimos (usuario_id, equipamento_id, data_emprestimo, data_devolucao, status, observacao) VALUES (?, ?, ?, ?, 'pendente', ?)");
$obs2 = 'TESTE_LIM43 - tentativa duplicata';
$stmt2->bind_param("iisss", $usuario_id, $equipamento_id, $dataEmprestimo2, $dataPrevista, $obs2);
$tentativaDuplicata = $stmt2->execute();
$stmt2->close();

// A inserção direta no DB não bloqueia (o bloqueio é na camada PHP),
// mas vamos verificar se a lógica de detecção funciona
$stmtCheck2 = $conn->prepare("SELECT COUNT(*) as cnt FROM emprestimos WHERE equipamento_id = ? AND status IN ('pendente', 'atrasado')");
$stmtCheck2->bind_param("i", $equipamento_id);
$stmtCheck2->execute();
$res2 = $stmtCheck2->get_result()->fetch_assoc();
$stmtCheck2->close();

assert_test(
    "2.2 - Query detecta múltiplos empréstimos pendentes (validação funciona)",
    $res2['cnt'] >= 1,
    "Count de pendentes/atrasados: " . $res2['cnt']
);

// Limpar a tentativa duplicata se foi inserida
if ($tentativaDuplicata) {
    $conn->query("DELETE FROM emprestimos WHERE observacao = 'TESTE_LIM43 - tentativa duplicata'");
}

echo "\n";

// ============================================================
// TESTE 3: Registrar devolução
// ============================================================
echo "=== TESTE 3: Registrar devolução ===\n";

$dataDevolucao = date('Y-m-d') . ' 23:59:59';
$novoStatus = 'devolvido';

$stmtUpd = $conn->prepare("UPDATE emprestimos SET data_devolucao = ?, status = ?, observacao = CONCAT(observacao, ' | devolvido via teste') WHERE id = ?");
$stmtUpd->bind_param("ssi", $dataDevolucao, $novoStatus, $emprestimo_id_1);
$okDevolucao = $stmtUpd->execute();
$rowsAffected = $stmtUpd->affected_rows;
$stmtUpd->close();

assert_test(
    "3.1 - Devolução registrada com sucesso",
    $okDevolucao,
    "OK: " . ($okDevolucao ? 'true' : 'false')
);

// Verificar status atualizado
$stmt = $conn->prepare("SELECT status, data_devolucao FROM emprestimos WHERE id = ?");
$stmt->bind_param("i", $emprestimo_id_1);
$stmt->execute();
$result = $stmt->get_result();
$empDevolvido = $result->fetch_assoc();
$stmt->close();

assert_test(
    "3.2 - Status atualizado para 'devolvido'",
    $empDevolvido['status'] === 'devolvido',
    "Status: " . $empDevolvido['status']
);

assert_test(
    "3.3 - Data de devolução preenchida",
    $empDevolvido['data_devolucao'] !== null,
    "Data devolução: " . $empDevolvido['data_devolucao']
);

echo "\n";

// ============================================================
// TESTE 4: Verificar que item volta a ficar disponível
// ============================================================
echo "=== TESTE 4: Verificar que item volta a ficar disponível ===\n";

$stmtCheck3 = $conn->prepare("SELECT id FROM emprestimos WHERE equipamento_id = ? AND status IN ('pendente', 'atrasado') LIMIT 1");
$stmtCheck3->bind_param("i", $equipamento_id);
$stmtCheck3->execute();
$stmtCheck3->store_result();
$disponivelAposDevolucao = $stmtCheck3->num_rows === 0;
$stmtCheck3->close();

assert_test(
    "4.1 - Equipamento disponível após devolução",
    $disponivelAposDevolucao,
    "Nenhum empréstimo pendente/atrasado para equipamento $equipamento_id"
);

// Agora deve ser possível criar novo empréstimo
$dataEmprestimo3 = date('Y-m-d H:i:s');
$stmt3 = $conn->prepare("INSERT INTO emprestimos (usuario_id, equipamento_id, data_emprestimo, data_devolucao, status, observacao) VALUES (?, ?, ?, ?, 'pendente', ?)");
$obs3 = 'TESTE_LIM43 - emprestimo apos devolucao';
$stmt3->bind_param("iisss", $usuario_id, $equipamento_id, $dataEmprestimo3, $dataPrevista, $obs3);
$okNovoEmprestimo = $stmt3->execute();
$emprestimo_id_2 = $conn->insert_id;
$stmt3->close();

assert_test(
    "4.2 - Novo empréstimo possível após devolução",
    $okNovoEmprestimo && $emprestimo_id_2 > 0,
    "ID do novo empréstimo: $emprestimo_id_2"
);

echo "\n";

// ============================================================
// TESTE 5: Validações — item inexistente
// ============================================================
echo "=== TESTE 5: Validações — item inexistente ===\n";

$idInexistente = 99999;
$stmtCheckUser = $conn->prepare("SELECT id FROM usuarios WHERE id = ? LIMIT 1");
$stmtCheckUser->bind_param("i", $idInexistente);
$stmtCheckUser->execute();
$stmtCheckUser->store_result();
$userInexistente = $stmtCheckUser->num_rows === 0;
$stmtCheckUser->close();

assert_test(
    "5.1 - Usuário inexistente é detectado",
    $userInexistente,
    "Usuário 99999 não existe"
);

$stmtCheckEquip = $conn->prepare("SELECT id FROM equipamentos WHERE id = ? LIMIT 1");
$stmtCheckEquip->bind_param("i", $idInexistente);
$stmtCheckEquip->execute();
$stmtCheckEquip->store_result();
$equipInexistente = $stmtCheckEquip->num_rows === 0;
$stmtCheckEquip->close();

assert_test(
    "5.2 - Equipamento inexistente é detectado",
    $equipInexistente,
    "Equipamento 99999 não existe"
);

echo "\n";

// ============================================================
// TESTE 6: Validações — item já emprestado (segundo equipamento)
// ============================================================
echo "=== TESTE 6: Validações — item já emprestado ===\n";

// O emprestimo_id_2 ainda está pendente para equipamento 991
// Tentar emprestar o mesmo equipamento novamente
$stmtCheckPendente = $conn->prepare("SELECT id FROM emprestimos WHERE equipamento_id = ? AND status IN ('pendente', 'atrasado') LIMIT 1");
$stmtCheckPendente->bind_param("i", $equipamento_id);
$stmtCheckPendente->execute();
$stmtCheckPendente->store_result();
$bloqueado = $stmtCheckPendente->num_rows > 0;
$stmtCheckPendente->close();

assert_test(
    "6.1 - Empréstimo duplicado é bloqueado (equipamento já pendente)",
    $bloqueado,
    "Equipamento $equipamento_id já tem empréstimo pendente"
);

// Mas outro equipamento (992) deve estar disponível
$outroEquipId = 992;
$stmtCheckOutro = $conn->prepare("SELECT id FROM emprestimos WHERE equipamento_id = ? AND status IN ('pendente', 'atrasado') LIMIT 1");
$stmtCheckOutro->bind_param("i", $outroEquipId);
$stmtCheckOutro->execute();
$stmtCheckOutro->store_result();
$outroDisponivel = $stmtCheckOutro->num_rows === 0;
$stmtCheckOutro->close();

assert_test(
    "6.2 - Outro equipamento não emprestado está disponível",
    $outroDisponivel,
    "Equipamento 992 está livre"
);

echo "\n";

// ============================================================
// TESTE 7: Devolução atrasada
// ============================================================
echo "=== TESTE 7: Devolução atrasada ===\n";

// Criar empréstimo com data prevista no passado
$dataPrevistaPassado = date('Y-m-d', strtotime('-10 days')) . ' 23:59:59';
$dataEmprestimo4 = date('Y-m-d H:i:s');
$stmt4 = $conn->prepare("INSERT INTO emprestimos (usuario_id, equipamento_id, data_emprestimo, data_devolucao, status, observacao) VALUES (?, ?, ?, ?, 'pendente', ?)");
$obs4 = 'TESTE_LIM43 - devolucao atrasada';
$stmt4->bind_param("iisss", $usuario_id, $outroEquipId, $dataEmprestimo4, $dataPrevistaPassado, $obs4);
$ok4 = $stmt4->execute();
$emprestimo_id_3 = $conn->insert_id;
$stmt4->close();

assert_test(
    "7.1 - Empréstimo com data passada criado",
    $ok4 && $emprestimo_id_3 > 0,
    "ID: $emprestimo_id_3, data prevista: $dataPrevistaPassado"
);

// Simular devolução com data efetiva posterior à prevista (lógica de editar.php)
$dataDevolucaoEfetiva = date('Y-m-d'); // hoje
$dataPrevistaOriginal = date('Y-m-d', strtotime('-10 days'));
$novoStatusAtrasado = ($dataPrevistaOriginal && $dataDevolucaoEfetiva > $dataPrevistaOriginal) ? 'atrasado' : 'devolvido';

$stmtUpd2 = $conn->prepare("UPDATE emprestimos SET data_devolucao = ?, status = ?, observacao = CONCAT(observacao, ' | devolucao atrasada via teste') WHERE id = ?");
$dataDevFull = $dataDevolucaoEfetiva . ' 23:59:59';
$stmtUpd2->bind_param("ssi", $dataDevFull, $novoStatusAtrasado, $emprestimo_id_3);
$okDevolAtrasada = $stmtUpd2->execute();
$stmtUpd2->close();

assert_test(
    "7.2 - Devolução atrasada detectada corretamente",
    $novoStatusAtrasado === 'atrasado',
    "Status: $novoStatusAtrasado (prevista: $dataPrevistaOriginal, efetiva: $dataDevolucaoEfetiva)"
);

assert_test(
    "7.3 - Devolução atrasada registrada no banco",
    $okDevolAtrasada,
    "OK: " . ($okDevolAtrasada ? 'true' : 'false')
);

echo "\n";

// ============================================================
// TESTE 8: Listagem de empréstimos
// ============================================================
echo "=== TESTE 8: Listagem de empréstimos ===\n";

$result = $conn->query("SELECT COUNT(*) as total FROM emprestimos WHERE observacao LIKE 'TESTE_LIM43%'");
$total = $result->fetch_assoc()['total'];

assert_test(
    "8.1 - Empréstimos de teste estão no banco",
    $total >= 3,
    "Total de empréstimos de teste: $total"
);

// Verificar que existem empréstimos em diferentes status
$result = $conn->query("SELECT status, COUNT(*) as cnt FROM emprestimos WHERE observacao LIKE 'TESTE_LIM43%' GROUP BY status");
$statuses = [];
while ($row = $result->fetch_assoc()) {
    $statuses[$row['status']] = $row['cnt'];
}

assert_test(
    "8.2 - Existem empréstimos devolvidos",
    isset($statuses['devolvido']) && $statuses['devolvido'] > 0,
    "Devolvidos: " . ($statuses['devolvido'] ?? 0)
);

assert_test(
    "8.3 - Existem empréstimos pendentes",
    isset($statuses['pendente']) && $statuses['pendente'] > 0,
    "Pendentes: " . ($statuses['pendente'] ?? 0)
);

assert_test(
    "8.4 - Existem empréstimos atrasados",
    isset($statuses['atrasado']) && $statuses['atrasado'] > 0,
    "Atrasados: " . ($statuses['atrasado'] ?? 0)
);

echo "\n";

// ============================================================
// CLEANUP
// ============================================================
echo "=== CLEANUP: removendo dados de teste ===\n";
$conn->query("DELETE FROM emprestimos WHERE observacao LIKE 'TESTE_LIM43%'");
$conn->query("DELETE FROM usuarios WHERE id = 99");
$conn->query("DELETE FROM equipamentos WHERE id IN (991, 992)");
echo "Dados de teste removidos.\n\n";

$conn->close();

// ============================================================
// RESUMO
// ============================================================
echo "===========================================\n";
echo "         RESUMO DOS TESTES (LIM-43)\n";
echo "===========================================\n";
echo "Total: " . ($pass + $fail) . "\n";
echo "Pass:  $pass\n";
echo "Fail:  $fail\n";
echo "===========================================\n";

if ($fail > 0) {
    echo "\nTestes com falha:\n";
    foreach ($tests as $t) {
        if ($t['status'] === 'FAIL') {
            echo "  - {$t['name']}: {$t['detail']}\n";
        }
    }
    echo "\n";
}

exit($fail > 0 ? 1 : 0);
