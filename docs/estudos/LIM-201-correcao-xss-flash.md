# Estudo de Correção — LIM-201: Corrigir XSS em Flash Messages

**Data:** 2026-05-20
**Issue:** LIM-201
**Executor sugerido:** Dev Full Stack Local
**Prioridade:** ALTA (correspondente ao achado ALTO #1 da LIM-200)

---

## Objetivo

Corrigir vulnerabilidade de XSS (Cross-Site Scripting) em flash messages identificada na auditoria LIM-200.

## Arquivo Envolvido

- `src/config/flash.php:20`

## Problema Identificado

A função `exibirMensagem()` usa `strip_tags()` com lista de tags permitidas:
```php
$mensagem = strip_tags($_SESSION['flash']['mensagem'], '<a><strong><b><em><i><br><ul><ol><li>');
```

**Risco:** `strip_tags` mantém atributos das tags permitidas. Um payload como `<a onclick="alert('XSS')">link</a>` passaria intacto, permitindo injeção de JavaScript.

## Solução Proposta

Substituir `strip_tags` por `htmlspecialchars()` com escape completo:

```php
function exibirMensagem() {
    if (isset($_SESSION['flash'])) {
        $tipo = htmlspecialchars($_SESSION['flash']['tipo'], ENT_QUOTES, 'UTF-8');
        $mensagem = htmlspecialchars($_SESSION['flash']['mensagem'], ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
        echo "<div class='alert alert-{$tipo} mb-3'>{$mensagem}</div>";
        unset($_SESSION['flash']);
    }
}
```

## Impacto

- **Segurança:** Elimina vetor de XSS em flash messages
- **Funcionalidade:** Mensagens flash continuarão funcionando, mas sem HTML permitido
- **Interface:** Nenhuma mudança visual para mensagens normais
- **Risco:** Baixo — alteração pontual e reversível

## Critérios de Aceite

1. Flash messages exibem texto escapado corretamente
2. Nenhum JavaScript pode ser injetado via mensagem flash
3. Teste manual: criar mensagem com `<script>alert('XSS')</script>` e verificar que é exibido como texto
4. Teste manual: criar mensagem com `<a onclick="alert('XSS')">link</a>` e verificar que é exibido como texto

## Plano de Teste

1. Acessar sistema e realizar ação que gera flash message
2. Verificar que mensagem aparece corretamente
3. Tentar injetar payload XSS via manipulação de sessão
4. Verificar que payload é exibido como texto, não executado

## Riscos

- Nenhum risco significativo identificado
- Alteração é reversível via git

---

*Estudo criado como parte da issue LIM-201 — Correção de XSS em flash messages*
