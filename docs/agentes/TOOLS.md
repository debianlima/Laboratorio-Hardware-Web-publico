# TOOLS.md — Regras de Ferramentas, Docker, Git e Secrets

Este arquivo orienta como os agentes devem usar ferramentas no projeto Laboratório de Hardware 2025.

## 1. Princípio geral

Ferramentas devem aumentar segurança, rastreabilidade e produtividade.

Não usar ferramenta para contornar regra de autorização.

Não expor secrets.

Não executar comandos destrutivos sem autorização humana.

## 2. Git

Git é o mecanismo principal de backup e reversão.

Antes de mudança relevante:

```bash
git status
git branch --show-current

3 instalar aplicações e programas para simulação em docker sempre que possivel. computador tem 32GB de ram sobrando.
