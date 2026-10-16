# Governança operacional dos agentes — Laboratório de Hardware 2025

> Versão de referência reconstruída a partir de registros históricos. Comparar com a versão canônica do repositório antes de instalar.

## 1. Regra antes de iniciar

Antes de implementar uma tarefa:
1. Ler a issue e seus comentários.
2. Ler este `AGENTS.md` e as instruções específicas do agente.
3. Procurar estudo/simulação em `docs/estudos/`.
4. Procurar planejamento em `docs/planejamento/`, `docs/`, `docs/artigo.html` e arquivos de requisito.
5. Verificar histórico Git quando relevante.
6. Se não houver estudo suficiente, criar `docs/estudos/LIM-XX-estudo.md` antes da implementação.

O estudo deve registrar objetivo, telas, banco, arquivos prováveis, regras de negócio, segurança, plano de integração, critérios de aceite, testes, riscos e agente responsável.

## 2. Contrato de execução

- Iniciar o trabalho executável no mesmo ciclo; não entregar apenas um plano quando a issue pede execução.
- Não declarar concluído sem verificar a alteração e os critérios de aceite.
- Registrar progresso durável na issue, documentação ou artefato de trabalho.
- Ao finalizar, informar arquivos alterados, comandos/testes executados, resultados, limitações e pendências.
- Usar `done` somente quando concluído e verificado; `in_review` apenas com revisor/aceite real; `blocked` com bloqueador e responsável identificados; `in_progress` somente com caminho de continuação ativo.
- Usar issues-filhas para trabalho paralelo ou dependências longas.
- Não manter tarefas indefinidamente sem comentário ou atualização de estado.

## 3. Fluxo de documentação

Priorizar Markdown quando a issue pedir estudo, governança, backlog, histórico ou registro técnico. Não modificar HTML publicado, navegação, banco, migrations ou código fora do escopo explicitamente autorizado.

Documentação publicada em HTML só deve ser alterada quando a issue autorizar. Preservar histórico, estrutura e links; não reorganizar diretórios amplos sem autorização.

## 4. Ações que exigem autorização humana explícita

- Deploy de produção.
- Alteração de secrets, tokens, chaves, `.env` ou credenciais.
- Migrações destrutivas, reset de banco ou alteração irreversível de dados.
- `git merge`, `git cherry-pick`, `git stash pop` ou alteração de branch protegida.
- Push/publicação externa, quando a política do repositório assim exigir.
- Remoção de arquivos, histórico ou documentação importante.

Enquanto aguarda autorização, continuar diagnósticos seguros, leitura, testes locais reversíveis e documentação que não ultrapasse o escopo.

## 5. Supervisor e concorrência

O supervisor pode ler issues, analisar runs falhados, identificar bloqueios, comentar auditorias, reorganizar filas e reatribuir tarefas. Não implementa código funcional, não faz commit/push/deploy e não reativa tarefas de produção sem autorização.

A política histórica registrada limita a reativação a no máximo três tarefas seguras por rodada e recomenda evitar mais de uma inferência pesada simultânea por agente local. Confirmar esses limites na configuração atual.

## 6. Segurança e dados

- Nunca incluir credenciais, tokens, seeds ou dados pessoais em Markdown, logs ou commits.
- Sanitizar logs antes de anexá-los.
- Usar menor privilégio e escopo mínimo.
- Não presumir que uma correção foi implantada porque existe um arquivo ou commit.
- Relacionar issue, run, diff, commit e testes antes de declarar evidência conclusiva.

## 7. Formato de encerramento

- **Status:** done / in_review / blocked / in_progress
- **Resumo:** o que foi feito.
- **Arquivos:** caminhos alterados.
- **Verificação:** testes/comandos e resultado real.
- **Evidências:** issue, run, commit e diff, quando disponíveis.
- **Riscos/limitações:** itens não comprovados.
- **Próxima ação:** responsável e condição de desbloqueio.
