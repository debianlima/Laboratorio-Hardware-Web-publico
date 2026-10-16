# Revisão acadêmica — LIM-66

Data: 2026-05-19
Arquivo revisado: `docs/artigo.html`

## Achados (priorizados)

1. **Alta — Inconsistência institucional no Abstract (tradução incorreta)**
- Evidência: `docs/artigo.html:377`
- Problema: o texto em inglês cita "Federal Institute of Rio de Janeiro", enquanto o restante do documento cita corretamente Instituto Federal Fluminense (IFF).
- Recomendação: padronizar para "Federal Fluminense Institute" (ou equivalente institucional oficial em inglês) para evitar erro factual.

2. **Média — Contradição de status do módulo de relatórios**
- Evidência: `docs/artigo.html:1211-1214` vs `docs/artigo.html:1508`
- Problema: seção 12.5 afirma "CRUD completo ... com dashboard", mas em pendências há "Relatórios Avançados" como pendente sem delimitar o que já está pronto.
- Recomendação: explicitar escopo entregue (CRUD básico) e escopo pendente (analytics/exports/gráficos avançados).

3. **Média — Referência de arquivo não corresponde exatamente ao nome real no repositório**
- Evidência: `docs/artigo.html:1230`
- Problema: documento cita `Requisitos.docx`, porém o nome presente na raiz está como `Requisitos .docx` (com espaço antes de `.docx`).
- Recomendação: ajustar nome citado no artigo ou renomear o arquivo no projeto para eliminar ambiguidade bibliográfica.

4. **Média — Metodologia menciona BPMN sem artefato explícito no artigo**
- Evidência: `docs/artigo.html:401`
- Problema: a introdução declara cobertura de BPMN, mas o corpo do artigo enfatiza DFD/DER/casos de uso sem seção BPMN claramente identificada.
- Recomendação: incluir seção/figura BPMN ou remover BPMN da promessa metodológica.

5. **Baixa — Referências institucionais de grupos sem autoria nominal**
- Evidência: `docs/artigo.html:1550-1560`
- Problema: entradas como "GRUPO 5 E 1" e "GRUPO 4" podem ser insuficientes para rastreabilidade acadêmica formal.
- Recomendação: incluir nomes dos autores/discentes (quando permitido) ou padrão institucional de autoria coletiva definido pela orientação.

## Verificação de coerência com o código

- Repositório principal `src/` contém módulos de autenticação e CRUD de itens.
- Módulo de relatórios existe em pasta separada (`Modulo_4_relatorios/`), o que sustenta parcialmente a afirmação de implementação.
- Itens pendentes de empréstimos/agendamentos permanecem coerentes com o artigo.

## Parecer

O artigo está **estruturalmente sólido** e com boa cobertura técnica, mas possui pontos de **precisão institucional e consistência interna** que devem ser corrigidos antes de submissão formal.
