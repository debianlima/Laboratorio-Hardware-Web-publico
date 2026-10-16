# Auditoria LIM-122 — Auditoria periódica de segurança defensiva

**Agente:** Executor Segurança Offline
**Data:** 2026-05-19
**Commit base analisado:** HEAD (main)

## Metodologia

Revisão manual de todas as páginas PHP, configurações Docker, `.env.example`, permissões, logs e geração de QR Code. Referência: OWASP Top 10 2021, CHECKLIST_AUDITORIA.md.

---

## Sumário Executivo

- **SQL Injection:** ✅ Nenhum risco — prepared statements em todas as queries.
- **XSS (Reflected/Stored):** ✅ Nenhum risco — `htmlspecialchars(..., ENT_QUOTES)` em toda saída HTML.
- **CSRF:** ❌ **CRÍTICO** — NENHUM formulário possui token CSRF.
- **Autenticação/Autorização:** ❌ **CRÍTICO** — NENHUMA página protegida verifica autenticação.
- **Sessões:** ⚠️ MÉDIO — session ID não regenerada após login; sem cookie flags.
- **Senhas:** ✅ Armazenadas com `password_hash`/`password_verify` (bcrypt).
- **QR Code:** ✅ URL pública sem secrets embutidos.
- **Docker:** ⚠️ MÉDIO — container roda como root; senhas default no .env.example.
- **Arquivos sensíveis:** ✅ .env no .gitignore; sem secrets commitados.

---

## Lista de Riscos

### Críticos

#### C-01: Ausência de verificação de autenticação em todas as páginas protegidas

| Campo | Valor |
|-------|-------|
| **Arquivos** | `src/index.php`, `src/itens/listar.php`, `src/itens/cadastrar.php`, `src/itens/editar.php`, `src/itens/ver.php`, `src/itens/excluir.php`, `src/itens/qrcode.php`, `src/logout.php` |
| **Impacto** | Qualquer pessoa — autenticada ou não — pode listar, cadastrar, editar, visualizar, excluir itens. A página de login é a única barreira, mas não há verificação de `$_SESSION['user_id']` nas demais páginas. |
| **Evidência** | Nenhum arquivo em `src/` ou `src/itens/` contém `if (!isset($_SESSION['user_id']))` ou equivalente. `session_start()` é chamado, mas o valor da sessão nunca é validado. |
| **Recomendação** | Adicionar verificação no topo de cada página protegida: `if (!isset($_SESSION['user_id'])) { header('Location: /login.php'); exit; }`. Idealmente criar um middleware `require_auth.php` incluído em todas as páginas. |
| **Prioridade** | **Crítica** — Correção imediata |

#### C-02: Ausência de proteção CSRF em todos os formulários POST

| Campo | Valor |
|-------|-------|
| **Arquivos** | `src/itens/cadastrar.php`, `src/itens/editar.php`, `src/itens/excluir.php` |
| **Impacto** | Atacante pode induzir usuário autenticado a criar, editar ou excluir itens sem consentimento (via link malicioso, imagem, etc.). |
| **Evidência** | Nenhum dos formulários POST gera ou valida token CSRF. `excluir.php` é acessível via POST sem token. O formulário de exclusão em `listar.php` (linha 184) não contém `<?= csrf_token() ?>`. |
| **Recomendação** | Implementar token CSRF por sessão: gerar `$_SESSION['csrf_token']` no login, inserir hidden field em cada formulário, validar antes de processar POST. |
| **Prioridade** | **Crítica** — Correção imediata |

### Altos

#### A-01: Logout sem CSRF — permite logout forçado (CSRF Logout)

| Campo | Valor |
|-------|-------|
| **Arquivo** | `src/logout.php` |
| **Impacto** | Atacante pode forçar logout do usuário via GET request (imagem, link). Usuário precisa reautenticar. Não causa perda de dados, mas é vetor de negação de serviço. |
| **Evidência** | `logout.php` aceita GET (qualquer método), sem token, sem verificação. |
| **Recomendação** | Restringir logout a POST com token CSRF, ou ao menos com double-submit cookie pattern. Ou alterar para link POST via formulário. |
| **Prioridade** | **Alta** |

### Médias

#### M-01: Session ID não regenerada após login

| Campo | Valor |
|-------|-------|
| **Arquivo** | `src/login.php` |
| **Impacto** | Session fixation: atacante que obtém session ID antes do login pode sequestrar a sessão após autenticação. |
| **Evidência** | `login.php` linha 26-30: após `password_verify()` bem-sucedido, não há `session_regenerate_id(true)`. |
| **Recomendação** | Adicionar `session_regenerate_id(true)` imediatamente após `$_SESSION['user_id'] = $user['id'];`. |
| **Prioridade** | **Média** |

#### M-02: Session cookie sem flags HttpOnly / Secure / SameSite

| Campo | Valor |
|-------|-------|
| **Arquivo** | `src/login.php`, todas as páginas com `session_start()` |
| **Impacto** | Cookie de sessão acessível via JavaScript (XSS → session hijacking). Sem flag Secure, cookie enviado em HTTP (não apenas HTTPS). Sem SameSite, vulnerável a CSRF. |
| **Evidência** | Nenhuma chamada a `session_set_cookie_params()` ou `ini_set()` configurando `session.cookie_httponly`, `session.cookie_secure`, `session.cookie_samesite`. |
| **Recomendação** | Configurar antes de `session_start()` no login: `session_set_cookie_params(['httponly' => true, 'secure' => true, 'samesite' => 'Strict', 'lifetime' => 1800])`. |
| **Prioridade** | **Média** |

#### M-03: Sem timeout de sessão configurado

| Campo | Valor |
|-------|-------|
| **Arquivo** | Todas as páginas |
| **Impacto** | Sessão permanece ativa indefinidamente (até browser fechar ou cookie expirar por padrão do PHP). Aumenta janela de ataque. |
| **Evidência** | Nenhuma configuração de `session.gc_maxlifetime` ou `session.cookie_lifetime` encontrada. |
| **Recomendação** | Configurar `session.gc_maxlifetime = 1800` (30 min) e `session.cookie_lifetime = 0` (session cookie). |
| **Prioridade** | **Média** |

#### M-04: Container Docker roda como root

| Campo | Valor |
|-------|-------|
| **Arquivo** | `Dockerfile` |
| **Impacto** | Se aplicação for comprometida, atacante tem acesso root no container. |
| **Evidência** | Dockerfile linha 18: `chown -R www-data:www-data /var/www/html`, mas não há `USER www-data` após essa linha. Apache é executado como root. |
| **Recomendação** | Adicionar `USER www-data` ao final do Dockerfile. |
| **Prioridade** | **Média** |

#### M-05: Login sem rate limiting

| Campo | Valor |
|-------|-------|
| **Arquivo** | `src/login.php` |
| **Impacto** | Atacante pode tentar senhas em massa (brute force) sem bloqueio ou delay. |
| **Evidência** | Nenhum mecanismo de rate limit (tentativas por IP, captcha, delay progressivo). |
| **Recomendação** | Implementar rate limit: armazenar tentativas por IP em tabela ou cache, bloquear após N falhas em X minutos. |
| **Prioridade** | **Média** |

### Baixos

#### B-01: Flash message type usado diretamente como classe CSS

| Campo | Valor |
|-------|-------|
| **Arquivo** | `src/config/flash.php` linha 17 |
| **Impacto** | Se desenvolvedor passar input do usuário como `$tipo`, permite XSS via classe CSS. Atualmente não há vetor, pois `$tipo` é sempre string fixa do código. Risco futuro. |
| **Evidência** | `echo "<div class='alert alert-{$tipo} mb-3'>{$mensagem}</div>";` — `$tipo` não passa por validação de whitelist. |
| **Recomendação** | Validar `$tipo` contra whitelist de tipos permitidos (`['info', 'success', 'warning', 'danger']`). |
| **Prioridade** | **Baixa** |

#### B-02: Senhas default no .env.example

| Campo | Valor |
|-------|-------|
| **Arquivo** | `.env.example` |
| **Impacto** | Se alguém copiar `.env.example` → `.env` sem alterar senhas, o banco fica acessível com credenciais previsíveis. |
| **Evidência** | Linhas 18-21: `DB_PASS=lab_password`, `MYSQL_ROOT_PASSWORD=root_secret`. |
| **Recomendação** | Documentar explicitamente a obrigatoriedade de trocar senhas. Opcional: gerar senha randômica via script de setup. |
| **Prioridade** | **Baixa** |

#### B-03: Erro PDOException sem tratamento detalhado pode vazar info

| Campo | Valor |
|-------|-------|
| **Arquivo** | `src/config/db.php` linha 52-53 |
| **Impacto** | Em produção com `display_errors=On`, exception pode vazar detalhes do banco. Atualmente capturado com `return null`, mitigado. |
| **Evidência** | `catch (Exception $e) { return null; }` — a exception é silenciada, mas em configurações de dev pode vazar. |
| **Recomendação** | Garantir que `display_errors = Off` e `mysqli_report(MYSQLI_REPORT_OFF)` em produção. |
| **Prioridade** | **Baixa** |

---

## Checklist de Segurança (CHECKLIST_AUDITORIA.md)

| Item | Status | Notas |
|------|--------|-------|
| 1.1 SQL Injection | ✅ OK | Prepared statements em todas as queries |
| 1.2 XSS | ✅ OK | `htmlspecialchars()` em toda saída |
| 1.3 CSRF | ❌ Falha | Nenhum token CSRF implementado |
| 1.4 Autenticação e Sessão | ❌ Falha | Nenhuma página verifica login; session ID não regenerada |
| 1.5 Validação de Entrada | ⚠️ Parcial | `filter_var` usado em ver.php/qrcode.php; demais usam `trim()` sem type validation |
| 2.1 Configuração DB | ✅ OK | Credenciais em .env, não no código |
| 3.1 Dockerfile | ⚠️ Parcial | Container roda como root |
| 3.2 Container | ⚠️ Parcial | Sem USER directive |
| 3.3 Docker Compose | ✅ OK | .env no .gitignore, network isolada |
| 4.1 Arquivos Sensíveis | ✅ OK | .env no .gitignore |
| 4.3 Headers HTTP | ❌ Ausente | Nenhum security header configurado |
| 5.1 CRUD Itens | ❌ Falha | Sem auth, sem CSRF |

---

## Boas Práticas Confirmadas

- ✅ Prepared statements em TODAS as queries SQL (nenhuma concatenação de input).
- ✅ `htmlspecialchars($var, ENT_QUOTES)` em toda saída HTML.
- ✅ Senhas com `password_hash`/`password_verify` (bcrypt).
- ✅ `.env` no `.gitignore` — nenhuma credencial no repositório.
- ✅ `filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT)` em `ver.php` e `qrcode.php`.
- ✅ QR Code gera URL pública sem secrets/tokens/senhas.
- ✅ Validação de status contra whitelist (`array_key_exists($status, $statusLabels)`).
- ✅ Verificação de unicidade do código de patrimônio antes de cadastrar.
- ✅ Conexão com charset `utf8mb4` (mitiga charset-based attacks).
- ✅ Docker compose com rede isolada e healthcheck no MySQL.

---

## Recomendações Prioritárias

### Imediatas (correção em minutos)

1. **Adicionar verificação de autenticação** — Criar `src/config/auth.php`:
   ```php
   <?php
   function requererLogin() {
       if (!isset($_SESSION['user_id'])) {
           header('Location: /login.php');
           exit;
       }
   }
   ```
   Incluir `requererLogin()` após `session_start()` em: `index.php`, `listar.php`, `cadastrar.php`, `editar.php`, `ver.php`, `excluir.php`, `qrcode.php`.

2. **Adicionar token CSRF** — Criar `src/config/csrf.php`:
   ```php
   <?php
   function gerarTokenCSRF() {
       if (empty($_SESSION['csrf_token'])) {
           $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
       }
       return $_SESSION['csrf_token'];
   }
   function validarTokenCSRF($token) {
       return hash_equals($_SESSION['csrf_token'] ?? '', $token);
   }
   ```
   Adicionar hidden field nos formulários e validar antes de processar POST.

3. **Regenerar session ID no login** — Adicionar `session_regenerate_id(true)` em `login.php:27`.

### Curto prazo (próximos dias)

4. **Configurar cookie de sessão** — Adicionar no início de todas as páginas ou em um `init.php`:
   ```php
   session_set_cookie_params([
       'lifetime' => 1800,
       'path' => '/',
       'domain' => '',
       'secure' => true,
       'httponly' => true,
       'samesite' => 'Strict'
   ]);
   ```

5. **Adicionar USER www-data no Dockerfile** após `chown`.

6. **Rate limiting no login** — Implementar contagem de tentativas por IP.

---

## Observação sobre docs/security-checklist.md

O arquivo `docs/security-checklist.md` existente no repositório descreve um estado **aspiracional** (o que deveria existir), não a realidade atual do código:
- Afirma que CSRF existe → ❌ não existe.
- Afirma que autenticação é verificada → ❌ não é.
- Afirma que sessão expira em 30 min → ❌ não configurado.
- Afirma que session ID é regenerado no login → ❌ não ocorre.

**Recomendação:** Atualizar o checklist para refletir o estado real e vincular as correções necessárias.

---

## Conclusão

O código PHP utiliza boas práticas de SQL Injection (prepared statements) e XSS (`htmlspecialchars`), o que elimina as duas vulnerabilidades mais comuns em aplicações PHP.

**Porém, existem duas falhas críticas que expõem todo o sistema:**

1. **Ausência total de controle de autenticação** — Qualquer pessoa pode acessar e modificar dados.
2. **Ausência total de proteção CSRF** — Qualquer ação POST pode ser forjada.

Essas duas falhas, juntas, significam que um atacante que convence um usuário logado a visitar uma página maliciosa pode **criar, editar e excluir itens** sem autorização.

**Recomendação final:** Aplicar correções imediatas (auth + CSRF) e depois avançar com as correções de médio prazo.

---

*Relatório gerado pelo Executor Segurança Offline para LIM-122.*
