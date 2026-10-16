#!/bin/bash
# Testes automatizados do fluxo de emprestimos e devolucoes - LIM-43
# Executados via curl contra app rodando em http://localhost:8080

BASE="http://localhost:8080"
COOKIE="/tmp/lim43_cookie.txt"
PASS=0
FAIL=0
TOTAL=0

log() { echo "[$1] $2"; }
check() {
    TOTAL=$((TOTAL+1))
    if [ "$1" = "PASS" ]; then
        PASS=$((PASS+1))
        log "PASS" "$2"
    else
        FAIL=$((FAIL+1))
        log "FAIL" "$2"
    fi
}

rm -f "$COOKIE"

echo "=========================================="
echo "LIM-43: Testes de Emprestimos e Devolucoes"
echo "=========================================="
echo ""

# --- Teste 4: Autenticacao (sem login -> redirect) ---
echo "--- Teste 4: Validacao de Autenticacao ---"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE/emprestimos/listar.php")
if [ "$HTTP_CODE" = "302" ]; then
    check "PASS" "Sem login, listar.php retorna 302 redirect"
else
    check "FAIL" "Sem login, listar.php retornou $HTTP_CODE (esperado 302)"
fi

LOC=$(curl -s -o /dev/null -w "%{redirect_url}" "$BASE/emprestimos/listar.php")
if echo "$LOC" | grep -q "login.php"; then
    check "PASS" "Redirect vai para login.php"
else
    check "FAIL" "Redirect nao vai para login.php (foi para $LOC)"
fi

# --- Login ---
echo ""
echo "--- Login ---"
CSRF_PAGE=$(curl -s -c "$COOKIE" "$BASE/login.php")
# O login.php nao usa CSRF token no form, so POST direto
LOGIN_RESP=$(curl -s -c "$COOKIE" -b "$COOKIE" -L -o /dev/null -w "%{http_code}" \
    -X POST "$BASE/login.php" \
    -d "username=admin&senha=${TEST_ADMIN_PASSWORD:-change-me}")
if [ "$LOGIN_RESP" = "200" ]; then
    check "PASS" "Login de teste retornou 200"
else
    check "FAIL" "Login retornou $LOGIN_RESP (esperado 200)"
fi

# Verificar sessao ativa
DASH_CODE=$(curl -s -b "$COOKIE" -o /dev/null -w "%{http_code}" "$BASE/index.php")
if [ "$DASH_CODE" = "200" ]; then
    check "PASS" "Sessao ativa, index.php retorna 200"
else
    check "FAIL" "index.php com cookie retornou $DASH_CODE"
fi

# --- Teste 1: Fluxo completo de emprestimo ---
echo ""
echo "--- Teste 1: Fluxo completo de emprestimo ---"
CADASTRAR_PAGE=$(curl -s -b "$COOKIE" "$BASE/emprestimos/cadastrar.php")

# Extrair CSRF token
CSRF_TOKEN=$(echo "$CADASTRAR_PAGE" | grep -oP 'name="csrf_token" value="\K[^"]+')
if [ -n "$CSRF_TOKEN" ]; then
    check "PASS" "CSRF token encontrado na pagina de cadastro"
else
    check "FAIL" "CSRF token nao encontrado"
    CSRF_TOKEN="invalid"
fi

# Registrar emprestimo
EMP_RESP=$(curl -s -b "$COOKIE" -L -w "\n%{http_code}" \
    -X POST "$BASE/emprestimos/cadastrar.php" \
    -d "csrf_token=$CSRF_TOKEN&usuario_id=1&equipamento_id=1&data_prevista=2026-06-01&observacao=Teste LIM-43")
HTTP_CODE=$(echo "$EMP_RESP" | tail -1)
if [ "$HTTP_CODE" = "200" ]; then
    check "PASS" "Cadastro de emprestimo retornou 200 (com redirect)"
else
    check "FAIL" "Cadastro retornou $HTTP_CODE"
fi

# Verificar mensagem de sucesso
if echo "$EMP_RESP" | grep -q "sucesso"; then
    check "PASS" "Mensagem de sucesso exibida"
else
    check "FAIL" "Mensagem de sucesso nao encontrada"
fi

# Verificar no banco
EMP_COUNT=$(docker exec lab_hardware_db mysql -u lab_user -p'lab_password' lab_hardware -N -e "SELECT COUNT(*) FROM emprestimos WHERE usuario_id=1 AND equipamento_id=1 AND status='pendente';" 2>/dev/null | tail -1)
if [ "$EMP_COUNT" = "1" ]; then
    check "PASS" "Emprestimo registrado no banco com status pendente"
else
    check "FAIL" "Emprestimo nao encontrado no banco (count=$EMP_COUNT)"
fi

# Verificar que aparece na listagem
LISTAR_PAGE=$(curl -s -b "$COOKIE" "$BASE/emprestimos/listar.php")
if echo "$LISTAR_PAGE" | grep -q "Arduino Uno R3"; then
    check "PASS" "Emprestimo aparece na listagem com nome do equipamento"
else
    check "FAIL" "Emprestimo nao aparece na listagem"
fi

if echo "$LISTAR_PAGE" | grep -q "Pendente"; then
    check "PASS" "Status 'Pendente' exibido na listagem"
else
    check "FAIL" "Status 'Pendente' nao encontrado"
fi

# --- Teste 2: Validacao de equipamento indisponivel ---
echo ""
echo "--- Teste 2: Validacao de equipamento indisponivel ---"
CSRF_TOKEN2=$(echo "$CADASTRAR_PAGE" | grep -oP 'name="csrf_token" value="\K[^"]+')
DUP_RESP=$(curl -s -b "$COOKIE" -L -w "\n%{http_code}" \
    -X POST "$BASE/emprestimos/cadastrar.php" \
    -d "csrf_token=$CSRF_TOKEN2&usuario_id=1&equipamento_id=1&data_prevista=2026-06-01&observacao=Tentativa duplicata")
if echo "$DUP_RESP" | grep -q "já está emprestado"; then
    check "PASS" "Bloqueio de equipamento ja emprestado funciona"
else
    check "FAIL" "Nao bloqueou emprestimo duplicado"
fi

# --- Teste 3: Validacao de CSRF ---
echo ""
echo "--- Teste 3: Validacao de CSRF ---"
CSRF_FAIL=$(curl -s -b "$COOKIE" -L -w "\n%{http_code}" \
    -X POST "$BASE/emprestimos/cadastrar.php" \
    -d "csrf_token=token_falso&usuario_id=1&equipamento_id=2&data_prevista=2026-06-01")
if echo "$CSRF_FAIL" | grep -q "Sessão inválida"; then
    check "PASS" "CSRF invalido bloqueado com 'Sessao invalida'"
else
    check "FAIL" "CSRF invalido nao foi bloqueado"
fi

# --- Teste 5: Devolucao de emprestimo ---
echo ""
echo "--- Teste 5: Devolucao de emprestimo ---"
EMP_ID=$(docker exec lab_hardware_db mysql -u lab_user -p'lab_password' lab_hardware -N -e "SELECT id FROM emprestimos WHERE status='pendente' LIMIT 1;" 2>/dev/null | tail -1)
if [ -n "$EMP_ID" ] && [ "$EMP_ID" != "0" ]; then
    check "PASS" "Emprestimo pendente encontrado (id=$EMP_ID)"
else
    check "FAIL" "Nenhum emprestimo pendente encontrado"
    EMP_ID=1
fi

EDIT_PAGE=$(curl -s -b "$COOKIE" "$BASE/emprestimos/editar.php?id=$EMP_ID")
CSRF_DEVOL=$(echo "$EDIT_PAGE" | grep -oP 'name="csrf_token" value="\K[^"]+')
if [ -n "$CSRF_DEVOL" ]; then
    check "PASS" "CSRF token encontrado na pagina de devolucao"
else
    check "FAIL" "CSRF token nao encontrado na devolucao"
    CSRF_DEVOL="invalid"
fi

DEVOL_RESP=$(curl -s -b "$COOKIE" -L -w "\n%{http_code}" \
    -X POST "$BASE/emprestimos/editar.php?id=$EMP_ID" \
    -d "csrf_token=$CSRF_DEVOL&data_devolucao_efetiva=$(date +%Y-%m-%d)&observacao=Devolucao teste LIM-43")
if echo "$DEVOL_RESP" | grep -q "Devolução registrada com sucesso"; then
    check "PASS" "Devolucao registrada com sucesso"
else
    check "FAIL" "Devolucao nao registrou sucesso"
fi

DEVOL_STATUS=$(docker exec lab_hardware_db mysql -u lab_user -p'lab_password' lab_hardware -N -e "SELECT status FROM emprestimos WHERE id=$EMP_ID;" 2>/dev/null | tail -1)
if [ "$DEVOL_STATUS" = "devolvido" ]; then
    check "PASS" "Status no banco mudou para 'devolvido'"
else
    check "FAIL" "Status no banco e '$DEVOL_STATUS' (esperado 'devolvido')"
fi

# --- Teste 6: Devolucao atrasada ---
echo ""
echo "--- Teste 6: Devolucao atrasada ---"
# Criar emprestimo com data prevista no passado
docker exec lab_hardware_db mysql -u lab_user -p'lab_password' lab_hardware -e "
INSERT INTO emprestimos (usuario_id, equipamento_id, data_emprestimo, data_devolucao, status, observacao)
VALUES (1, 2, '2026-01-01 10:00:00', '2026-01-15 23:59:59', 'pendente', 'Teste devolucao atrasada');
" 2>/dev/null
EMP_ATR_ID=$(docker exec lab_hardware_db mysql -u lab_user -p'lab_password' lab_hardware -N -e "SELECT id FROM emprestimos WHERE observacao='Teste devolucao atrasada' LIMIT 1;" 2>/dev/null | tail -1)

EDIT_ATR_PAGE=$(curl -s -b "$COOKIE" "$BASE/emprestimos/editar.php?id=$EMP_ATR_ID")
CSRF_ATR=$(echo "$EDIT_ATR_PAGE" | grep -oP 'name="csrf_token" value="\K[^"]+')

DEVOL_ATR_RESP=$(curl -s -b "$COOKIE" -L -w "\n%{http_code}" \
    -X POST "$BASE/emprestimos/editar.php?id=$EMP_ATR_ID" \
    -d "csrf_token=$CSRF_ATR&data_devolucao_efetiva=$(date +%Y-%m-%d)&observacao=Devolucao atrasada")

ATR_STATUS=$(docker exec lab_hardware_db mysql -u lab_user -p'lab_password' lab_hardware -N -e "SELECT status FROM emprestimos WHERE id=$EMP_ATR_ID;" 2>/dev/null | tail -1)
if [ "$ATR_STATUS" = "atrasado" ]; then
    check "PASS" "Devolucao com data atrasada gerou status 'atrasado'"
else
    check "FAIL" "Status e '$ATR_STATUS' (esperado 'atrasado')"
fi

# --- Teste 7: Relatorio de atrasados ---
echo ""
echo "--- Teste 7: Relatorio de atrasados ---"
ATRASADOS_PAGE=$(curl -s -b "$COOKIE" "$BASE/emprestimos/atrasados.php")
if echo "$ATRASADOS_PAGE" | grep -q "Multimetro Digital"; then
    check "PASS" "Relatorio de atrasados mostra emprestimo atrasado"
else
    check "FAIL" "Relatorio de atrasados nao mostra emprestimo esperado"
fi

# --- Teste 8: Filtros na listagem ---
echo ""
echo "--- Teste 8: Filtros na listagem ---"
FILTRO_RESP=$(curl -s -b "$COOKIE" "$BASE/emprestimos/listar.php?status=devolvido")
if echo "$FILTRO_RESP" | grep -q "Devolvido"; then
    check "PASS" "Filtro por status 'devolvido' funciona"
else
    check "FAIL" "Filtro por status nao funcionou"
fi

# Verificar que nao mostra pendentes no filtro devolvido
if echo "$FILTRO_RESP" | grep -q "Pendente"; then
    check "FAIL" "Filtro por devolvido mostrou itens pendentes"
else
    check "PASS" "Filtro por devolvido nao mostra pendentes"
fi

# --- Teste 9: XSS prevention ---
echo ""
echo "--- Teste 9: XSS prevention ---"
CSRF_XSS=$(curl -s -b "$COOKIE" "$BASE/emprestimos/cadastrar.php" | grep -oP 'name="csrf_token" value="\K[^"]+')
XSS_RESP=$(curl -s -b "$COOKIE" -L \
    -X POST "$BASE/emprestimos/cadastrar.php" \
    -d "csrf_token=$CSRF_XSS&usuario_id=1&equipamento_id=3&data_prevista=2026-06-01&observacao=<script>alert('xss')</script>")
if echo "$XSS_RESP" | grep -q "&lt;script&gt;"; then
    check "PASS" "XSS escapado corretamente (script exibido como texto)"
else
    if echo "$XSS_RESP" | grep -q "<script>alert"; then
        check "FAIL" "XSS NAO escapado - script pode ser executado"
    else
        check "PASS" "XSS tratado (nao encontrou script raw)"
    fi
fi

# --- Teste 10: Responsividade mobile (verificar viewport meta) ---
echo ""
echo "--- Teste 10: Responsividade mobile ---"
if echo "$CADASTRAR_PAGE" | grep -q 'viewport'; then
    check "PASS" "Meta viewport presente na pagina de cadastro"
else
    check "FAIL" "Meta viewport ausente"
fi

if echo "$LISTAR_PAGE" | grep -q 'table-responsive'; then
    check "PASS" "Tabela com container responsivo"
else
    check "FAIL" "Tabela sem container responsivo"
fi

# --- Resumo ---
echo ""
echo "=========================================="
echo "RESUMO: $PASS/$TOTAL passaram, $FAIL falharam"
echo "=========================================="

# Cleanup
rm -f "$COOKIE"

exit $FAIL
