# Revisao LIM-104 — Revisar artigo academico do projeto

Data: 2026-05-19
Arquivo revisado: `docs/artigo.html`

## Escopo verificado

1. Existencia do artigo HTML canonico.
2. Presenca da estrutura academica minima pedida pela issue.
3. Integridade das ilustracoes e referencias visuais do proprio HTML.
4. Coerencia entre o artigo e o estado funcional descrito no repositorio.
5. Divergencias com `README.md`, `AGENTS.md`, `CHECKLIST_AUDITORIA.md`, `PENDENCIAS.md` e `BACKLOG_MOBILE_FIRST.md`.
6. Risco de exposicao de dados sensiveis.
7. Clareza para acompanhamento academico.

## Evidencias objetivas

- O artigo existe e segue como artefato canonico: `docs/artigo.html:311`.
- A estrutura academica minima esta presente:
  - resumo e palavras-chave: `docs/artigo.html:349`, `docs/artigo.html:365`
  - abstract e keywords: `docs/artigo.html:370`, `docs/artigo.html:386`
  - introducao e objetivos: `docs/artigo.html:391`, `docs/artigo.html:407`
  - metodologia: `docs/artigo.html:444`
  - arquitetura: `docs/artigo.html:533`
  - prototipos/telas: `docs/artigo.html:336`, `docs/artigo.html:889`
  - banco de dados: `docs/artigo.html:1001`
  - atividades realizadas: `docs/artigo.html:479`
  - proximos passos: `docs/artigo.html:342`
  - pendencias: `docs/artigo.html:1490`
  - conclusao: `docs/artigo.html:344`, `docs/artigo.html:1516`
- As figuras principais estao embutidas como SVG inline, sem dependencia de arquivos externos quebrados: `docs/artigo.html:554`, `docs/artigo.html:602`, `docs/artigo.html:649`, `docs/artigo.html:710`, `docs/artigo.html:815`, `docs/artigo.html:1011`, `docs/artigo.html:1399`.
- O conteudo funcional continua coerente com o projeto descrito no workspace:
  - stack PHP/MySQL/Docker: `docs/artigo.html:358`, `docs/artigo.html:474`, `docs/artigo.html:589`
  - autenticacao e CRUD de itens concluidos: `docs/artigo.html:1190`, `docs/artigo.html:1466`, `docs/artigo.html:1467`
  - emprestimos em andamento: `docs/artigo.html:1468`, `docs/artigo.html:1506`
  - agendamentos e relatorios ainda pendentes/parciais: `docs/artigo.html:1213`, `docs/artigo.html:1469`, `docs/artigo.html:1470`, `docs/artigo.html:1507`
- Nao foram encontrados tokens, senhas em claro, chaves privadas, `.env` exposto ou URLs privadas no artigo. As ocorrencias de "senha" referem-se a descricao de esquema ou requisito de seguranca com bcrypt: `docs/artigo.html:502`, `docs/artigo.html:1089`, `docs/artigo.html:1190`.

## Achado desta rodada

1. **Medio — nota de divergencia do artigo esta parcialmente desatualizada**
- Evidencia no artigo: `docs/artigo.html:1494-1505`
- Evidencia no workspace atual: `CHECKLIST_AUDITORIA.md` existe na raiz; `BACKLOG_MOBILE_FIRST.md` continua ausente.
- Impacto: o artigo continua utilizavel academicamente, mas a tabela de pendencias nao reflete com precisao o estado documental atual do repositorio.
- Recomendacao: abrir no maximo uma tarefa textual leve para ajustar a secao 17 de `docs/artigo.html`, marcando `CHECKLIST_AUDITORIA.md` como presente e mantendo `BACKLOG_MOBILE_FIRST.md` como ausente ate sua eventual criacao.

## Parecer

O artigo esta completo o suficiente para acompanhamento por professor e alunos, possui estrutura academica minima, referencias visuais autocontidas e nao apresenta exposicao sensivel evidente. A unica divergencia objetiva desta rodada e documental e localizada na secao de pendencias.

## Disposicao recomendada

- LIM-104: `in_review`
- Revisor final: humano/orientador academico
- Acao opcional posterior: uma tarefa leve de ajuste textual no artigo, sem bloquear a revisao
