# Tarefa: Módulo de Empréstimos — Fase 1 (Listar + Cadastrar)

## Issue Alvo
LIM-41 / LIM-42 / LIM-43 (Módulo Empréstimos)

## Agente Responsável
Dev Full Stack Local

## Prioridade
ALTA — funcionalidade essencial pendente após CRUD de itens

## Estudo Técnico
`docs/estudos/LIM-73-estudo.md` (já existe, completo)

## Escopo da Fase 1 (segura e testável)

### 1. Tela de Listagem — `src/emprestimos/listar.php`
- Tabela paginada (10 por página) com colunas:
  - ID, Usuário, Equipamento, Data Empréstimo, Data Prevista Devolução, Status, Ações
- Filtros: busca por usuário/equipamento, filtro por status (pendente/devolvido/atrasado)
- Indicador visual para empréstimos atrasados (badge vermelho)
- Botão "Novo Empréstimo" → cadastrar.php
- Botão "Empréstimos Atrasados" → atrasados.php (futuro)

### 2. Tela de Cadastro — `src/emprestimos/cadastrar.php`
- Formulário com campos:
  - Select de usuários (apenas ativos)
  - Select de equipamentos (apenas disponíveis)
  - Data prevista de devolução (date picker, mínimo = hoje)
  - Observações (textarea, opcional)
- Validações:
  - Usuário e equipamento obrigatórios
  - Equipamento deve estar com status "disponivel"
  - Prevenção de empréstimo duplicado (mesmo equipamento já emprestado)
  - Data prevista não pode ser no passado
- Proteção: auth + CSRF (reutilizar `config/auth.php` e `config/csrf.php`)
- Após sucesso: redirect para listar.php com flash message

### 3. Banco de Dados
- Tabela `emprestimos` já existe no init.sql
- Colunas esperadas: id, usuario_id, equipamento_id, data_emprestimo, data_prevista_devolucao, data_devolucao, status, observacoes, criado_em
- Verificar estrutura via `docker exec lab_hardware_db mysql -u root -p$MYSQL_ROOT_PASSWORD lab_hardware -e "DESCRIBE emprestimos;"`

## Critérios de Aceite
1. `src/emprestimos/listar.php` acessível e exibe empréstimos existentes
2. `src/emprestimos/cadastrar.php` cria empréstimo válido
3. Rejeita empréstimo com equipamento indisponível
4. Rejeita empréstimo duplicado do mesmo equipamento
5. Proteção auth + CSRF funcional
6. Prepared statements em todas as queries
7. Output HTML com `htmlspecialchars()`
8. Interface responsiva com Bootstrap 5

## Riscos
- FK constraints podem rejeitar inserts se usuários/equipamentos não existirem
- Status do equipamento deve ser atualizado para "emprestado" após empréstimo (transação)

## Agente de Revisão
- Executor Segurança Offline: revisar SQL injection, XSS, CSRF
- CEO Técnico Local: aprovação final

## Próxima Fase (após Fase 1 concluída)
- `editar.php` — edição + registro de devolução
- `atrasados.php` — relatório de empréstimos atrasados
- Atualização automática de status do equipamento
