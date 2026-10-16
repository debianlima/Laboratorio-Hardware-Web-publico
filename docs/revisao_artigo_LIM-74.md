# Revisão acadêmica — LIM-74

Data: 2026-05-19
Arquivo revisado: `docs/artigo.html`

## Escopo verificado

1. Existência do artigo HTML.
2. Estrutura acadêmica mínima.
3. Presença e integridade de imagens/diagramas.
4. Coerência com o estado atual do projeto.
5. Divergência com `README.md`, `AGENTS.md`, `BACKLOG_MOBILE_FIRST.md`, `CHECKLIST_AUDITORIA.md` e `PENDENCIAS.md`.
6. Exposição indevida de dados sensíveis.
7. Clareza para acompanhamento acadêmico.

## Resultado objetivo

- `docs/artigo.html` existe e está preenchido.
- A estrutura mínima exigida está presente, incluindo resumo, abstract, introdução, objetivos, metodologia, arquitetura, protótipos, banco de dados, pendências, próximos passos e conclusão.
- O artigo usa diagramas SVG inline e protótipos HTML/CSS locais; não foram encontradas referências quebradas de imagens externas na verificação textual.
- Não foram encontrados tokens, chaves, segredos, credenciais reais ou URLs privadas. As menções a senha referem-se a modelagem e boas práticas (`bcrypt`), não a dados vazados.
- O texto continua útil para orientação do professor e dos alunos, mas precisa de ajustes de consistência antes de ser considerado encerrado.

## Achados

1. **Médio — Divergência institucional no resumo em inglês**
- Evidência: `docs/artigo.html:377`
- Problema: o abstract menciona instituição diferente do restante do documento.
- Impacto: erro factual em contexto acadêmico.

2. **Médio — Contradição entre módulos implementados e pendências**
- Evidência: `docs/artigo.html:1211-1214`, `docs/artigo.html:1469-1470`, `docs/artigo.html:1506-1507`
- Problema: o artigo afirma conclusão de partes de relatórios/dashboard e, ao mesmo tempo, mantém relatórios e agendamentos como pendentes sem delimitar claramente o que foi entregue.
- Impacto: reduz a confiabilidade do acompanhamento executivo/acadêmico.

3. **Baixo — Referência nominal inconsistente para arquivo do repositório**
- Evidência: `docs/artigo.html:1230`, raiz do repositório com `Requisitos .docx`
- Problema: o nome citado no artigo não corresponde exatamente ao nome observado no workspace.
- Impacto: ambiguidade documental.

4. **Médio — Divergência operacional com `AGENTS.md`**
- Evidência: `AGENTS.md`
- Problema: o arquivo instrucional aponta `Diretório local: /home/opc/workspaces/laboratorio_hardware_2025`, enquanto o workspace ativo está em `/home/user/workspaces/laboratorio_hardware_2025`.
- Impacto: risco de execução em diretório incorreto e perda de rastreabilidade operacional.

5. **Baixo — Divergência com `PENDENCIAS.md`**
- Evidência: `PENDENCIAS.md`
- Problema: o artigo descreve o estado do sistema, mas `PENDENCIAS.md` registra risco operacional de branch/worktree que não aparece no documento acadêmico.
- Impacto: baixo para o artigo final, mas relevante para acompanhamento de execução.

6. **Médio — Arquivos de comparação pedidos pela issue não existem**
- Evidência: ausência de `BACKLOG_MOBILE_FIRST.md` e `CHECKLIST_AUDITORIA.md` no workspace
- Problema: a revisão não consegue atestar convergência com esses dois artefatos porque eles não estão presentes no repositório atual.
- Impacto: critério de conferência parcialmente não verificável.

## Parecer

O artigo está **substancialmente completo** e **não apresenta vazamento evidente de dados sensíveis**, mas ainda possui inconsistências de rastreabilidade e de estado funcional. A revisão técnica deste heartbeat considera a `LIM-74` pronta para **validação humana final**, não para encerramento automático sem essa validação.

## Encaminhamento recomendado

- Colocar a issue em `in_review`.
- Revisor humano/orientador deve validar os achados 1, 2 e 6 antes de marcar `done`.
