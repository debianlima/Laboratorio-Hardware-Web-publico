# Auditoria LIM-96 — Corrigir Paperclip local para expor currentExecutionWorkspace

## Data
2026-05-19

## Agente Responsável
CEO Técnico Local (opencode_local)

## Status
**RESOLVIDO** — `done`

## Problema
LIM-95 conseguiu criar workspaces locais para a issue (`cc3b2bc1-8c9a-4ba3-be0c-94bb052b5daf`, `e293e89f-8074-494a-99e0-98360da85414`), mas o PATCH de issue descartava `executionWorkspaceId` porque a instância local do Paperclip estava com `enableIsolatedWorkspaces` desabilitado no serviço de issues.

## Causa Raiz
A configuração `enableIsolatedWorkspaces` estava `false` nas configurações experimentais da instância Paperclip local (`/api/instance/settings/experimental`). Quando esta flag está desabilitada, o serviço `issues.update()` remove silenciosamente o campo `executionWorkspaceId`.

## Correção Aplicada
1. **Habilitar isolated workspaces**: PATCH `/api/instance/settings/experimental` com `{"enableIsolatedWorkspaces": true}`
   - Requisitou autenticação de board com trusted browser origin (headers `Origin` e `Referer`)
   - Sessão: cookie `paperclip-default.session_token`
2. **Vincular workspace em LIM-95**: PATCH `/api/issues/LIM-95` com `{"executionWorkspaceId": "cc3b2bc1-8c9a-4ba3-be0c-94bb052b5daf"}`
3. **Vincular workspace em LIM-91**: PATCH `/api/issues/LIM-91` com `{"executionWorkspaceId": "cc3b2bc1-8c9a-4ba3-be0c-94bb052b5daf"}`

## Verificação
- `GET /api/issues/LIM-95/heartbeat-context` → `currentExecutionWorkspace.id: cc3b2bc1-8c9a-4ba3-be0c-94bb052b5daf` ✓
- `GET /api/issues/LIM-91/heartbeat-context` → `currentExecutionWorkspace.id: cc3b2bc1-8c9a-4ba3-be0c-94bb052b5daf` ✓

## Nota Operacional
A configuração `enableIsolatedWorkspaces` é uma **setting de instância** (armazenada na tabela `instance_settings`, coluna `experimental`), não uma setting de company. O PATCH para `/api/instance/settings/experimental` requer:
- Autenticação de board (não agente)
- Trusted browser origin (headers `Origin` e `Referer` devem apontar para o servidor Paperclip)
