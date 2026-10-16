# Estudo Técnico: LIM-43 — Testar fluxo completo de empréstimos e devoluções

## Issue Alvo
LIM-43 — S1: Testar fluxo completo de empréstimos e devoluções

## Agente Responsável
Dev Full Stack Local (quando modelo for corrigido — LIM-132) ou CEO Técnico Local (continuidade segura)

## Prioridade
ALTA — validação da implementação do módulo de empréstimos

## Objetivo
Verificar que o fluxo completo de empréstimos funciona corretamente, incluindo validações, segurança e experiência do usuário.

## Telas Envolvidas
1. `src/emprestimos/listar.php` — listagem com filtros
2. `src/emprestimos/cadastrar.php` — cadastro de novo empréstimo
3. `src/emprestimos/editar.php` — registro de devolução
4. `src/emprestimos/atrasados.php` — relatório de atrasados
5. `src/index.php` — dashboard com link para empréstimos

## Tabelas/Banco Envolvidos
- `emprestimos` — tabela principal
- `usuarios` — FK usuario_id
- `equipamentos` — FK equipamento_id

## Testes Manuais a Executar

### Teste 1: Fluxo completo de empréstimo
1. Acessar `/emprestimos/cadastrar.php`
2. Selecionar usuário válido
3. Selecionar equipamento disponível
4. Definir data prevista de devolução (futuro)
5. Adicionar observação opcional
6. Submeter formulário
7. **Esperado**: redirect para listar.php com mensagem de sucesso
8. **Verificar**: empréstimo aparece na listagem com status "pendente"

### Teste 2: Validação de equipamento indisponível
1. Tentar cadastrar empréstimo com equipamento já emprestado (status pendente/atrasado)
2. **Esperado**: mensagem de erro "Este equipamento já está emprestado"

### Teste 3: Validação de CSRF
1. Acessar cadastrar.php, copiar o HTML do formulário
2. Modificar o token CSRF para valor inválido
3. Submeter via curl ou ferramenta similar
4. **Esperado**: mensagem "Sessão inválida"

### Teste 4: Validação de autenticação
1. Acessar `/emprestimos/listar.php` sem estar logado
2. **Esperado**: redirect para `/login.php`

### Teste 5: Devolução de empréstimo
1. Acessar `/emprestimos/editar.php?id=X` (empréstimo pendente)
2. Confirmar data de devolução efetiva
3. Submeter formulário
4. **Esperado**: status muda para "devolvido", redirect para listar.php

### Teste 6: Devolução atrasada
1. Criar empréstimo com data prevista no passado (ou manipular BD)
2. Registrar devolução
3. **Esperado**: status muda para "atrasado"

### Teste 7: Relatório de atrasados
1. Acessar `/emprestimos/atrasados.php`
2. **Esperado**: lista apenas empréstimos com status "atrasado"
3. **Verificar**: coluna "Dias em Atraso" calculada corretamente

### Teste 8: Filtros na listagem
1. Acessar `/emprestimos/listar.php`
2. Buscar por nome de usuário
3. **Esperado**: resultados filtrados
4. Filtrar por status
5. **Esperado**: apenas empréstimos do status selecionado

### Teste 9: XSS prevention
1. Cadastrar empréstimo com observação contendo `<script>alert('xss')</script>`
2. **Esperado**: script exibido como texto, não executado

### Teste 10: Responsividade mobile
1. Acessar todas as telas em viewport mobile (375px)
2. **Esperado**: layout funcional, botões acessíveis, tabela com scroll horizontal

## Riscos Identificados
1. **Status do equipamento não atualizado**: ao criar empréstimo, o status do equipamento na tabela `equipamentos` não é atualizado para "emprestado". Isso permite empréstimo duplicado se a verificação falhar.
2. **Sem transação SQL**: a operação de criar empréstimo não usa transação, podendo deixar dados inconsistentes em caso de erro parcial.
3. **Sem paginação**: listar.php não implementa paginação real (LIMIT/OFFSET), pode ficar lento com muitos registros.
4. **Modelo do Dev indisponível**: o Dev Full Stack Local não pode executar tarefas porque o modelo `qwen2.5-coder:14b-16k` não existe no Ollama local.

## Critérios de Aceite
1. Todos os 10 testes manuais passam
2. Nenhum erro PHP nos logs do Docker
3. Dados consistentes no banco após cada operação
4. Interface responsiva em mobile e desktop

## Agente de Revisão
- Executor Segurança Offline: validar SQL injection, XSS, CSRF
- CEO Técnico Local: aprovação final

## Pré-requisitos
- Docker rodando (app + db)
- Dados de teste no banco (usuários e equipamentos)
- LIM-132 resolvida (modelo do Dev) OU CEO executa como continuidade segura
