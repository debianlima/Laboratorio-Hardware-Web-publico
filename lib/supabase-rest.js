const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ykfmtwgothboynddthsd.supabase.co';
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY || '';
const SCHEMA = process.env.DB_SCHEMA || 'lab_hardware';

function requireKey() {
  if (!SUPABASE_KEY) throw new Error('Configure NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY no Vercel.');
}

async function request(path, options = {}) {
  requireKey();
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      Accept: 'application/json',
      'Accept-Profile': SCHEMA,
      'Content-Profile': SCHEMA,
      ...(options.headers || {}),
    },
    cache: 'no-store',
  });
  const text = await response.text();
  let data = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!response.ok) throw new Error(data?.message || `Supabase REST ${response.status}`);
  return data;
}

export async function restList(table, select = '*', order = 'id.desc', limit = 200) {
  return request(`${table}?select=${encodeURIComponent(select)}&order=${encodeURIComponent(order)}&limit=${limit}`);
}

export async function restCount(table) {
  const data = await request(`${table}?select=id`);
  return Array.isArray(data) ? data.length : 0;
}

export async function restFindOne(table, column, value, select = '*') {
  const data = await request(`${table}?select=${encodeURIComponent(select)}&${column}=eq.${encodeURIComponent(value)}&limit=1`);
  return Array.isArray(data) ? data[0] || null : null;
}

export async function restInsert(table, values) {
  const data = await request(table, { method: 'POST', body: JSON.stringify(values) });
  return Array.isArray(data) ? data[0] || null : data;
}

export async function restHealth() {
  try {
    await restList('usuarios', 'id', 'id.asc', 1);
    return { ok: true, mode: 'supabase-rest', schema: SCHEMA };
  } catch (error) {
    return { ok: false, mode: 'supabase-rest', schema: SCHEMA, message: error.message };
  }
}
