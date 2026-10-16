# Análise de riscos

| Risco | Impacto potencial | Controle recomendado | Evidência necessária |
|---|---|---|---|
| Alias/modelo inexistente | Run falha ou tarefa fica parada | Validar pelo adapter/wrapper real antes de reativar | Configuração e log sanitizado |
| API Paperclip indisponível | Board deixa de refletir o trabalho real | Monitorar serviço e reconciliar issues após recuperação | Health check, logs e estado do board |
| AGENTS.md divergente | Agentes usam regras ou caminhos diferentes | Manter arquivo canônico e comparar cópias | Hash/diff e inventário |
| Contexto excessivo | Latência e perda de coerência | Escopo reduzido, estudos curtos e contexto relevante | Run comparável e logs |
| Concorrência excessiva | Saturação de RAM/VRAM e timeouts | Limites de execução e fila | Métricas de recurso e horários |
| Encerramento sem evidência | Falso positivo de conclusão | Checklist, QA e vínculo issue/diff/teste | Testes, commit e aceite |
| Operação destrutiva sem aprovação | Perda de dados ou indisponibilidade | Gate humano explícito e plano de rollback | Aprovação registrada |
| Documentação reconstruída tratada como original | Decisões baseadas em informação incompleta | Rotular reconstruções e reconciliar com fonte | Diff contra repositório original |

## Limites da análise

Esta análise foi reconstruída a partir de eventos históricos descritos. Não é uma avaliação de risco em tempo real nem confirma que qualquer incidente permanece ativo.
