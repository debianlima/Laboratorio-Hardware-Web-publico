# PLANO EXECUTIVO — LIM-13

**Data:** 2026-05-19
**Autor:** CEO Técnico Local (b8ce4322)
**Projeto:** Laboratório de Hardware 2025 — IFF

---

## 1. Estado Atual

### Objetivo Geral do Projeto
Sistema **mobile-first** para controle do Laboratório de Hardware do IFF, permitindo gestão de equipamentos, empréstimos, agendamentos e relatórios.

### Stack Tecnológica
| Camada | Tecnologia |
|--------|-----------|
| Backend | PHP 8 |
| Banco | MySQL 8.0 |
| Frontend | Bootstrap 5 |
| Infra | Docker (docker-compose) |
| AI/ML | Ollama local (11434) + GPU remota (172.16.0.110) |

### Módulos Implementados
| Módulo | Status | Arquivos |
|--------|--------|----------|
| Login/Auth | ✅ Concluído | `src/login.php`, `src/logout.php`, `src/config/auth.php`, `src/config/csrf.php` |
| CRUD Itens | ✅ Concluído | `src/itens/` (cadastrar, editar, excluir, listar, ver, qrcode) |
| QR Code | ✅ Concluído | `src/itens/qrcode.php`, `src/itens/ver.php` |
| Empréstimos | ⏳ Pendente | Specs prontas (`REQ_EMPRESTIMOS_MODULE.md`), tabela `emprestimos` existe no BD |
| Relatórios | ⏳ Parcial | Pasta `Modulo_4_relatorios/` existe, sem implementação |
| Fórum | ⏳ Pendente | Pasta `Modulo_5_forum/` existe, sem implementação |

### Infraestrutura
- **Docker:** app + db rodando (porta 8080)
- **Paperclip API:** REMOTA offline (129.80.26.136:3100), LOCAL online (localhost:3100)
- **Git:** branch `main`, 2 commits ahead de origin, CRUD itens commitado
- **Ollama:** 4 modelos locais + 2 modelos GPU remota

### Agentes Configurados
| Agente | ID | Status |
|--------|-----|--------|
| CEO Técnico Local | b8ce4322 | running |
| Dev Full Stack Local | c0d75cdc | idle |
| Codex Revisor | b68d848d | idle |
| Documentador Acadêmico Free | f1b0f6c7 | idle |
| Analista de Negócios Free | novo | idle |
| Executor Segurança Offline | 9e4a7b1f | idle |
| Gemini Supervisor | 42e1e973 | ERROR (adapter_failed) |

---

## 2. Fases do Projeto

### Fase 1 — Fundação (CONCLUÍDA)
- [x] Ambiente Docker configurado
- [x] Banco de dados com schema inicial
- [x] Sistema de login/auth com CSRF
- [x] CRUD de itens/equipamentos
- [x] QR Code para identificação de componentes
- [x] Correção de root path pós-migração

### Fase 2 — Núcleo Operacional (PRÓXIMA)
- [ ] Módulo de Empréstimos (CRUD completo + atrasados)
- [ ] Integração entre módulos (itens ↔ empréstimos ↔ usuários)
- [ ] Revisão de segurança OWASP Top 10

### Fase 3 — Expansão (PLANEJADA)
- [ ] Módulo de Relatórios (Modulo_4_relatorios)
- [ ] Módulo de Fórum (Modulo_5_forum)
- [ ] Agendamentos de laboratório
- [ ] Notificações de atraso

### Fase 4 — Maturidade (FUTURA)
- [ ] Dashboard administrativo
- [ ] Exportação de dados (PDF, CSV)
- [ ] Testes automatizados
- [ ] Deploy em produção

---

## 3. Backlog Sugerido

### Alta Prioridade (Sprint 1 — Imediato)
| ID | Tarefa | Agente | Esforço |
|----|--------|--------|---------|
| EMP-01 | Model + DB access layer para empréstimos | Dev Full Stack | Médio |
| EMP-02 | Controller de empréstimos (listar, cadastrar, editar, excluir) | Dev Full Stack | Médio |
| EMP-03 | Views mobile-first (listar, cadastrar, editar, atrasados) | Dev Full Stack | Médio |
| SEC-01 | Revisão de segurança OWASP Top 10 (itens + empréstimos) | Executor Segurança | Médio |

### Média Prioridade (Sprint 2)
| ID | Tarefa | Agente | Esforço |
|----|--------|--------|---------|
| REL-01 | Módulo de relatórios (estrutura base) | Dev Full Stack | Alto |
| DOC-01 | Revisão final do artigo acadêmico | Documentador | Baixo |
| CFG-01 | Limpar duplicatas no board (LIM-47, 48, 49) | Humano | Baixo |

### Baixa Prioridade (Sprint 3+)
| ID | Tarefa | Agente | Esforço |
|----|--------|--------|---------|
| FOR-01 | Módulo de fórum | Dev Full Stack | Alto |
| AGD-01 | Agendamentos de laboratório | Dev Full Stack | Alto |
| PERF-01 | Otimizações de performance | Dev Full Stack | Baixo |

---

## 4. Tarefas para o Dev Full Stack Local

**Prioridade 1 — Módulo Empréstimos (LIM-41/42/43):**
1. Criar `src/models/EmprestimoModel.php` — acesso à tabela `emprestimos`
2. Criar `src/controllers/EmprestimoController.php` — lógica de negócio
3. Criar `src/emprestimos/listar.php` — listagem paginada com filtros
4. Criar `src/emprestimos/cadastrar.php` — formulário com validação
5. Criar `src/emprestimos/editar.php` — edição + registro de devolução
6. Criar `src/emprestimos/excluir.php` — exclusão restrita (só pendentes)
7. Criar `src/emprestimos/atrasados.php` — relatório de atrasos
8. Seguir padrão de `src/itens/` como referência
9. Usar prepared statements, htmlspecialchars, auth middleware, CSRF

**Prioridade 2 — Módulo Relatórios (após empréstimos):**
1. Estruturar `Modulo_4_relatorios/` com base CRUD
2. Relatório de inventário, empréstimos ativos, histórico

---

## 5. Tarefas que Exigem Aprovação Humana

| Tarefa | Motivo | Impacto |
|--------|--------|---------|
| Deploy em produção | Política de segurança | Irreversível sem rollback |
| Cancelar duplicatas LIM-47/48/49 | Alteração de estado do board | Limpeza de backlog |
| Corrigir adapter Gemini Supervisor | Configuração de modelo | Requer credenciais/acesso |
| Decisão sobre LIM-7 (MODELO_DADOS) | Arquivo inexistente | Reescrever issue ou criar arquivo |
| Autoria nas referências do artigo | Decisão acadêmica | "GRUPO 5 E 1", "GRUPO 4" |
| Migration destrutiva no BD | Risco de perda de dados | Irreversível |
| Alteração de secrets/.env | Segurança | Credenciais expostas |

---

## 6. Riscos

### Riscos Técnicos
| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Paperclip API remota offline | ALTA (já ocorrendo) | ALTO — sem atualização de board | Usar API local localhost:3100; solicitar restauração remota |
| Gemini Supervisor em erro | ALTA (adapter_failed) | MÉDIO — sem auditoria automática | Reconfigurar adapter ou trocar para opencode_local |
| Inconsistência de dados em empréstimos | MÉDIA | MÉDIO — FKs órfãs | ON DELETE RESTRICT; validação em camada de aplicação |
| Divergência de status calculado vs armazenado | BAIXA | BAIXO | Calcular status baseado nas datas na consulta |
| Dev Full Stack ocioso prolongado | ALTA (5 verificações sem execução) | ALTO — atraso no cronograma | Atribuir formalmente e cobrar execução |

### Riscos de Segurança
| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| SQL Injection | BAIXA (se seguir padrões) | CRÍTICO | Prepared statements obrigatórios |
| XSS | BAIXA (se seguir padrões) | ALTO | htmlspecialchars() em toda saída |
| CSRF | BAIXA (tokens já implementados) | ALTO | Reutilizar `src/config/csrf.php` |
| Acesso não autenticado | BAIXA (middleware existe) | ALTO | `requererLogin()` em todas as páginas |
| Dados sensíveis em logs | MÉDIA | MÉDIO | Não logar senhas, tokens, dados pessoais |

### Riscos de Deploy
| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Deploy sem autorização | BAIXA (bloqueado por política) | CRÍTICO | Nunca deploy sem `start_deploy` |
| Migration destrutiva | BAIXA | CRÍTICO | Autorização humana obrigatória |
| Docker com volumes não persistidos | BAIXA | ALTO | Volume `db_data` já configurado |
| Porta 8080 conflitando | BAIXA | MÉDIO | Configurar `APP_PORT` no `.env` |

---

## 7. Sequência de Execução Mobile-First

### Princípios
1. **Mobile-first:** Todas as views devem funcionar em telas pequenas (320px+) antes de desktop
2. **Bootstrap 5:** Usar grid system, componentes responsivos, breakpoints padrão
3. **Progressive enhancement:** Funcionalidade básica primeiro, melhorias depois
4. **Segurança por padrão:** Auth + CSRF + prepared statements em cada arquivo novo

### Ordem de Execução
```
1. Model (EmprestimoModel.php)          → Dev Full Stack
2. Controller (EmprestimoController.php) → Dev Full Stack
3. View: listar.php (mobile-first)       → Dev Full Stack
4. View: cadastrar.php (mobile-first)    → Dev Full Stack
5. View: editar.php (mobile-first)       → Dev Full Stack
6. View: excluir.php                     → Dev Full Stack
7. View: atrasados.php (mobile-first)    → Dev Full Stack
8. Revisão de segurança (OWASP Top 10)   → Executor Segurança
9. Testes manuais mobile + desktop       → Dev Full Stack
10. Revisão de código                    → Codex Revisor
```

### Padrão de Cada View
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Container `container-fluid` com padding responsivo
- Tabelas com `table-responsive` para scroll horizontal em mobile
- Botões com `btn-block` em mobile, `btn` em desktop
- Forms com labels claros e validação visual
- Flash messages com alert Bootstrap (sucesso/erro)

---

## 8. Próxima Ação Recomendada

**IMEDIATA:** Atribuir LIM-41/42/43 (Módulo Empréstimos) ao Dev Full Stack Local e iniciar execução.

**Justificativa:**
- Specs prontas em `REQ_EMPRESTIMOS_MODULE.md`
- Child issues documentadas em `docs/child_issue_LIM-41-controller.md` e `docs/child_issue_LIM-42-model.md`
- Tabela `emprestimos` já existe no banco com schema completo
- Dev Full Stack está ocioso há 5+ verificações consecutivas
- É a funcionalidade mais crítica pendente após CRUD de itens

**Sequência:**
1. CEO Técnico: criar child issue de empréstimos e atribuir ao Dev Full Stack
2. Dev Full Stack: iniciar pelo Model → Controller → Views (ordem acima)
3. Executor Segurança: revisar após implementação
4. Codex Revisor: revisão final de código

---

*Documento gerado automaticamente pelo CEO Técnico Local como parte da issue LIM-13.*
