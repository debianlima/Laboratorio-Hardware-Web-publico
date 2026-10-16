# Checklist de Auditoria — Lab Hardware 2025

> Checklist de segurança e auditoria para o projeto Laboratório de Hardware 2025.
> Referência: OWASP Top 10, OWASP ASVS, boas práticas PHP/MySQL/Docker.

## 1. Segurança de Código PHP

### 1.1 SQL Injection
- [x] Todas as queries usam prepared statements (MySQLi bind_param) — ✅ Verificado LIM-200
- [x] Nenhum input é concatenado diretamente na query — ✅ Verificado LIM-200
- [x] Validação de tipo para parâmetros numéricos (bind_param + filter_var) — ✅ Verificado LIM-200
- [ ] LIMIT e OFFSET validados como inteiros — não implementado (sem paginação real)

### 1.2 XSS (Cross-Site Scripting)
- [x] Todo output HTML usa `htmlspecialchars($var, ENT_QUOTES, 'UTF-8')` — ✅ Verificado LIM-200
- [x] Atributos HTML escapados corretamente — ✅ Verificado LIM-200
- [x] URLs externas validadas antes de renderizar — ✅ Verificado LIM-200
- [x] JavaScript não recebe dados do servidor sem sanitização — ✅ Verificado LIM-200
- [ ] Content-Security-Policy header configurado — pendente
- [ ] ⚠️ `strip_tags` em flash messages (`src/config/flash.php:20`) permite injeção de atributos — ACHADO ALTO LIM-200

### 1.3 CSRF (Cross-Site Request Forgery)
- [x] Formulários possuem token CSRF — ✅ Verificado LIM-200
- [x] Token validado no servidor antes de processar POST — ✅ Verificado LIM-200
- [x] Token único por sessão (regenerado no login) — ✅ Verificado LIM-200
- [ ] ⚠️ Login sem feedback em falha de CSRF (`src/login.php:34`) — ACHADO BAIXO LIM-200

### 1.4 Autenticação e Sessão
- [x] Senhas armazenadas com `password_hash()` (bcrypt) — ✅ Verificado LIM-200
- [x] Verificação com `password_verify()` — ✅ Verificado LIM-200
- [x] Sessão iniciada com `session_start()` no início de cada página protegida — ✅ Verificado LIM-200
- [x] `session_regenerate_id(true)` após login bem-sucedido — ✅ Verificado LIM-200
- [x] Timeout de sessão configurado (1800s = 30min) — ✅ Verificado LIM-200
- [x] Páginas protegidas verificam autenticação antes de exibir conteúdo — ✅ Verificado LIM-200
- [ ] ⚠️ Rate limiting no login — ACHADO MÉDIO LIM-200
- [ ] ⚠️ Log de tentativas de login — ACHADO BAIXO LIM-200

### 1.5 Validação de Entrada
- [x] Todos os inputs validados no servidor (nunca confiar em validação JS)
- [ ] Tipos de arquivo validados por extensão e MIME type — sem upload implementado
- [ ] Tamanhos máximos de upload configurados e verificados — sem upload implementado
- [x] Inputs numéricos validados com filter_var + bind_param

## 2. Segurança de Banco de Dados

### 2.1 Configuração
- [ ] Credenciais de banco não estão em código fonte
- [ ] Usuário do banco tem privilégios mínimos necessários
- [ ] Acesso ao banco restrito à rede interna (não exposto publicamente)
- [ ] Porta do banco não exposta fora do Docker network

### 2.2 Dados
- [ ] Dados sensíveis não armazenados em texto plano
- [ ] Backups automatizados configurados
- [ ] Migrations versionadas e testadas
- [ ] Dados de teste não contêm informações reais

## 3. Segurança Docker

### 3.1 Imagem
- [x] Dockerfile usa imagem base oficial (`php:8.2-apache`) — ✅ Verificado LIM-200
- [x] Não há instruções RUN com sudo ou root desnecessário — ✅ Verificado LIM-200
- [ ] Dependências instaladas com versão fixa (não latest) — `composer:latest` sem versão fixa
- [x] Arquivos sensíveis (.env, chaves) não incluídos na imagem — ✅ Verificado LIM-200

### 3.2 Container
- [x] Container não roda como root (USER directive) — `chown -R www-data:www-data` ✅ Verificado LIM-200
- [x] Volumes mapeados corretamente (sem expor / ou diretórios sensíveis) — ✅ Verificado LIM-200
- [x] Ports expostos apenas os necessários (80, 3306) — ✅ Verificado LIM-200
- [x] Healthcheck configurado — ✅ Verificado LIM-200 (mas ⚠️ expõe root password no processo)
- [ ] Restart policy definida

### 3.3 Docker Compose
- [x] .env não commitado no repositório — ✅ Verificado LIM-200
- [x] .env.example existe com valores de exemplo — ✅ Verificado LIM-200
- [ ] Secrets não hardcoded no docker-compose.yml — ⚠️ valores default hardcoded (para dev, aceitável)
- [x] Networks isoladas para app e db (bridge) — ✅ Verificado LIM-200

## 4. Configuração e Ambiente

### 4.1 Arquivos Sensíveis
- [x] .env no .gitignore — ✅ Verificado LIM-200
- [x] .env.example existe com estrutura completa — ✅ Verificado LIM-200
- [ ] Nenhum arquivo .env commitado no histórico git (verificar com `git log --all --diff-filter=A -- .env`)
- [x] Chaves de API e tokens não em código fonte — ✅ Verificado LIM-200

### 4.2 Logs
- [x] Logs não contêm senhas, tokens ou dados sensíveis — ✅ Verificado LIM-200
- [ ] ⚠️ Erros não expõem stack trace em produção — `display_errors = On` em php.ini (ACHADO MÉDIO LIM-200)
- [ ] Log de acesso configurado
- [ ] Rotação de logs definida

### 4.3 Headers HTTP
- [ ] Content-Security-Policy configurado — pendente
- [ ] X-Frame-Options: DENY ou SAMEORIGIN — pendente
- [ ] X-Content-Type-Options: nosniff — pendente
- [ ] Strict-Transport-Security (se HTTPS) — pendente
- [ ] X-XSS-Protection: 1; mode=block — pendente

## 5. Funcionalidades do Sistema

### 5.1 CRUD de Itens/Equipamentos
- [ ] Listar: paginação funcional, sem vazamento de dados — sem paginação real
- [x] Cadastrar: validação completa, mensagem de sucesso sem dados sensíveis — ✅ Verificado LIM-200
- [x] Editar: autorização verificada (admin/librarian) — ✅ Verificado LIM-200
- [x] Excluir: confirmação antes de deletar (JS confirm + CSRF + role check) — ✅ Verificado LIM-200
- [x] QR Code: URL gerada aponta para servidor correto, sem dados expostos — ✅ Verificado LIM-200 (⚠️ CDN sem SRI + HTTP_HOST sem validação — ACHADOS BAIXOS)

### 5.2 Módulo Empréstimos
- [x] Validação de datas — ✅ Implementado e verificado LIM-200 (data prevista, data devolução efetiva)
- [x] Verificação de disponibilidade do item antes de emprestar — ✅ Implementado (checa pendente/atrasado)
- [x] Registro de quem emprestou e quando — ✅ Implementado (usuario_id, data_emprestimo)
- [x] Notificação de atrasos — ✅ Implementado (página atrasados.php com DATEDIFF)
- [x] Histórico de empréstimos por item e por usuário — ✅ Implementado (listar.php com JOINs)

### 5.3 Módulo Relatórios (pendente)
- [ ] Acesso restrito a usuários autorizados
- [ ] Dados agregados sem expor informações individuais
- [ ] Exportação segura (CSV, PDF sem dados sensíveis)
- [ ] Filtros validados contra injection

## 6. Testes e Verificação

### 6.1 Testes Manuais
- [ ] Fluxo completo de cadastro testado
- [ ] Fluxo completo de edição testado
- [ ] Fluxo completo de exclusão testado
- [ ] Login/logout testado
- [ ] Acesso negado a páginas protegidas sem login
- [ ] QR Code escaneado corretamente por celular

### 6.2 Testes Automatizados (futuro)
- [ ] Testes unitários para funções críticas
- [ ] Testes de integração para rotas principais
- [ ] Testes de segurança automatizados (OWASP ZAP, etc.)

## 7. Documentação

### 7.1 Documentação Técnica
- [ ] README.md atualizado com instruções de instalação
- [ ] AGENTS.md com agentes corretos e paths válidos
- [ ] Arquitetura documentada (diagramas se necessário)
- [ ] API documentada (se aplicável)

### 7.2 Documentação de Usuário
- [ ] Manual de uso do sistema
- [ ] Guia de instalação e configuração
- [ ] FAQ com problemas comuns

## 8. Deploy e Produção

### 8.1 Pré-deploy
- [ ] Todas as issues de segurança resolvidas
- [ ] Testes manuais completos
- [ ] Backup do banco antes do deploy
- [ ] Rollback plan definido

### 8.2 Pós-deploy
- [ ] Sistema acessível e funcional
- [ ] Logs sem erros críticos
- [ ] Performance aceitável
- [ ] Monitoramento configurado

---

## Como usar este checklist

1. **Antes de cada sprint**: revisar itens relevantes ao escopo
2. **Após cada implementação**: marcar itens concluídos
3. **Antes de deploy**: verificar seção 8 completa
4. **Auditoria mensal**: revisar todo o checklist

## Responsáveis

- **Dev Full Stack**: itens 1, 2, 5, 6
- **Executor Segurança Offline**: itens 1, 2, 3, 4
- **CEO Técnico**: itens 7, 8
- **Humano**: aprovação final antes de deploy

---

*Checklist criado em 2026-05-19 como parte da rotina LIM-92 (Verificar Dev ocioso e propor próxima tarefa).*
*Atualizado em 2026-05-20 — Auditoria LIM-200 concluída com 9 achados (1 alto, 4 médios, 4 baixos).*
