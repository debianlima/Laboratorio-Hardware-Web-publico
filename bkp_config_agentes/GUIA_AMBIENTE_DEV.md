# Guia do ambiente de desenvolvimento

> Resumo de caminhos e topologia observados nos registros históricos. Verificar o ambiente atual antes de executar comandos.

## Caminhos registrados

- Workspace do projeto: `/home/user/workspaces/laboratorio_hardware_2025`
- Instância Paperclip: `/home/user/.paperclip/instances/default/`
- Configurações/wrappers: `/home/user/.config/paperclip-agents/`

## Topologia histórica

- Máquina 110: inferência com GPU.
- Máquina 116 (`[HOST_INTERNO_ANONIMIZADO]`, endereço histórico `[ENDERECO_INTERNO_ANONIMIZADO]`): Paperclip e inferência local.
- Aplicação descrita: PHP/Apache, MySQL e Docker.
- Git local e `origin` no GitHub foram usados para rastreabilidade.

## Modelos/aliases históricos

Os registros mencionam `ollamagpu/qwen3-coder:30b`, `ollamalocal/gpt-oss:20b-sec-128k`, variantes com contexto menor e Qwen2.5-Coder 14B. Não assumir que esses aliases ainda existem.

## Verificações seguras

- Confirmar hostname, caminho do workspace e branch atual.
- Confirmar `git status --short` e `git log -n 10 --oneline`.
- Verificar disponibilidade do adapter/modelo com o wrapper usado pelo agente.
- Consultar logs sanitizados e estado do serviço.
- Não imprimir tokens, `.env`, senhas ou chaves.
- Não executar deploy, reset ou migração destrutiva sem autorização.

## A CONFIRMAR

- IPs e conectividade atuais.
- Serviços e portas ativos.
- Branch principal, remotes e worktrees atuais.
- Versões de modelos e limites de contexto.
- Estado atual da API Paperclip e de cada adapter.

