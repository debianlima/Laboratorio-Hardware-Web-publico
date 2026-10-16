# Heartbeat — retomada e supervisão de tarefas

> Modelo operacional baseado na referência histórica a `docs/agentes/HEARTBEAT.md`.

## Objetivo

Permitir retomada previsível de trabalho sem duplicar execução, perder contexto ou manter tarefas sem encaminhamento.

## Ao iniciar um heartbeat

1. Identificar a issue atribuída e seu estado.
2. Ler os comentários e a última atualização do agente.
3. Confirmar se existe run ativo para a mesma tarefa.
4. Ler `AGENTS.md` e os estudos relacionados.
5. Verificar dependências e bloqueadores.
6. Escolher uma próxima ação concreta e segura.

## Evitar

- Iniciar a mesma tarefa pesada em paralelo.
- Repetir diagnósticos sem consultar os resultados anteriores.
- Reativar produção sem autorização.
- Considerar comentário ou documento como substituto de atualização do status.
- Continuar sem contexto de issue confiável.

## Encerramento do ciclo

Registrar ação executada, resultado, evidência, status, bloqueador e responsável pela próxima etapa. Se não houver trabalho seguro, explicar o bloqueio e a condição para continuar.
