# Estudo Técnico: Implementação do Módulo de Empréstimos (LIM-73)

## Objetivo da Tarefa
Implementar o módulo de empréstimos para o sistema Laboratório de Hardware 2025, permitindo o registro, consulta, atualização e devolução de empréstimos de equipamentos para usuários, baseado na tabela `emprestimos` já existente no banco de dados.

## Telas Envolvidas
1. `/emprestimos/listar.php` - Lista paginada de empréstimos com filtros
2. `/emprestimos/cadastrar.php` - Formulário de cadastro de novo empréstimo
3. `/emprestimos/editar.php` - Formulário de edição/devolução de empréstimo
4. `/emprestimos/atrasados.php` - Relatório específico de empréstimos atrasados

## Tabelas/Banco Envolvidos
- `emprestimos` (tabela principal - já existe)
- `usuarios` (FK para usuário - referência)
- `equipamentos` (FK para equipamento - referência)

## Arquivos Prováveis
- `/emprestimos/listar.php`
- `/emprestimos/cadastrar.php`
- `/emprestimos/editar.php`
- `/emprestimos/atrasados.php`
- Possíveis atualizações em arquivos de menu/navegação para acesso ao módulo
- Arquivos de estilo CSS (se necessário, mas deve reutilizar Bootstrap 5 existente)

## Impacto nas Regras de Negócio
- Controle de empréstimos de equipamentos entre usuários
- Prevenção de empréstimos duplicados do mesmo equipamento
- Controle de status (pendente, devolvido, atrasado)
- Integração com módulos existentes de usuários e equipamentos
- Controle de acesso baseado em papéis (admin vs usuário comum)

## Impacto na Interface
- Novas telas integradas ao menu existente
- Uso consistente de Bootstrap 5 para manter padronização visual
- Formulários com validação em tempo real
- Indicadores visuais para empréstimos atrasados
- Responsividade para acesso em dispositivos móveis

## Impacto na Segurança
- Proteção contra SQL injection usando prepared statements
- Validação e sanitização de entradas para prevenir XSS
- Controle de acesso baseado em autenticação existente
- Restrições de exclusão apenas para empréstimos pendentes
- Verificação de existência de usuários e equipamentos antes do empréstimo

## Plano de Integração
1. Verificar se a tabela `emprestimos` possui estrutura adequada (via init.sql)
2. Implementar tela de listagem com filtros e paginação
3. Implementar formulário de cadastro com validações
4. Implementar formulário de edição/devolução com cálculo automático de status
5. Implementar funcionalidade de exclusão com restrições
6. Implementar relatório de empréstimos atrasados
7. Integrar com módulos existentes de usuários e equipamentos
8. Aplicar estilos consistentes com Bootstrap 5
9. Testar todas as funcionalidades localmente

## Critérios de Aceite
- Acesso via URLs especificadas para cada tela
- Listagem exibindo colunas necessárias com filtros funcionais
- Cadastro válido apenas com usuários e equipamentos existentes e ativos
- Prevenção de empréstimos duplicados do mesmo equipamento
- Cálculo automático de status baseado nas datas
- Exclusão restrita a empréstimos pendentes com confirmação
- Relatório de atrasados ordenado por dias de atraso
- Interface responsiva usando Bootstrap 5
- Segurança implementada (prepared statements, validação de entrada)
- Compatibilidade com PHP 8+ e MySQL 8+
- Nenhuma nova dependência externa além das existentes

## Plano de Teste
1. Testar cadastro de empréstimo com dados válidos
2. Testar rejeição de cadastro com usuário/equipamento inexistente
3. Testar prevenção de empréstimo duplicado (equipamento já emprestado)
4. Testar edição de empréstimo (alterar data prevista e observações)
5. Testar registro de devolução com cálculo correto de status
6. Testar exclusão apenas de empréstimos pendentes
7. Testar relatório de atrasados com ordenação correta
8. Testar filtros e busca na listagem geral
9. Testar paginação com mais de 10 registros
10. Testar interface em diferentes tamanhos de tela
11. Verificar proteção contra SQL injection e XSS
12. Testar controle de acesso (se implementado)

## Riscos
1. **Risco Médio**: Inconsistência de dados se houver exclusão de usuários/equipamentos com empréstimos ativos
   - Mitigação: Verificar se FKs têm ON DELETE RESTRICT ou implementar restrição na aplicação

2. **Risco Baixo**: Sobrecarga de performance em selects de usuários/equipamentos se houver muitos registros
   - Mitigação: Implementar busca incremental ou paginação nos selects se necessário

3. **Risco Muito Baixo**: Divergência entre status calculado e status armazenado
   - Mitigação: Sempre calcular status baseado nas datas na consulta ou usar triggers

## Agente Mais Adequado para Executar Cada Parte
- **Analista de Negócios Free**: Já concluiu - elaboração deste estudo e especificação de requisitos
- **Dev Full Stack Local / Ollama**: Implementação de todas as telas e funcionalidades
- **Executor Segurança Offline**: Revisão de segurança (SQL injection, XSS, controle de acesso)
- **Codex / Claude**: Revisão crítica de código antes de merge
- **CEO Técnico Local**: Aprovação final da arquitetura e decisões técnicas

## Observações
Este estudo foi criado seguindo a diretriz de governança operacional do AGENTS.md, seção 1, pois não existia estudo prévio suficiente para a implementação do módulo de empréstimos.