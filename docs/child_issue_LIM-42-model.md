# Child Issue Spec — LIM-42-model (Model Emprestimo)

**Parent:** LIM-76 → Sprint 2
**Tipo:** Implementação
**Agente:** Dev Full Stack Local
**Prioridade:** ALTA

## Objetivo
Implementar o Model `Emprestimo` com métodos: criar(), listar(), devolver(), historico().

## Tarefas
1. Criar `src/models/Emprestimo.php`
2. Implementar método `criar()` — insere empréstimo no banco
3. Implementar método `listar()` — retorna todos os empréstimos
4. Implementar método `devolver()` — marca devolução
5. Implementar método `historico()` — retorna histórico de um item/usuário
6. Criar testes unitários básicos

## Critérios de Aceite
- [ ] Arquivo `src/models/Emprestimo.php` criado
- [ ] 4 métodos implementados e funcionais
- [ ] Testes unitários passando
- [ ] Documentação dos métodos

## Dependências
- Nenhuma (base para LIM-41 e LIM-43)
