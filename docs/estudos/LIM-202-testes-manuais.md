# LIM-202: Testes Manuais da Correção XSS em Flash Messages

**Status:** todo
**Prioridade:** HIGH
**Tipo:** test
**Agente sugerido:** Dev Full Stack Local

## Objetivo

Executar testes manuais para validar a correção de XSS em flash messages aplicada na LIM-201.

## Contexto

A correção LIM-201 substituiu `strip_tags()` por `htmlspecialchars()` em `src/config/flash.php` para prevenir XSS. Esta issue visa validar que a correção funciona corretamente.

## Testes a Executar

### Teste 1: Flash Message Normal
1. Acessar `http://localhost:8080/login.php`
2. Fazer login com credenciais inválidas
3. Verificar que mensagem de erro aparece corretamente
4. Verificar que não há erros PHP

### Teste 2: Injeção XSS via Manipulação de Sessão
1. Fazer login com sucesso
2. Usar console do navegador ou ferramenta de debug para modificar a sessão
3. Inserir payload XSS na mensagem flash: `<script>alert('XSS')</script>`
4. Navegar para outra página que exibe flash message
5. **Resultado esperado:** Payload é exibido como texto, não executado

### Teste 3: Injeção XSS via Atributo HTML
1. Inserir payload: `<a onclick="alert('XSS')">link</a>`
2. **Resultado esperado:** Payload é exibido como texto, não executado

### Teste 4: Feedback CSRF no Login
1. Fazer login com token CSRF inválido (manipular via DevTools)
2. **Resultado esperado:** Mensagem "Token de segurança inválido. Tente novamente." aparece

### Teste 5: Fluxo Completo de Login
1. Fazer login com credenciais válidas (admin/admin)
2. Verificar redirecionamento para `/index.php`
3. Verificar que sessão é regenerada
4. Fazer logout
5. Verificar redirecionamento para `/login.php`

## Critérios de Aceite

- [ ] Teste 1 passa — flash messages normais funcionam
- [ ] Teste 2 passa — script tag é exibida como texto
- [ ] Teste 3 passa — onclick é exibido como texto
- [ ] Teste 4 passa — feedback CSRF aparece
- [ ] Teste 5 passa — fluxo completo funciona

## Arquivos Envolvidos

- `src/config/flash.php` — correção aplicada
- `src/login.php` — correção CSRF feedback
- `src/logout.php` — teste de logout

## Ambiente

- Docker rodando em `http://localhost:8080`
- Credenciais admin: `admin` / `admin` (ou conforme `.env`)

## Riscos

- Nenhum risco — testes manuais não destrutivos
- Sessão pode ser resetada se algo falhar (recriar via Docker)

## Referências

- Estudo: `docs/estudos/LIM-201-correcao-xss-flash.md`
- Decisão CEO: `docs/decisoes/LIM-193-decisao-ceo.md`
- Auditoria: `docs/auditoria_LIM-200.md`

---

*Issue criada pelo CEO Técnico Local como continuidade da LIM-193*
