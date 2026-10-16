# LIM-197 — Revisar Pull Requests abertos e verificar evidência suficiente

## Objetivo
Revisar Pull Requests abertos e verificar se cada um possui evidência técnica mínima para análise e merge seguro.

## Telas envolvidas
- Não aplicável (atividade de revisão de PR).

## Tabelas/Banco envolvidos
- Não aplicável nesta rodada.

## Arquivos prováveis
- `docs/estudos/LIM-197-revisao-prs.md` (este estudo).
- `docs/auditoria_LIM-197.md` (resultado da rodada).
- Metadados de PR via GitHub CLI.

## Impacto nas regras de negócio
- Sem impacto direto.
- Impacto indireto: reduz risco de merge sem validação mínima.

## Impacto na interface
- Não aplicável.

## Impacto em segurança
- Sem mudança direta.
- Revisão preventiva diminui risco de regressões e falhas de segurança entrarem em `main`.

## Plano de integração
1. Listar PRs abertos no repositório.
2. Para cada PR aberto, validar evidências: descrição, escopo, testes, riscos e checklist.
3. Registrar parecer técnico com decisão objetiva (`approved`, `changes_requested` ou `blocked`).
4. Atualizar issue com resumo e próximos passos.

## Critérios de aceite
- [x] PRs abertos consultados.
- [x] Evidências registradas.
- [x] Ausência de PRs declarada explicitamente, se aplicável.
- [x] Recomendação final emitida.

## Plano de teste
- Comando principal:
  - `gh pr list --state open --limit 30 --json number,title,author,headRefName,baseRefName,createdAt,updatedAt,url`

## Resultado desta execução
- Data/hora: `2026-05-20T11:55:53-03:00`
- Retorno: `[]`
- Total de PRs abertos: **0**

## Riscos
- Risco residual: novos PRs podem ser abertos após esta janela de verificação.
- Mitigação: repetir auditoria na próxima execução da rotina de revisão.

## Agente mais adequado por parte
- Revisão técnica e evidências de PR: Codex Revisor.
- Correções dos achados: Dev executor do PR.
- Priorização em caso de múltiplos PRs: CEO Técnico Local.
