# Requisitos para Correção de Root Path no AGENTS.md

## Descrição da Issue
O arquivo AGENTS.md contém referências incorretas ao caminho do workspace, apontando para `/home/opc/workspaces/laboratorio_hardware_2025` quando o caminho real é `/home/user/workspaces/laboratorio_hardware_2025`. Esta inconsistência pode causar confusão e potencialmente levar à execução de tarefas em contextos incorretos.

## Requisitos Funcionais

1. **RF-001**: Substituir todas as ocorrências de `/home/opc/workspaces/laboratorio_hardware_2025` por `/home/user/workspaces/laboratorio_hardware_2025` no arquivo AGENTS.md
2. **RF-002**: Substituir todas as ocorrências de `\`/home/opc/workspaces/laboratorio\_hardware\_2025\`` por ``\`/home/user/workspaces/laboratorio\_hardware\_2025\`` no arquivo AGENTS.md (versão escapada para markdown)
3. **RF-003**: Manter o restante do conteúdo do arquivo AGENTS.md inalterado

## Critérios de Aceitação

### Critério de Aceitação 1: Correção Completa de Paths
- **Dado**: O arquivo AGENTS.md contém as linhas 29 e 269 com paths incorretos
- **Quando**: A correção for aplicada
- **Então**: As linhas 29 e 269 devem conter o caminho correto `/home/user/workspaces/laboratorio_hardware_2025`
- **Evidência**: `grep -n "home/user" AGENTS.md` deve retornar as linhas 29 e 269

### Critério de Aceitação 2: Não Regressão de Conteúdo
- **Dado**: O arquivo AGENTS.md contém conteúdo funcional além dos paths
- **Quando**: A correção for aplicada
- **Então**: Todo o conteúdo do arquivo, exceto os paths especificados, deve permanecer idêntico
- **Evidência**: Comparando o arquivo antes e depois da alteração, apenas as strings de path devem ter mudado

### Critério de Aceitação 3: Validação de Formato
- **Dado**: O arquivo AGENTS.md deve manter sua formatação markdown
- **Quando**: A correção for aplicada
- **Então**: O arquivo deve continuar sendo um arquivo markdown válido
- **Evidência**: O arquivo deve continuar sendo lido corretamente por ferramentas de parsers de markdown

## Riscos Identificados

1. **Risco Baixo**: Possível quebra de formatação se as substituições não forem feitas exatamente
   - **Mitigação**: Usar busca e substituição exata validada por testes

2. **Risco Muito Baixo**: Perda de conteúdo se edição for feita incorretamente
   - **Mitigação**: Criar backup antes da alteração e validar após

## Dependências
Nenhuma dependência externa identificada para esta tarefa.

## Estimativa de Esforço
Baixa - Alteração simples de strings em arquivo de texto.

## Prioridade
Alta (P2 segundo AGENTS.md §8) - Corrigir configuração dos agentes para prevenir riscos de contexto incorreto.