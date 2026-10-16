# Requisitos para Implementação do Módulo de Empréstimos

## Descrição da Issue
Implementar o módulo de empréstimos para o sistema Laboratório de Hardware 2025, baseado na tabela `emprestimos` já existente no banco de dados. Este módulo permitirá o registro, consulta, atualização e devolução de empréstimos de equipamentos para usuários.

## Requisitos Funcionais

### RF-001: Tela de Listagem de Empréstimos
- **Descrição**: Exibir lista paginada de todos os empréstimos com filtros por status, usuário e equipamento
- **Critérios de Aceitação**:
  - Acessível via URL `/emprestimos/listar.php`
  - Exibe colunas: ID, Usuário, Equipamento, Data Empréstimo, Data Devolução Prevista, Status, Observações, Ações
  - Permite filtrar por status (pendente, devolvido, atrasado)
  - Permite buscar por nome de usuário ou nome do equipamento
  - Mostra empréstimos atrasados em destaque visual (vermelho)
  - Paginação de 10 registros por página
  - Botão "Novo Empréstimo" para redirecionamento ao formulário de cadastro

### RF-002: Formulário de Cadastro de Empréstimo
- **Descrição**: Permitir registro de novo empréstimo de equipamento
- **Critérios de Aceitação**:
  - Acessível via URL `/emprestimos/cadastrar.php`
  - Campos obrigatórios: Usuário (select), Equipamento (select), Data Empréstimo (date, default hoje)
  - Campos opcionais: Data Devolução Prevista (date), Observações (textarea)
  - Validação: Usuário e equipamento devem existir e estar ativos
  - Validação: Equipamento não pode estar emprestado para outro usuário com status pendente
  - Ao submeter: cria registro na tabela emprestimos com status 'pendente'
  - Redireciona para listagem com mensagem de sucesso após cadastro

### RF-003: Formulário de Edição/Devolução de Empréstimo
- **Descrição**: Permitir atualização de empréstimo existente, principalmente para marcar devolução
- **Critérios de Aceitação**:
  - Acessível via URL `/emprestimos/editar.php?id={id}`
  - Exibe dados do empréstimo em campos somente leitura (exceto data devolução e observações)
  - Permite editar: Data Devolução Prevista, Observações
  - Campo "Data Devolução Efetiva" (date, default hoje) para registrar devolução
  - Ao marcar data devolução efetiva: atualiza status para 'devolvido' se data <= data prevista, ou 'atrasado' se data > data prevista
  - Validação: Não permite editar empréstimos já devolvidos (exceto observações)
  - Redireciona para listagem com mensagem de sucesso após atualização

### RF-004: Funcionalidade de Exclusão
- **Descrição**: Permitir exclusão de empréstimos (com restrições)
- **Critérios de Aceitação**:
  - Disponível como botão "Excluir" na listagem e na tela de edição
  - Só permite exclusão de empréstimos com status 'pendente' (não devolvidos)
  - Confirmação requerida via modal JavaScript antes da exclusão
  - Após exclusão: remove registro da tabela emprestimos
  - Redireciona para listagem com mensagem de sucesso

### RF-005: Relatório de Empréstimos Atrasados
- **Descrição**: Exibir lista específica de empréstimos em atraso
- **Critérios de Aceitação**:
  - Acessível via URL `/emprestimos/atrasados.php`
  - Exibe mesmos campos da listagem geral, filtrado apenas por status 'atrasado'
  - Ordenado por dias de atraso (maior primeiro)
  - Disponível botão para notificação (placeholder para futura implementação)

### RF-006: Integração com Módulo de Usuários e Equipamentos
- **Descrição**: Utilizar dados existentes dos módulos de usuários e equipamentos
- **Critérios de Aceitação**:
  - Selects de usuário e equipamento devem buscar dados ativos das tabelas correspondentes
  - Exibir nome completo do usuário e nome/tombamento do equipamento nos selects e listagens
  - Tratar casos de usuários/equipamentos inativos ou excluídos (manter referência histórica)

## Requisitos Não-Funcionais

### RNF-001: Segurança
- **Descrição**: Proteger contra vulnerabilidades comuns de web
- **Critérios de Aceitação**:
  - Todas as consultas SQL devem usar prepared statements ou equivalentemente ser protegidas contra SQL injection
  - Dados de entrada devem ser validados e sanitizados (XSS protection)
  - Acesso às funcionalidades deve ser restrito a usuários autenticados (reutilizar sistema de login existente)
  - Implementar controle de acesso baseado em papéis (admin pode tudo, usuário comum só vê seus empréstimos)

### RNF-002: Usabilidade
- **Descrição**: Interface intuitiva e responsiva
- **Critérios de Aceitação**:
  - Utilizar Bootstrap 5 para consistência com o restante do sistema
  - Formulários devem ter labels claros e validação em tempo real
  - Mensagens de feedback (sucesso, erro) devem ser exibidas de forma destacada
  - Interface deve ser mobile-first, funcionando bem em telas pequenas
  - Tempo de carregamento das páginas não deve exceder 2 segundos em conexão média

### RNF-003: Performance
- **Descrição**: Sistema responsivo mesmo com volume crescente de dados
- **Critérios de Aceitação**:
  - Consultas de listagem devem usar índices adequados (já existentes nas FKs)
  - Paginação deve limitar resultados retornados pelo banco
  - Carregamento inicial de selects de usuário/equipamento deve ser otimizado (limitar a 100 registros inicialmente com busca incremental se necessário)

### RNF-004: Manutenibilidade
- **Descrição**: Código fácil de entender e modificar
- **Critérios de Aceitação**:
  - Seguir padrões de código existentes no projeto (estilo PHP, nomes de variáveis, comentários)
  - Separar claramente caminhos de apresentação (HTML), lógica de negócio (PHP) e acesso a dados (SQL/PDO)
  - Utilizar funções reutilizáveis para operações comuns (validação de dados, formatação de datas)
  - Incluir comentários explicativos em partes complexas do código

### RNF-005: Compatibilidade
- **Descrição**: Funcionar com as tecnologias existentes do projeto
- **Critérios de Aceitação**:
  - Compatível com PHP 8+
  - Utilizar apenas bibliotecas já existentes no projeto (não adicionar novas dependências)
  - Manter compatibilidade com o banco MySQL 8+
  - Seguir mesma estrutura de diretórios e nomes de arquivos do módulo de itens

## Riscos Identificados

1. **Risco Médio**: Inconsistência de dados se houver exclusão de usuários/equipamentos com empréstimos ativos
   - **Mitigação**: Implementar restrição de exclusão no nível de aplicação (não permitir excluir usuário/equipamento com empréstimos pendentes) ou usar ON DELETE RESTRICT nas FKs (verificar se já está configurado)

2. **Risco Baixo**: Sobrecarga de performance em selects de usuários/equipamentos se houver muitos registros
   - **Mitigação**: Implementar busca incremental ou paginação nos selects dos formulários

3. **Risco Muito Baixo**: Divergência entre status calculado e status armazenado
   - **Mitigação**: Sempre calcular status baseado nas datas no momento da consulta, ou usar triggers para manter consistência

## Dependências

1. **Dependência Forte**: Tabelas `usuarios` e `equipamentos` devem existir e estar populadas
2. **Dependência Forte**: Sistema de autenticação/login já implementado
3. **Dependência Forte**: Estilo CSS/Bootstrap 5 já configurado no projeto

## Estimativa de Esforço
Média - Implementação de 5 telas (listar, cadastrar, editar, atrasados) com funcionalidades completas de CRUD e validações.

## Prioridade
Média (P8 segundo AGENTS.md §8) - Implementação de funcionalidade após correções de configuração críticas.