# LIM-82 — Dev Ocioso: Próxima Tarefa Definida

## Contexto
- **Data**: 2026-05-19
- **Issue**: LIM-82 — CEO — Verificar Dev ocioso e propor próxima tarefa
- **CEO Técnico Local**: verificou status de todos os agentes
- **Resultado**: Dev Full Stack Local OCIOSO — sem issue de implementação atribuída

## Dev Full Stack Local — Próxima Tarefa

### Tarefa Prioritária: Módulo Empréstimos (LIM-41/42/43)

**Agente**: Dev Full Stack Local / Ollama
**Prioridade**: ALTA
**Status**: Pronto para execução (specs completas)

### Ordem de Execução

#### Fase 1: Model (LIM-42)
1. Criar `src/models/Emprestimo.php`
2. Métodos: `criar()`, `listar()`, `devolver()`, `historico()`
3. Usar prepared statements (padrão do projeto)
4. Seguir estilo de `src/config/db.php` para conexão

#### Fase 2: Controller (LIM-41)
1. Criar `src/controllers/EmprestimosController.php`
2. Actions: index, create, store, show, edit, update, destroy, devolver
3. Definir rotas em `src/routes.php` (se existir) ou usar padrão de URLs diretas

#### Fase 3: Views (LIM-43)
1. `src/emprestimos/listar.php` — lista com filtros (status, usuário, equipamento)
2. `src/emprestimos/cadastrar.php` — formulário de novo empréstimo
3. `src/emprestimos/editar.php` — edição/devolução
4. `src/emprestimos/atrasados.php` — relatório de atrasados

### Referências Técnicas
- **Schema DB**: tabela `emprestimos` já existe (init.sql)
  - Colunas: id, usuario_id, equipamento_id, data_emprestimo, data_devolucao, status (pendente/devolvido/atrasado), observacao
  - Foreign keys: usuarios(id), equipamentos(id)
- **Padrão de código**: seguir `src/itens/listar.php` como referência de estilo
- **Requisitos completos**: `REQ_EMPRESTIMOS_MODULE.md`
- **Specs detalhadas**: `docs/child_issue_LIM-41-controller.md`, `docs/child_issue_LIM-42-model.md`
- **DB credentials**: DB_HOST=localhost, DB_PORT=3306, DB_NAME=lab_hardware, DB_USER=lab_user, DB_PASS=lab_password (via .env ou docker-compose)

### Critérios de Aceite
- [ ] CRUD completo de empréstimos funcional
- [ ] Validação: equipamento não pode estar emprestado com status pendente
- [ ] Validação: usuário e equipamento devem existir
- [ ] Status atualizado automaticamente ao registrar devolução
- [ ] Relatório de atrasados funcional
- [ ] Interface mobile-first (padrão do projeto)
- [ ] Prepared statements em todas as queries SQL
- [ ] htmlspecialchars em todas as saídas HTML

### Tarefas Secundárias (se houver tempo)
1. **Revisão de segurança** → Executor Segurança Offline (OWASP Top 10 em `src/itens/`)
2. **Keyword Abstract** → OpenCode Free (corrigir "Federal Institute" em `docs/artigo.html` linha 387)

## Barreira
- **Paperclip API offline** (129.80.26.136:3100) — impede atualização automática do board
- **Ação humana necessária**: atribuir LIM-41/42/43 ao Dev Full Stack Local quando Paperclip voltar

## Disposição LIM-82: DONE
- Verificação de Dev ocioso: COMPLETA
- Próxima tarefa definida: Módulo Empréstimos (specs prontas)
- Handoff documentado: este arquivo
