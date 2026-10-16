# HEARTBEAT.md — Rotina Operacional dos Agentes

Execute este checklist em todo heartbeat, rotina automática ou nova tarefa.

Este projeto funciona como uma pequena estrutura empresarial automatizada. O objetivo não é apenas responder tarefas, mas manter produção contínua, segura, reversível, profissional e documentada.

## 1. Identidade e contexto

Antes de agir, confirme:

- quem é o agente;
- qual é sua função;
- qual tarefa ou issue acordou o agente;
- qual é o motivo do wakeup;
- qual agente é seu superior direto;
- se há outro agente já executando a mesma tarefa.

Verifique contexto:

- `PAPERCLIP_TASK_ID`
- `PAPERCLIP_WAKE_REASON`
- comentários recentes da issue;
- status atual da issue;
- branch atual;
- arquivos alterados localmente.

Se outro agente já estiver executando a mesma issue, não competir. Comentar, registrar e mover para a próxima tarefa segura.

---

## 2. Verificação obrigatória de estudo/simulação

Antes de implementar qualquer tarefa nova, verificar se já existe estudo, simulação ou plano técnico.

Procurar nesta ordem:

1. Comentários da issue.
2. `docs/estudos/`
3. `docs/planejamento/`
4. `docs/artigo.html`
5. `docs/`
6. commits recentes.
7. `AGENTS.md`

Se não houver estudo suficiente, criar estudo mínimo antes de implementar.

O estudo deve conter:

- objetivo da tarefa;
- telas envolvidas;
- banco/tabelas envolvidas;
- arquivos prováveis;
- impacto na regra de negócio;
- impacto na interface;
- impacto em segurança;
- plano de integração;
- critérios de aceite;
- plano de teste;
- riscos;
- agente responsável por cada parte.

Salvar preferencialmente em:

`docs/estudos/LIM-XX-estudo.md`

Se Analista, CEO ou Documentador estiverem ocupados, o próprio agente executor deve fazer o estudo mínimo e seguir com a parte segura.

Nunca iniciar uma implementação relevante sem estudo ou simulação mínima.

---

## 3. Planejamento local do dia

Verificar o plano do dia, quando existir:

`$AGENT_HOME/memory/YYYY-MM-DD.md`

Revisar:

- o que foi concluído;
- o que está em andamento;
- o que está bloqueado;
- qual é a próxima tarefa de maior prioridade.

Registrar progresso em notas diárias quando possível.

Se estiver adiantado, buscar a próxima tarefa prioritária dentro da sua função.

---

## 4. Política de autorização hierárquica

O agente não deve parar imediatamente esperando autorização humana.

Primeiro, pedir autorização ao agente correto:

- arquitetura, prioridade ou conflito: CEO Técnico Local;
- regra de negócio: Analista de Negócios Free;
- segurança: Executor Segurança Offline;
- revisão técnica: Codex Revisor;
- fila, bloqueio ou erro operacional: Gemini Supervisor;
- documentação: Documentador Acadêmico Free.

Autorização humana direta só é obrigatória para:

- deploy em produção;
- alteração de secrets, tokens, senhas ou `.env`;
- exclusão ou reset de banco;
- migration destrutiva;
- push direto em branch protegida/main;
- publicação externa sensível;
- alteração irreversível de infraestrutura.

---

## 5. Falta de autorização por mais de 1 hora

Se uma autorização solicitada não for respondida em até 1 hora, gerar o evento:

`AUTO_CONTINUATION_AFTER_TIMEOUT`

O agente deve:

1. Criar checkpoint local de segurança.
2. Registrar a pendência na issue.
3. Solicitar decisão ao supervisor/CEO.
4. Continuar somente com partes seguras e reversíveis.
5. Evitar deploy, secrets, exclusão, migration destrutiva e push em branch protegida.

Comandos recomendados:

```bash
git status
git add -A
git commit -m "checkpoint: LIM-XX before auto-continuation after missing authorization" || true
git branch "checkpoint/LIM-XX-$(date +%Y%m%d-%H%M)" || true
