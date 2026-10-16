# Auditoria de tarefas

## Objetivo

Manter coerência entre o estado do board Paperclip, os runs, o workspace, os commits e a documentação.

## Procedimento

1. Listar issues abertas, bloqueadas, em revisão e recentemente concluídas.
2. Para cada issue, comparar descrição, comentários, responsável e dependências.
3. Inspecionar runs recentes: status, adapter/modelo, erro, duração e artefatos.
4. Comparar o estado da issue com o diff Git e os testes.
5. Identificar duplicidades, tarefas sem responsável, issues sem próximo passo e runs órfãos.
6. Registrar causa provável separada de causa confirmada.
7. Propor ação, responsável e evidência necessária.
8. Atualizar o board somente com permissão apropriada.

## Checklist por tarefa

- [ ] Existe objetivo claro.
- [ ] Critérios de aceite são verificáveis.
- [ ] Agente corresponde ao tipo de trabalho.
- [ ] Estudo prévio existe ou foi criado.
- [ ] Dependências e bloqueadores estão explícitos.
- [ ] Run mais recente foi inspecionado.
- [ ] Diff e testes foram verificados.
- [ ] Commit está associado à issue quando aplicável.
- [ ] Status final corresponde à evidência.
- [ ] Pendências têm responsável e ação.

## Evidência histórica

Os registros apontam falhas de conexão da API Paperclip na porta 3100, falhas de adapter e divergências de alias/caminho. São eventos históricos; verificar se ainda ocorrem antes de reabrir incidentes.

## Resultado desta reconstrução

**A CONFIRMAR:** auditoria ao vivo do board, runs e estado atual do repositório não foi executada ao criar este pacote.
