# Revisao da planilha G4 e reconstrucao mobile-first

## Fonte analisada

Planilha Google Sheets: `Planilha Grupo - 4 - fonte e placas de explanção`.

Arquivo analisado em 2026-07-03.

## Resultado da analise

A aba principal `Inventario G4` possui 19 registros uteis de fontes/placas de expansao. A estrutura encontrada inclui:

- ID de controle
- turma
- grupo
- categoria
- tipo/componente
- fabricante
- modelo
- numero de serie/identificacao
- potencia nominal
- certificacao
- potencia real comprovada
- conectores Molex, SATA, PCIe GPU e CPU/EPS
- especificacao principal
- estado fisico
- teste realizado
- resultado
- evidencia de teste
- localizacao
- responsavel tecnico
- responsavel de registro
- data de teste
- preco de referencia
- proxima acao
- observacoes
- link da foto

## Resumo anonimizado

- Total de registros: 19
- Turmas: 4A = 10, 4B = 9
- Resultado: Funciona = 9, Em analise = 7, Precisa de manutencao = 2, Nao funciona = 1
- Estado fisico: Usado = 15, Danificado = 2, Sucata = 2
- Proximas acoes: Reparar = 5, Retestar = 5, Professor validar = 4, Guardar = 2, Pesquisar especificacoes = 2, Descartar = 1

Os nomes dos alunos/responsaveis foram substituidos por aliases `aluno_###` nos PDFs gerados localmente.

## Alteracao no Supabase

Foi criada a tabela:

```sql
lab_hardware.pecas
```

E a view publica transicional:

```sql
public.lab_hardware_pecas
```

A tabela usa campos principais para busca/listagem e campo `dados jsonb` para preservar informacoes adicionais da planilha durante a transicao.

## Importacao

Foram importados 17 registros diretamente para `lab_hardware.pecas`. Dois registros da planilha foram bloqueados pelo conector de banco durante a importacao automatica e ficaram pendentes para reimportacao assistida.

## Requisitos funcionais atualizados

1. O sistema deve ter modulo principal de pecas.
2. A tela inicial deve priorizar inventario, resultado de teste e proxima acao.
3. A interface deve ser mobile-first, usando cards no celular e tabela apenas em telas largas.
4. Cada peca deve ter ficha individual pronta para QR Code.
5. O sistema deve permitir importacao futura da planilha Google Sheets.
6. O sistema deve manter dados anonimizados para relatorios compartilhaveis.
7. O banco Supabase passa a ser a fonte canonica; a planilha deixa de ser fonte definitiva apos a migracao.

## Pendencias tecnicas

1. Reimportar os 2 registros pendentes.
2. Substituir views publicas por APIs server-side ou RLS adequado.
3. Remover codigo legado PHP e workarounds temporarios.
4. Reescrever o app em estrutura mobile-first limpa.
5. Criar telas `/pecas`, `/pecas/[id]`, dashboard e fluxo de QR Code.
6. Criar testes e healthcheck final.
