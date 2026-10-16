# GOVERNANÇA OPERACIONAL DOS AGENTES — LAB HARDWARE 2025

## 1. Regra obrigatória antes de iniciar qualquer tarefa

Antes de implementar qualquer nova tarefa, todo agente deve verificar se já existe uma simulação, estudo técnico ou planejamento sobre a tarefa.

O agente deve procurar, nesta ordem:

1. Comentários da issue.
2. Arquivos em `docs/estudos/`.
3. Arquivos em `docs/planejamento/`.
4. Arquivos em `docs/artigo.html`.
5. Arquivos em `docs/`.
6. Histórico recente de commits.
7. AGENTS.md.

Se NÃO existir estudo/simulação suficiente, o agente deve criar um estudo antes de implementar.

O estudo deve conter:

- objetivo da tarefa;
- telas envolvidas;
- tabelas/banco envolvidos;
- arquivos prováveis;
- impacto nas regras de negócio;
- impacto na interface;
- impacto em segurança;
- plano de integração;
- critérios de aceite;
- plano de teste;
- riscos;
- agente mais adequado para executar cada parte.

O estudo deve ser salvo preferencialmente em:

`docs/estudos/LIM-XX-estudo.md`

Se o Analista de Negócios, CEO Técnico ou Documentador estiverem ocupados, o próprio agente executor deve criar o estudo mínimo e seguir com a parte segura da tarefa.

Nenhum agente deve implementar diretamente uma tarefa nova sem primeiro verificar ou criar esse estudo.

---

## 2. Ciclo hierárquico de autorização

Os agentes devem solicitar autorização primeiro para outro agente supervisor, e não parar esperando autorização humana imediata.

Hierarquia padrão:

1. Agente executor identifica dúvida ou risco.
2. Solicita decisão ao agente especializado:
   - Banco/regras → CEO Técnico Local ou Executor Segurança Offline.
   - Interface/UX → Analista de Negócios Free ou CEO Técnico Local.
   - Segurança → Executor Segurança Offline.
   - Documentação/publicação interna → Documentador Acadêmico Free ou CEO Técnico Local.
   - Revisão de código → Codex Revisor.
3. Se o agente supervisor não responder em até 1 hora, aplicar a regra de continuidade segura.

Autorização humana direta só é obrigatória para:

- deploy em produção;
- alteração de secrets, tokens, senhas ou `.env`;
- exclusão ou reset de banco de dados;
- migration destrutiva;
- push direto para branch protegida/main;
- publicação externa sensível;
- alteração irreversível de infraestrutura.

---

## 3. Regra de continuidade após 1 hora sem autorização

Se uma tarefa ficar aguardando autorização por mais de 1 hora, o agente não deve abandonar nem travar definitivamente a tarefa.

O agente deve gerar o evento:

`AUTO_CONTINUATION_AFTER_TIMEOUT`

Procedimento obrigatório:

1. Criar checkpoint local de segurança no Git.
2. Registrar a pendência na issue.
3. Continuar somente com partes seguras e reversíveis.
4. Evitar deploy, secrets, exclusão de dados e migrations destrutivas.
5. Solicitar revisão posterior ao CEO Técnico Local ou supervisor.

Comandos recomendados para checkpoint local:

```bash
git status
git add -A
git commit -m "checkpoint: LIM-XX before auto-continuation after missing authorization" || true
git branch "checkpoint/LIM-XX-$(date +%Y%m%d-%H%M)" || true


# Arquivos padrão dos agentes

Antes de qualquer tarefa relevante, os agentes devem consultar:

- `docs/agentes/HEARTBEAT.md`
- `docs/agentes/SOUL.md`
- `docs/agentes/TOOLS.md`

Esses arquivos definem:
- rotina operacional;
- persona empresarial dos agentes;
- política de backup e continuidade;
- uso de Git, Docker, GitHub, Vercel e Supabase;
- padrão profissional das telas;
- regra de estudo/simulação antes da implementação;
- ciclo de autorização hierárquico.
cd /home/user/workspaces/laboratorio_hardware_2025

cat >> AGENTS.md <<'EOF'

# Regra do Documentador Acadêmico Free — Portal HTML de Auditoria

O Documentador Acadêmico Free deve priorizar documentação em HTML dentro da pasta `docs/`.

A documentação deve funcionar como um portal navegável pelo Apache/Docker, permitindo auditoria, acompanhamento histórico e comparação entre versões.

## Objetivo

Manter uma série histórica auditável contendo:

- documento original;
- documento corrigido;
- revisões;
- justificativas de alteração;
- vínculo com issue;
- vínculo com commit;
- agente responsável;
- data da revisão;
- status do documento.

## Estrutura recomendada

```text
docs/
├── index.html
├── artigo.html
├── auditoria/
│   ├── index.html
│   └── LIM-XX/
│       ├── index.html
│       ├── original.html
│       ├── corrigido.html
│       ├── revisoes.html
│       └── historico.html
├── estudos/
│   └── LIM-XX-estudo.html
├── telas/
│   └── index.html
├── banco/
│   └── index.html
└── assets/
    ├── css/
    ├── img/
    └── screenshots/

# Acesso ao Paperclip e documentação

O Paperclip não deve ser testado diretamente por IP público da máquina local.

Estado atual:
- Paperclip roda internamente na máquina local.
- Acesso interno provável: http://172.16.0.116:3100
- Documentação Apache/Docker provável: http://172.16.0.116:8080 ou porta Docker publicada.
- Acesso externo deve sem adim é passar pela  VPN wg0, sendo publicado no ip 141.148.79.230..

Os agentes devem:
- testar primeiro por IP interno;
- não assumir que existe IP público direto na máquina do Paperclip;
- não marcar erro externo como falha do Paperclip antes de verificar acesso interno;
- registrar quando a falha for apenas de NAT/redirecionamento da VPS.

