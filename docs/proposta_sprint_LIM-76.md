# Proposta de Priorização de Sprint — Laboratório de Hardware 2025

**Issue:** LIM-76 GUT  
**Data:** 2026-05-19  
**Responsável:** Analista de Negócios Free  
**Metodologia:** Matriz GUT (Gravidade × Urgência × Tendência)

---

## 1. Objetivo do Sprint

Desbloquear o projeto removendo pendências críticas, priorizando issues que desbloqueiam o módulo de Empréstimos e limpando o backlog de issues bloqueadas/duplicadas.

---

## 2. Matriz GUT — Issues Recomendadas

| ID | Issue | G | U | T | GUT Score | Prioridade |
|----|-------|---|---|---|-----------|------------|
| LIM-45 | Abrir PR do módulo itens | 5 | 4 | 4 | **80** | CRÍTICA |
| LIM-41 | Implementar controller/emprestimos | 5 | 3 | 4 | **60** | ALTA |
| LIM-42 | Implementar model/emprestimos | 4 | 3 | 4 | **48** | ALTA |
| LIM-43 | Implementar view/emprestimos | 4 | 3 | 4 | **48** | ALTA |
| LIM-38 | Verificar branch CRUD-itens | 3 | 5 | 3 | **45** | ALTA |
| LIM-55 | Revisar artigo acadêmico | 3 | 4 | 3 | **36** | MÉDIA |
| LIM-51 | Auditoria tarefas bloqueadas | 2 | 4 | 3 | **24** | MÉDIA |
| LIM-66 | Revisão artigo LIM-66 | 2 | 3 | 3 | **18** | MÉDIA |
| LIM-74 | Revisão artigo LIM-74 | 2 | 3 | 3 | **18** | MÉDIA |
| LIM-7 | Revisar MODELO_DADOS_INICIAL | 2 | 2 | 2 | **8** | BAIXA |
| LIM-53 | Revisar PRs abertos | 2 | 2 | 2 | **8** | BAIXA |
| LIM-49 | CEO verificar Dev ocioso | 1 | 2 | 2 | **4** | BAIXA |

### Legenda GUT:
- **G (Gravidade):** Severidade do impacto no projeto (1=baixo, 5=crítico)
- **U (Urgência):** Necessidade de resolução imediata (1=pode esperar, 5=urgente)
- **T (Tendência):** Probabilidade de agravamento (1=estável, 5=piora rápido)

---

## 3. Criteria de Aceite

### Para LIM-45 (Abrir PR):
- [ ] Branch `feature/lim-19-crud-itens` com commits verificados (29e1f9a, 5238b28)
- [ ] Pull Request criado no repositório debianlima/laboratorio_hardware_2025
- [ ] Link do PR documentado no board

### Para LIM-41/42/43 (Módulo Empréstimos):
- [ ] Controller `emprestimos` criado em `src/emprestimos/index.php`
- [ ] Model `Emprestimo` criado com métodos: criar(), listar(), devolver(), historico()
- [ ] Views: listar.php, criar.php, devolver.php
- [ ] Rotas definidas em `src/routes.php`
- [ ] Teste de integração: CRUD completo de empréstimos

### Para LIM-38, LIM-51, LIM-55 (Desbloqueio):
- [ ] Status atualizado no board: LIM-38 → done
- [ ] Status atualizado no board: LIM-51 → done
- [ ] Status atualizado no board: LIM-55 → done (trabalho concluído via LIM-66)

---

## 4. Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Paperclip API continua offline | ALTA | CRÍTICO | Ações manuais no board; aguardar restauração |
| Adapter CEO continua falhando | ALTA | ALTO | Limpar duplicatas; usar outro agente para distribuição |
| Conflito de dependência (LIM-45) | MÉDIA | ALTO | Priorizar LIM-45 antes de LIM-41/42/43 |
| Divergência de path (/home/opc/ vs /home/user/) | MÉDIA | MÉDIO | Corrigir AGENTS.md antes de executar |
| Dev Full Stack ocioso | ALTA | MÉDIO | Atribuir LIM-41/42/43 imediatamente |

---

## 5. Dependências

```
LIM-45 (ABRIR PR)
    ↓
LIM-41/42/43 (MÓDULO EMPRÉSTIMOS)
    ↓
LIM-46 (FECHAR EMPRÉSTIMO) ← Depends on LIM-41/42/43

LIM-38 → DONE (já verificado)
LIM-51 → DONE (auditoria concluída)
LIM-55 → DONE (revisão concluída via LIM-66)

BLOQUEADOS ATÉ LIM-45:
- LIM-46 (Fechar empréstimo)
- LIM-53 (Revisar PRs)
```

---

## 6. Recomendação de Execução

### Sprint 1 (Curto prazo — 1 dia):
1. **Correção crítica:** Corrigir path em `AGENTS.md` (/home/opc/ → /home/user/)
2. **Desbloqueio:** Atualizar status de LIM-38, LIM-51, LIM-55 → done
3. **Limpeza:** Cancelar duplicatas (LIM-47, LIM-48, LIM-49)

### Sprint 2 (Médio prazo — 2-3 dias):
1. **Prioridade máxima:** LIM-45 abrir PR
2. **Implementação:** LIM-41/42/43 módulo empréstimos
3. **Revisão:** LIM-66, LIM-74 → in_review para validação humana

### Sprint 3 (Longo prazo — backlog):
1. LIM-7 (MODELО_DADOS_INICIAL) — criar arquivo ou arquivar
2. LIM-53 (Revisar PRs) — após LIM-45 resolvido
3. Items de backlog: LIM-1, LIM-5, LIM-9

---

## 7. Próximos Passos

- [ ] Validar esta proposta com o CEO Técnico
- [ ] Autorizar início da execução
- [ ] Atribuir issues ao Dev Full Stack Local / Ollama
- [ ] Restaurar servidor Paperclip para atualizar board

---

**Documento gerado por:** Analista de Negócios Free  
**Baseado em:** AUDITORIA_TAREFAS.md (55 issues analisadas)  
**Data de geração:** 2026-05-19