# Priorização do Backlog - Projeto Laboratório de Hardware 2025

## Metodologia Utilizada
Matriz de Impacto vs Esforço, onde:
- **Impacto**: Valor entregue ao negócio/usuário (Alto, Médio, Baixo)
- **Esforço**: Complexidade e tempo de implementação (Alto, Médio, Baixo)

## Tarefas Identificadas e Priorizadas

### QUICK WINS (Alto Impacto, Baixo Esforço)
**Prioridade: Imediata (Sprint 1)**

1. **Correção de Root Path em AGENTS.md**
   - Impacto: Alto (previne execução em contexto incorreto, melhora confiabilidade)
   - Esforço: Baixo (alteração simples de strings)
   - Justificativa: Risco operacional baixo, benefício imediato na padronização

2. **Limpeza de Issues Duplicadas no Board**
   - Impacto: Alto (melhora clareza do backlog, reduz ruído)
   - Esforço: Baixo (identificação e cancelamento de duplicatas)
   - Justificativa: Já identificado na auditoria LIM-71 (LIM-47, LIM-48, LIM-49)

3. **Atualização de Keyword Residual no Abstract**
   - Impacto: Médio-Alto (consistência documental importante para TCC)
   - Esforço: Baixo (alteração de texto simples)
   - Justificativa: Melhoria de qualidade com esforço mínimo

### MAJOR PROJECTS (Alto Impacto, Alto Esforço)
**Prioridade: Planejada (Sprints 2-3)**

1. **Implementação do Módulo de Empréstimos**
   - Impacto: Alto (funcionalidade crítica para gestão do laboratório)
   - Esforço: Alto (CRUD completo, validações, integração, segurança)
   - Justificativa: Funcionalidade essencial pendente após CRUD de itens

2. **Melhorias de Segurança Gerais**
   - Impacto: Alto (proteção contra vulnerabilidades)
   - Esforço: Médio-Alto (revisão e aplicação de boas práticas)
   - Justificativa: Preventivo, mas importante para maturidade do sistema

### FILL-INS (Baixo Impacto, Baixo Esforço)
**Prioridade: Oportunística (entre sprints ou como tarefas de preenchimento)**

1. **Documentação de APIs Internais**
   - Impacto: Baixo-Médio (útil para manutenção)
   - Esforço: Baixo (comentar funções existentes)
   - Justificativa: Boa prática de desenvolvimento

2. **Otimização de Pequenas Performance**
   - Impacto: Baixo (ganhos incrementais)
   - Esforço: Baixo (ajustes pontuais)
   - Justificativa: Melhoria contínua sem pressão

3. **Atualização de Dependências de Desenvolvimento**
   - Impacto: Baixo (mantém ferramentas atualizadas)
   - Esforço: Baixo (comandos de atualização)
   - Justificativa: Manutenção preventiva

### TIME SINKS (Baixo Impacto, Alto Esforço)
**Prioridade: Reavaliar ou Evitar**

1. **Refatoração Total do CSS/Layout**
   - Impacto: Baixo-Médio (visual já funcional)
   - Esforço: Alto (re Trabalho significativo)
   - Justificativa: Só justificado se houver problemas reais de usabilidade

2. **Implementação de Funcionalidades Não-Solicitadas**
   - Impacto: Baixo (valor incerto)
   - Esforço: Alto (desvio de foco)
   - Justificativa: Riesgo de escopo creep sem validação de valor

## Ordem de Execução Recomendada

### Sprint 1 (Imediato - 1 semana)
1. Correção de Root Path em AGENTS.md
2. Limpeza de Issues Duplicadas (LIM-47, LIM-48, LIM-49)
3. Atualização de Keyword Residual no Abstract
4. Validação de backup e procedimentos de segurança

### Sprint 2-3 (Curto Prazo - 2-3 semanas)
1. Implementação do Módulo de Empréstimos (fase básica: listar e cadastrar)
2. Revisão de segurança do módulo de empréstimos
3. Implementação das fases restantes (editar, excluir, atrasados)
4. Testes de integração e validação com usuários

### Contínuo (Durante todo o projeto)
- Monitoramento de issues e blocantes
- Melhorias de documentação conforme necessário
- Pequenos ajustes de usabilidade baseado em feedback
- Preparação para próximos módulos (agendamentos, manutenção, etc.)

## Critérios de Priorização Adicionais

### Dependências Técnicas
- O módulo de empréstimos depende da existência de usuários e equipamentos válidos
- Qualquer trabalho de banco deve respeitar as migrations existentes

### Dependências de Equipe
- Tarefas de implementação devem ser atribuídas ao Dev Full Stack Local/Ollama
- Tarefas de configuração podem ser feitas por qualquer agente disponível
- Revisões técnicas devem envolver Codex/Claude quando possível

### Riscos a Monitorar
- Paperclip API permanecendo offline (bloqueia atualização automática de issues)
- Dados inconsistentes nas tabelas de usuários/equipamentos
- Sobrecarga de trabalho em desenvolvedores locais

## Revisão da Priorização
Esta priorização deve ser revisada:
- A cada sprint planning
- Quando houver mudanças significativas no escopo ou recursos
- Após validação de hipóteses com usuários reais
- Quando surgirem novos riscos ou oportunidades

---
*Documento criado pelo Analista de Negócios Free como parte das atividades de análise de requisitos e priorização do backlog.*