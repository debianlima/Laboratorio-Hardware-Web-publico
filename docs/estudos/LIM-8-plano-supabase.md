# Plano de Uso do Supabase — Laboratório de Hardware 2025

**Issue:** LIM-8
**Autor:** CEO Técnico Local
**Data:** 2026-05-19
**Status:** Planejamento (sem migrations aplicadas)

---

## 1. Contexto Atual

O projeto usa **MySQL 8** via Docker Compose com PHP 8 + Bootstrap 5. O schema atual possui 7 tabelas:

| Tabela | Finalidade |
|---|---|
| `usuarios` | Autenticação e perfis (admin/padrao) |
| `laboratorios` | Cadastro de laboratórios do IFF |
| `equipamentos` | Controle de quantidade de equipamentos genéricos |
| `itens` | Itens individuais com patrimônio e QR Code |
| `tipos_itens` | Classificação dos itens |
| `emprestimos` | Empréstimos de equipamentos por usuários |
| `agendamentos` | Agendamento de laboratórios |

O objetivo é avaliar a migração para **Supabase (PostgreSQL)** mantendo compatibilidade funcional.

---

## 2. Tabelas no Supabase (Schema Proposto)

### 2.1 Mapping MySQL → PostgreSQL

O Supabase usa PostgreSQL. As diferenças principais de tipos:

| MySQL | PostgreSQL (Supabase) |
|---|---|
| `INT AUTO_INCREMENT` | `INT GENERATED ALWAYS AS IDENTITY` |
| `TIMESTAMP DEFAULT CURRENT_TIMESTAMP` | `TIMESTAMPTZ DEFAULT NOW()` |
| `ENUM('a','b')` | `CREATE TYPE ... AS ENUM ('a','b')` ou `CHECK` |
| `TEXT` | `TEXT` (igual) |
| `VARCHAR(n)` | `VARCHAR(n)` ou `TEXT` |

### 2.2 Schema Proposto

```sql
-- Tipos enumerados
CREATE TYPE user_role AS ENUM ('administrador', 'padrao');
CREATE TYPE lab_type AS ENUM ('redes', 'hardware', 'robotica', 'informatica_normal');
CREATE TYPE loan_status AS ENUM ('pendente', 'devolvido', 'atrasado');
CREATE TYPE schedule_status AS ENUM ('pendente', 'aprovado', 'cancelado', 'concluido');
CREATE TYPE item_status AS ENUM ('disponivel', 'emprestado', 'manutencao');

-- Perfis de usuário (estende auth.users do Supabase)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL UNIQUE,
  role user_role NOT NULL DEFAULT 'padrao',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Laboratórios
CREATE TABLE laboratorios (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  codigo VARCHAR(20) NOT NULL UNIQUE,
  lugar VARCHAR(100) NOT NULL,
  nome VARCHAR(100) NOT NULL,
  tipo lab_type NOT NULL DEFAULT 'informatica_normal',
  tecnico_responsavel TEXT,
  informacao_adicional TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tipos de itens
CREATE TABLE tipos_itens (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nome TEXT NOT NULL UNIQUE,
  descricao TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Itens individuais (patrimônio)
CREATE TABLE itens (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  codigo_patrimonio VARCHAR(50) NOT NULL UNIQUE,
  nome VARCHAR(100) NOT NULL,
  tipo_id INT REFERENCES tipos_itens(id) ON DELETE SET NULL,
  status item_status NOT NULL DEFAULT 'disponivel',
  descricao TEXT,
  localizacao VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Empréstimos
CREATE TABLE emprestimos (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  usuario_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  item_id INT NOT NULL REFERENCES itens(id) ON DELETE CASCADE,
  data_emprestimo TIMESTAMPTZ DEFAULT NOW(),
  data_devolucao TIMESTAMPTZ,
  status loan_status NOT NULL DEFAULT 'pendente',
  observacao TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Agendamentos
CREATE TABLE agendamentos (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  usuario_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  laboratorio_id INT NOT NULL REFERENCES laboratorios(id) ON DELETE CASCADE,
  data_inicio TIMESTAMPTZ NOT NULL,
  data_fim TIMESTAMPTZ NOT NULL,
  finalidade VARCHAR(255),
  status schedule_status NOT NULL DEFAULT 'pendente',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 2.3 Índices Recomendados

```sql
-- Empréstimos: busca por usuário e status
CREATE INDEX idx_emprestimos_usuario ON emprestimos(usuario_id);
CREATE INDEX idx_emprestimos_status ON emprestimos(status);
CREATE INDEX idx_emprestimos_pendentes ON emprestimos(status, data_emprestimo) WHERE status = 'pendente';

-- Agendamentos: busca por laboratório e período
CREATE INDEX idx_agendamentos_lab ON agendamentos(laboratorio_id);
CREATE INDEX idx_agendamentos_periodo ON agendamentos(data_inicio, data_fim);

-- Itens: busca por status e tipo
CREATE INDEX idx_itens_status ON itens(status);
CREATE INDEX idx_itens_tipo ON itens(tipo_id);
```

### 2.4 Decisão: Tabela `equipamentos`

A tabela `equipamentos` do MySQL é **redundante** com `itens` + `tipos_itens`. Recomenda-se:

- **Remover** `equipamentos` no schema Supabase.
- Usar `itens` para controle individual (patrimônio) e `tipos_itens` para categorias.
- Se houver necessidade de controle por quantidade (estoque genérico), criar uma tabela separada `estoque` com `tipo_id` e `quantidade`.

---

## 3. Perfis de Acesso

### 3.1 Papéis (Roles)

| Papel | Descrição | Acesso |
|---|---|---|
| `administrador` | Técnico/professor responsável | CRUD completo em todas as tabelas, gerencia usuários |
| `padrao` | Aluno/usuário comum | Lê itens e laboratórios, cria empréstimos e agendamentos próprios |
| `anon` | Não autenticado | Acesso apenas ao login (via Supabase Auth) |

### 3.2 Integração com Supabase Auth

- Usar **Supabase Auth** (email/password ou magic link) como provedor de identidade.
- A tabela `profiles` estende `auth.users` com `role` e `username`.
- Trigger `on_auth_user_created` para criar `profiles` automaticamente.

```sql
-- Trigger para criar profile automaticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, role)
  VALUES (NEW.id, NEW.email, 'padrao');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

---

## 4. Políticas RLS (Row Level Security)

### 4.1 Visão Geral

Todas as tabelas terão RLS habilitado. As políticas seguem o princípio de menor privilégio.

### 4.2 Tabela `profiles`

```sql
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Cada usuário vê e edita apenas seu próprio perfil
CREATE POLICY "Usuarios veem proprio perfil"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Usuarios editam proprio perfil"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Administradores veem e editam todos os perfis
CREATE POLICY "Admin ve todos perfis"
  ON profiles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'administrador'
    )
  );
```

### 4.3 Tabela `laboratorios`

```sql
ALTER TABLE laboratorios ENABLE ROW LEVEL SECURITY;

-- Todos autenticados podem ler laboratórios
CREATE POLICY "Todos leem laboratorios"
  ON laboratorios FOR SELECT
  USING (auth.role() = 'authenticated');

-- Apenas administradores podem criar/editar/excluir
CREATE POLICY "Admin gerencia laboratorios"
  ON laboratorios FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'administrador'
    )
  );
```

### 4.4 Tabela `tipos_itens`

```sql
ALTER TABLE tipos_itens ENABLE ROW LEVEL SECURITY;

-- Todos autenticados podem ler
CREATE POLICY "Todos leem tipos_itens"
  ON tipos_itens FOR SELECT
  USING (auth.role() = 'authenticated');

-- Apenas administradores gerenciam
CREATE POLICY "Admin gerencia tipos_itens"
  ON tipos_itens FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'administrador'
    )
  );
```

### 4.5 Tabela `itens`

```sql
ALTER TABLE itens ENABLE ROW LEVEL SECURITY;

-- Todos autenticados podem ler itens
CREATE POLICY "Todos leem itens"
  ON itens FOR SELECT
  USING (auth.role() = 'authenticated');

-- Apenas administradores podem criar/editar/excluir
CREATE POLICY "Admin gerencia itens"
  ON itens FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'administrador'
    )
  );
```

### 4.6 Tabela `emprestimos`

```sql
ALTER TABLE emprestimos ENABLE ROW LEVEL SECURITY;

-- Usuários veem apenas seus próprios empréstimos
CREATE POLICY "Usuarios veem proprios emprestimos"
  ON emprestimos FOR SELECT
  USING (usuario_id = auth.uid());

-- Usuários podem criar empréstimos
CREATE POLICY "Usuarios criam emprestimos"
  ON emprestimos FOR INSERT
  WITH CHECK (usuario_id = auth.uid());

-- Usuários podem atualizar apenas seus empréstimos (devolução)
CREATE POLICY "Usuarios atualizam proprios emprestimos"
  ON emprestimos FOR UPDATE
  USING (usuario_id = auth.uid());

-- Administradores veem e gerenciam todos os empréstimos
CREATE POLICY "Admin gerencia emprestimos"
  ON emprestimos FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'administrador'
    )
  );
```

### 4.7 Tabela `agendamentos`

```sql
ALTER TABLE agendamentos ENABLE ROW LEVEL SECURITY;

-- Usuários veem apenas seus próprios agendamentos
CREATE POLICY "Usuarios veem proprios agendamentos"
  ON agendamentos FOR SELECT
  USING (usuario_id = auth.uid());

-- Usuários podem criar agendamentos
CREATE POLICY "Usuarios criam agendamentos"
  ON agendamentos FOR INSERT
  WITH CHECK (usuario_id = auth.uid());

-- Usuários podem cancelar seus agendamentos pendentes
CREATE POLICY "Usuarios cancelam proprios agendamentos"
  ON agendamentos FOR UPDATE
  USING (usuario_id = auth.uid() AND status = 'pendente');

-- Administradores veem e gerenciam todos os agendamentos
CREATE POLICY "Admin gerencia agendamentos"
  ON agendamentos FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role = 'administrador'
    )
  );
```

---

## 5. Riscos de Segurança

### 5.1 Riscos Críticos

| # | Risco | Impacto | Mitigação |
|---|---|---|---|
| 1 | **RLS mal configurado** permite acesso a dados de outros usuários | Alto | Revisar todas as políticas com testes automatizados; usar `auth.uid()` sempre |
| 2 | **Service key exposta no frontend** dá acesso total ao banco | Crítico | Nunca usar `service_role` key no cliente; apenas `anon` key com RLS |
| 3 | **Trigger `handle_new_user` com SECURITY DEFINER** pode ser abusado | Médio | Restringir permissões do trigger; validar input no profile creation |

### 5.2 Riscos Médios

| # | Risco | Impacto | Mitigação |
|---|---|---|---|
| 4 | **Enum types não versionados** causam drift entre ambientes | Médio | Incluir `CREATE TYPE` nas migrations versionadas |
| 5 | **Foreign keys sem índice** causam lentidão em deletes em cascata | Médio | Criar índices em todas as FK columns |
| 6 | **Dados sensíveis em `observacao`** de empréstimos sem criptação | Baixo-Médio | Avaliar necessidade de criptação application-level |

### 5.3 Riscos Baixos

| # | Risco | Impacto | Mitigação |
|---|---|---|---|
| 7 | **UUID vs INT** para IDs — mudança de paradigma | Baixo | Documentar a mudança; ajustar aplicação PHP |
| 8 | **TIMESTAMPTZ vs TIMESTAMP** — fuso horário | Baixo | Configurar timezone do projeto (America/Sao_Paulo) |
| 9 | **Supabase Auth vs auth própria** — migração de senhas | Baixo-Médio | Usar bcrypt compatível; migrar hashes gradualmente |

---

## 6. Migrations em Alto Nível

### 6.1 Ordem de Execução

```
01_create_types.sql          -- ENUMs PostgreSQL
02_create_profiles.sql       -- Tabela profiles + trigger auth
03_create_laboratorios.sql   -- Tabela laboratorios
04_create_tipos_itens.sql    -- Tabela tipos_itens
05_create_itens.sql          -- Tabela itens
06_create_emprestimos.sql    -- Tabela emprestimos
07_create_agendamentos.sql   -- Tabela agendamentos
08_create_indexes.sql        -- Índices de performance
09_rls_policies.sql          -- Políticas RLS
10_seed_data.sql             -- Dados iniciais (tipos_itens, admin)
```

### 6.2 Estratégia de Migração de Dados

1. **Exportar** dados do MySQL com `mysqldump` (formato SQL ou CSV).
2. **Transformar** os dados:
   - `INT AUTO_INCREMENT` → `INT GENERATED ALWAYS AS IDENTITY`
   - `TIMESTAMP` → `TIMESTAMPTZ` com fuso America/Sao_Paulo
   - `ENUM` strings → valores compatíveis com os novos types
   - `usuarios.id` (INT) → `profiles.id` (UUID) — requer mapeamento
3. **Importar** via `psql` ou Supabase Dashboard (CSV import).
4. **Validar** contagem de registros e integridade referencial.

### 6.3 Migração de Autenticação

- Os hashes de senha do MySQL usam `password_hash()` do PHP (bcrypt).
- Supabase Auth usa bcrypt por padrão — **compatível**.
- Estratégia: migrar usuários existentes com seus hashes; no primeiro login, se o hash falhar, fallback para verificação PHP e re-hash via Supabase.

### 6.4 Compatibilidade PHP

- O PHP atual usa `mysqli`. Para Supabase, opções:
  1. **Supabase REST API** (PostgREST) — via HTTP com `anon` key + RLS
  2. **PHP PostgreSQL extension** (`pgsql`) — conexão direta ao banco
  3. **Supabase PHP SDK** — wrapper sobre REST API
- Recomendação: **PostgREST (REST API)** para manter RLS ativo e não expor credenciais de banco no servidor PHP.

---

## 7. Recomendações de Arquitetura

### 7.1 Stack Proposta

```
Frontend (PHP + Bootstrap 5)
        ↓ HTTP (REST)
Supabase PostgREST (anon key + RLS)
        ↓
PostgreSQL (Supabase managed)
        ↑
Supabase Auth (email/password)
```

### 7.2 Variáveis de Ambiente Necessárias

```env
SUPABASE_URL=https://<project>.supabase.co
SUPABASE_ANON_KEY=<anon public key>
# NUNCA usar SUPABASE_SERVICE_KEY no frontend
```

### 7.3 Decisões Pendentes

- [ ] Confirmar se o projeto manterá PHP ou migrará para framework com melhor suporte a Supabase
- [ ] Definir estratégia de migração de dados (manual vs automatizada)
- [ ] Avaliar se Supabase free tier comporta o volume de dados esperado
- [ ] Definir política de backup (Supabase já faz daily backups no plano Pro)

---

## 8. Checklist de Pré-Migração

- [ ] Criar projeto Supabase de teste (não produção)
- [ ] Aplicar schema proposto no projeto de teste
- [ ] Configurar RLS e testar com múltiplos usuários
- [ ] Exportar dados do MySQL atual
- [ ] Importar dados no Supabase de teste
- [ ] Validar integridade referencial
- [ ] Testar autenticação com hashes existentes
- [ ] Ajustar aplicação PHP para usar Supabase REST API
- [ ] Testar todas as funcionalidades no ambiente de teste
- [ ] Aprovar migração com autorização humana
- [ ] Executar migração em produção com janela de manutenção

---

*Documento criado pelo CEO Técnico Local como parte do planejamento LIM-8. Nenhuma migration foi aplicada. Este documento é apenas para revisão e aprovação.*
