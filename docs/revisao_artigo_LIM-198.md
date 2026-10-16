# Revisão Técnica — LIM-198 (Revisar artigo acadêmico do projeto)

## Contexto da revisão
- Data: 2026-05-20
- Revisor: Codex Revisor
- Escopo: coerência técnica e aderência do artigo com a implementação atual
- Arquivo principal revisado: `docs/artigo.html`

## Critérios de aceite considerados
1. Estrutura acadêmica mínima presente (resumo, abstract, metodologia, conclusão, referências).
2. Conteúdo técnico coerente com o estado real do código.
3. Sem exposição de dados sensíveis.
4. Documento com navegação íntegra (sumário/âncoras).

## Achados (prioridade por severidade)

### 1) ALTO — Divergência entre regra de permissão documentada e implementação real
- Evidência no artigo: `docs/artigo.html:519` descreve controle por tipo `administrador`.
- Evidência no código de autenticação: `src/config/auth.php:11` e `src/config/auth.php:23` usam coluna `role` e papéis `admin/librarian`.
- Evidência no login/sessão: `src/login.php:26` e `src/login.php:39` usam coluna/campo `tipo`.
- Risco: o artigo afirma uma regra de negócio (RN-02) diferente da implementação de autorização; isso compromete rastreabilidade acadêmica e pode mascarar bug de permissão em produção.
- Ação recomendada: unificar modelo de autorização (escolher `tipo` ou `role`), alinhar código e então atualizar texto do artigo para o modelo final.

### 2) MÉDIO — Duas versões do artigo com conteúdo conflitante
- Evidência: `docs/artigo.html:313` (versão 2.1) e `src/doc/artigo.html:286` (versão 2.0).
- Evidência de conflito de status funcional:
  - `docs/artigo.html:1217` diz relatórios pendentes (parcial).
  - `src/doc/artigo.html:1071` diz CRUD de relatórios completo.
- Risco: auditoria e publicação interna podem consumir a versão errada e gerar parecer inconsistente.
- Ação recomendada: definir `docs/artigo.html` como fonte única oficial e remover/sinalizar `src/doc/artigo.html` como legado.

## Verificações sem achados
- Sumário/âncoras internas de `docs/artigo.html`: íntegros (sem links quebrados).
- Exposição de segredo/token no artigo: não identificada.
- Estrutura acadêmica mínima: presente.

## Limitações de validação
- Não foi possível executar lint PHP local (`php` indisponível no ambiente desta revisão), portanto a validação de execução ficou restrita à inspeção estática.

## Parecer técnico
- Status: **APROVAÇÃO CONDICIONAL**.
- Condição para aprovação plena: corrigir o achado ALTO (modelo de permissão inconsistente) e resolver a duplicidade de artigo (achado MÉDIO).
