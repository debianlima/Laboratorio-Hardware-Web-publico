# Requisitos de referência — módulo de empréstimos

> Reconstruído apenas a partir da referência histórica a `LIM-129`, `LIM-132`, `LIM-43` e ao commit `85f5e31`. Os detalhes funcionais completos devem ser recuperados das issues originais.

## Objetivo

Documentar e validar o fluxo de empréstimos do sistema Laboratório de Hardware 2025.

## Requisitos que precisam ser confirmados

- [ ] Cadastro/identificação do item emprestado.
- [ ] Identificação de responsável e usuário.
- [ ] Registro de data/hora de retirada e devolução.
- [ ] Estado do empréstimo e tratamento de atraso/cancelamento.
- [ ] Validação de disponibilidade e prevenção de duplicidade.
- [ ] Histórico auditável das operações.
- [ ] Controle de acesso por perfil.
- [ ] Tratamento de erro e mensagens ao usuário.
- [ ] Testes de integração e regressão.

**Nota:** a lista acima é um checklist proposto, não uma transcrição dos requisitos originais.

## Evidência histórica conhecida

- Issue associada à implementação: `LIM-129`.
- Commit mencionado: `85f5e31`.
- Referências de continuidade/teste: `LIM-132` e `LIM-43`.

## Critérios de aceite — preencher após consultar a issue

1. Fluxo de criação validado.
2. Fluxo de devolução validado.
3. Regras de disponibilidade testadas.
4. Permissões verificadas.
5. Testes de regressão aprovados.
6. Diff, commit e resultado associados à issue.
