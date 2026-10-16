
## PENDENCIA OPERACIONAL (Rodada 2026-05-21 — LIM-304)

| ID | Pendência | Impacto | Depende de | Sugestão |
|----|-----------|---------|------------|----------|
| P-CRIT-07 | Branch atual `main` confirmada, worktree consistente. | Baixo | N/A | Manter monitoramento |
| P-CRIT-08 | Dev Full Stack (c0d75cdc) | ✅ RESOLVIDO (LIM-297/304) — último log 10:29 executando LIM-43 | Modelo GPU funcional | Operacional via `ollamagpu/qwen25-coder-14b-32k-vram` |
| P-CRIT-09 | Rate Limiting + Log tentativas | ✅ RESOLVIDO (LIM-274) | Testado | Bloqueio 5 tentativas funcional |
| P-CRIT-10 | CEO adapter_failed | ✅ RESOLVIDO — fallback model ativo | N/A | `opencode/deepseek-v4-flash-free` |
| P-AG-01 | Módulo de Agendamentos não implementado | Alto — próxima funcionalidade crítica | Tabelas existem no schema | Atribuir ao Dev Full Stack |
| P-AG-02 | Agentes ociosos sem tarefa | Médio — Codex, Documentador, Analista, Executor, Dev DB | Planejamento LIM-304 | Distribuir tarefas (ver docs/estudos/LIM-304-estudo.md) |
| P-AG-03 | Artigo acadêmico com inconsistências | ✅ RESOLVIDO (LIM-204) — docs/artigo.html (v2.0+) é versão oficial completa com 20 seções; src/doc/artigo.html é cópia legada v2.0 congelada, diferença estrutural intencional | N/A | Ver docs/auditoria/LIM-204/ |
