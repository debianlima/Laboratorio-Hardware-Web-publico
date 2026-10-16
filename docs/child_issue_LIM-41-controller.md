# Child Issue Spec — LIM-41-controller (Controller Empréstimos)

**Parent:** LIM-76 → Sprint 3
**Tipo:** Implementação
**Agente:** Dev Full Stack Local
**Prioridade:** ALTA

## Objetivo
Implementar o Controller de Empréstimos consumindo o Model LIM-42.

## Tarefas
1. Criar `src/controllers/EmprestimosController.php`
2. Implementar actions: index, create, store, show, edit, update, destroy, devolver
3. Definir rotas em `src/routes.php`
4. Validar entrada de dados
5. Tratar erros e exceções

## Critérios de Aceite
- [ ] Controller criado com todas as actions
- [ ] Rotas definidas e funcionais
- [ ] Validação de entrada implementada
- [ ] Testes de integração passando

## Dependências
- LIM-42 (Model Emprestimo) — DEVE estar concluído primeiro
