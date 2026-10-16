# Revisao LIM-114 — Revisar artigo academico do projeto

Data: 2026-05-19
Arquivo revisado: `docs/artigo.html`

## Escopo verificado

1. Existencia do artigo HTML canonico.
2. Presenca da estrutura academica minima pedida pela issue.
3. Integridade das ilustracoes e referencias visuais do proprio HTML.
4. Coerencia entre o artigo e o estado funcional descrito no workspace.
5. Divergencias com `README.md`, `AGENTS.md`, `CHECKLIST_AUDITORIA.md` e `PENDENCIAS.md`.
6. Risco de exposicao de dados sensiveis.
7. Clareza para acompanhamento academico por professor e alunos.

## Evidencias objetivas

- O artigo existe e segue como artefato canonico: `docs/artigo.html:311`.
- A estrutura academica minima esta presente:
  - resumo e palavras-chave: `docs/artigo.html:349`, `docs/artigo.html:365`
  - introducao e objetivos: `docs/artigo.html:391`, `docs/artigo.html:407`
  - metodologia: `docs/artigo.html:444`
  - arquitetura: `docs/artigo.html:533`
  - telas e prototipos: `docs/artigo.html:788`, `docs/artigo.html:864`
  - banco de dados: `docs/artigo.html:1001`
  - atividades realizadas: `docs/artigo.html:479`
  - proximos passos: `docs/artigo.html:1478`
  - pendencias: `docs/artigo.html:1490`
  - conclusao: `docs/artigo.html:1514`
- As ilustracoes principais estao autocontidas no HTML, com SVG inline e sem dependencia visivel de assets externos quebrados: `docs/artigo.html:554`, `docs/artigo.html:602`, `docs/artigo.html:649`, `docs/artigo.html:710`, `docs/artigo.html:815`, `docs/artigo.html:1011`, `docs/artigo.html:1399`.
- O conteudo funcional do artigo continua coerente com o workspace:
  - stack PHP/MySQL/Docker: `README.md:3`, `docs/artigo.html:467`, `docs/artigo.html:587`
  - autenticacao e CRUD de itens como base implementada: `docs/artigo.html:1188`, `docs/artigo.html:1195`, `src/login.php`
  - emprestimos e agendamentos ainda nao aparecem como modulos aplicacionais equivalentes em `src/`, permanecendo coerente tratá-los como nao concluidos: `docs/artigo.html:1201`, `docs/artigo.html:1206`
  - modulo de relatorios existe como material separado em `Modulo_4_relatorios/`, coerente com a descricao de estrutura base/parcial: `docs/artigo.html:1211`
  - modulo de forum existe como material separado em `Modulo_5_forum/`, coerente com a mencao de Flarum: `docs/artigo.html:1216`
- Nao foram encontrados tokens, senhas em claro, chaves privadas, `.env` exposto ou URLs privadas no artigo. As ocorrencias de `senha` e `.env` aparecem apenas em contexto descritivo tecnico: `docs/artigo.html:502`, `docs/artigo.html:591`, `docs/artigo.html:1089`, `docs/artigo.html:1190`.

## Achado desta rodada

1. **Medio — secao de divergencias documentais esta parcialmente desatualizada**
- Evidencia no artigo: `docs/artigo.html:1492`
- Evidencia no workspace atual: `CHECKLIST_AUDITORIA.md` existe na raiz; `BACKLOG_MOBILE_FIRST.md` nao foi encontrado.
- Impacto: o artigo permanece valido para acompanhamento academico, mas a secao 17 informa incorretamente que ambos os arquivos de referencia estao ausentes.
- Recomendacao: ajuste textual leve em `docs/artigo.html` para marcar `CHECKLIST_AUDITORIA.md` como presente e manter `BACKLOG_MOBILE_FIRST.md` como ausente ate existir.

## Parecer

O artigo esta completo, claro e suficiente para acompanhamento academico nesta rodada. A estrutura minima exigida pela issue esta presente, as ilustracoes estao integradas de forma segura no proprio HTML e nao houve evidencia de exposicao sensivel.

O unico desvio objetivo remanescente e documental e localizado na secao de pendencias, sem bloquear o uso do artigo nem exigir correcao imediata para fechamento da revisao.

## Disposicao recomendada

- Status da LIM-114: `done`
- Acao opcional posterior: abrir no maximo uma tarefa textual leve para atualizar a secao 17 do artigo
