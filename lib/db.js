import pg from 'pg';

const { Pool } = pg;

let pool;

export function dbConfigured() {
  return Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.SUPABASE_DB_URL);
}

export function getDatabaseUrl() {
  return process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.SUPABASE_DB_URL || '';
}

export function getSchema() {
  return process.env.DB_SCHEMA || 'lab_hardware';
}

function tableName(name) {
  const schema = getSchema().replaceAll('"', '');
  return `"${schema}"."${name}"`;
}

export const tables = {
  usuarios: tableName('usuarios'),
  laboratorios: tableName('laboratorios'),
  equipamentos: tableName('equipamentos'),
  tiposItens: tableName('tipos_itens'),
  itens: tableName('itens'),
  emprestimos: tableName('emprestimos'),
  agendamentos: tableName('agendamentos'),
  loginAttempts: tableName('login_attempts'),
};

export function getPool() {
  const connectionString = getDatabaseUrl();
  if (!connectionString) {
    throw new Error('POSTGRES_URL, DATABASE_URL ou SUPABASE_DB_URL nao configurada.');
  }

  if (!pool) {
    pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
      max: 4,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
    });
  }

  return pool;
}

export async function query(sql, params = []) {
  const result = await getPool().query(sql, params);
  return result;
}

export async function countRows(table) {
  const result = await query(`SELECT COUNT(*)::int AS total FROM ${table}`);
  return result.rows[0]?.total || 0;
}

export async function healthCheck() {
  if (!dbConfigured()) {
    return { ok: false, message: 'Banco nao configurado no Vercel.' };
  }

  try {
    const result = await query('SELECT NOW() AS now');
    return { ok: true, now: result.rows[0]?.now };
  } catch (error) {
    return { ok: false, message: error.message };
  }
}
