# Revisão completa e conversão para Vercel/Supabase

## Resumo executivo

O projeto original foi desenvolvido como uma aplicação PHP tradicional, com MySQL/mysqli, sessão PHP e páginas em `src/`. Essa arquitetura funciona bem em Apache, Docker, XAMPP, VPS, Render/Railway/Fly.io, mas apresentou incompatibilidade no Vercel porque dependia do runtime comunitário `vercel-php`.

O build do Vercel chegou a passar, mas a função quebrava antes de executar o PHP com o erro:

```text
ERR_MODULE_NOT_FOUND: Cannot find module '/var/task/launcher.launcher'
```

Como esse erro ocorre dentro do runtime comunitário e não no código da aplicação, a solução aplicada foi converter o projeto para uma base oficial do Vercel: Next.js + Node.js + PostgreSQL/Supabase.

## Estado do Supabase

Projeto Supabase usado:

```text
ykfmtwgothboynddthsd
```

Foi criado o schema separado:

```text
lab_hardware
```

Tabelas existentes no schema:

- `lab_hardware.usuarios`
- `lab_hardware.laboratorios`
- `lab_hardware.equipamentos`
- `lab_hardware.tipos_itens`
- `lab_hardware.emprestimos`
- `lab_hardware.agendamentos`
- `lab_hardware.itens`
- `lab_hardware.login_attempts`

A escolha por schema separado foi necessária porque o schema `public` já possuía uma tabela `usuarios` com `id uuid`, diferente do sistema de laboratório, que usa `id integer`.

## Alerta de segurança Supabase

O Supabase informou que as tabelas em `lab_hardware` estão com RLS desativado. Para esta conversão, o acesso ao banco é feito pelo servidor Next.js usando conexão PostgreSQL, não pelo cliente Supabase no navegador. Nesse cenário, RLS desativado é aceitável somente se a connection string permanecer secreta no Vercel.

Se no futuro for usado `anon key` ou cliente Supabase diretamente no frontend, será obrigatório ativar RLS e criar policies.

SQL de ativação, quando forem criadas policies adequadas:

```sql
ALTER TABLE lab_hardware.usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE lab_hardware.laboratorios ENABLE ROW LEVEL SECURITY;
ALTER TABLE lab_hardware.equipamentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE lab_hardware.tipos_itens ENABLE ROW LEVEL SECURITY;
ALTER TABLE lab_hardware.emprestimos ENABLE ROW LEVEL SECURITY;
ALTER TABLE lab_hardware.agendamentos ENABLE ROW LEVEL SECURITY;
ALTER TABLE lab_hardware.itens ENABLE ROW LEVEL SECURITY;
ALTER TABLE lab_hardware.login_attempts ENABLE ROW LEVEL SECURITY;
```

Não aplicar esse SQL sozinho sem policies, porque isso bloquearia o acesso da aplicação.

## Conversão aplicada

A nova aplicação Next.js foi adicionada na raiz do repositório.

Arquivos principais:

- `package.json` — projeto Node/Next oficial.
- `vercel.json` — removido runtime PHP e configurado framework Next.js.
- `app/layout.jsx` — layout global.
- `app/page.jsx` — redireciona para login ou painel.
- `app/login/page.jsx` — login.
- `app/setup/page.jsx` — criação do primeiro administrador.
- `app/dashboard/page.jsx` — painel inicial.
- `app/itens/page.jsx` — listagem de itens.
- `app/itens/novo/page.jsx` — cadastro de item.
- `app/itens/[id]/page.jsx` — ficha pública do item, compatível com QR Code.
- `app/emprestimos/page.jsx` — listagem de empréstimos.
- `app/api/health/route.js` — healthcheck.
- `lib/db.js` — conexão PostgreSQL/Supabase.
- `lib/auth.js` — autenticação por cookie assinado.
- `app/actions.js` — server actions para login, setup e cadastro.
- `components/Nav.jsx` — navegação.

O código PHP antigo foi preservado em `src/` para consulta e migração gradual.

## Variáveis obrigatórias no Vercel

Configurar no projeto Vercel:

```text
POSTGRES_URL=postgres://...
AUTH_SECRET=uma_string_grande_aleatoria
DB_SCHEMA=lab_hardware
```

Também pode usar `DATABASE_URL` ou `SUPABASE_DB_URL` no lugar de `POSTGRES_URL`.

## Fluxo de primeiro acesso

1. Abrir `/setup`.
2. Criar o usuário administrador.
3. A tela criará também catálogos básicos de tipos/equipamentos.
4. Depois acessar `/login`.
5. Entrar no painel.

## Pendências após a conversão

### Prioridade alta

1. Configurar `POSTGRES_URL` no Vercel.
2. Configurar `AUTH_SECRET` no Vercel.
3. Testar `/api/health`.
4. Criar o primeiro administrador em `/setup`.
5. Testar login, dashboard e cadastro de item.

### Prioridade média

1. Recriar telas completas de edição/exclusão de itens.
2. Recriar fluxo completo de empréstimo e devolução.
3. Implementar QR Code visual na página do item.
4. Criar auditoria de login e rate limit equivalente ao PHP.
5. Criar scripts de seed mais completos.

### Prioridade baixa

1. Migrar todo CSS para componentes reaproveitáveis.
2. Criar testes automatizados.
3. Criar GitHub Actions para build Next.js.
4. Remover ou arquivar o PHP legado quando a conversão estiver estável.

## Conclusão

A conversão remove a dependência do runtime PHP quebrado no Vercel e coloca o projeto no caminho correto para produção em Vercel + Supabase. O sistema ainda não é uma reprodução 100% completa de todas as telas PHP, mas já possui a base funcional: autenticação, painel, listagem/cadastro/ficha pública de itens, empréstimos em leitura e healthcheck.
