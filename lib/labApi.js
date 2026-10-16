import bcrypt from 'bcryptjs';

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ykfmtwgothboynddthsd.supabase.co';
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';

function table(name) { return `lab_hardware_${name}`; }

async function rest(path, options = {}) {
  if (!KEY) throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY nao configurada no Vercel.');
  const res = await fetch(`${URL}/rest/v1/${path}`, {
    ...options,
    cache: 'no-store',
    headers: {
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) throw new Error(data?.message || `HTTP ${res.status}`);
  return data;
}

async function rpc(name, payload) {
  return await rest(`rpc/${name}`, { method: 'POST', body: JSON.stringify(payload) });
}

export async function labApi(path, options = {}) {
  if (path === '/health') return await healthCheck();
  if (path === '/counts') return await getCounts();
  if (path === '/types') return { ok: true, data: await listTypes() };
  if (path === '/items' && (!options.method || options.method === 'GET')) return { ok: true, data: await listItems() };
  if (path === '/loans') return { ok: true, data: await listLoans() };
  throw new Error('Operacao nao habilitada no modo REST.');
}

export async function healthCheck() {
  try {
    const [usuarios, itens, equipamentos, emprestimos, tipos] = await Promise.all([
      rest(`${table('usuarios')}?select=id`),
      rest(`${table('itens')}?select=id`),
      rest(`${table('equipamentos')}?select=id`),
      rest(`${table('emprestimos')}?select=id`),
      rest(`${table('tipos_itens')}?select=id`),
    ]);
    return { ok: true, runtime: 'nextjs-supabase-rest', api_mode: 'public_views_rpc', counts: { usuarios: usuarios.length, itens: itens.length, equipamentos: equipamentos.length, emprestimos: emprestimos.length, tipos_itens: tipos.length } };
  } catch (error) {
    return { ok: false, message: error.message };
  }
}

export async function getCounts() { return (await healthCheck()).counts || {}; }

export async function login(username, password) {
  const users = await rest(`${table('usuarios')}?select=id,username,senha,tipo&username=eq.${encodeURIComponent(username)}&limit=1`);
  const user = users?.[0];
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.senha);
  if (!ok) return null;
  return { id: user.id, username: user.username, tipo: user.tipo };
}

export async function setupAdmin(username, password) {
  const result = await rpc('lab_hardware_setup_admin', { p_username: username, p_password: password });
  return result?.[0] || null;
}

export async function listTypes() {
  return await rest(`${table('tipos_itens')}?select=id,nome&order=nome.asc`);
}

export async function listItems() {
  return await rest(`${table('itens')}?select=id,codigo_patrimonio,nome,status,localizacao,descricao,tipo_id,criado_em&order=id.desc&limit=200`);
}

export async function getItem(id) {
  const data = await rest(`${table('itens')}?select=*&id=eq.${encodeURIComponent(id)}&limit=1`);
  return data[0] || null;
}

export async function createItem(data) {
  const row = {
    codigo_patrimonio: String(data.codigo_patrimonio || '').trim(),
    nome: String(data.nome || '').trim(),
    tipo_id: data.tipo_id ? Number(data.tipo_id) : null,
    status: String(data.status || 'disponivel'),
    descricao: data.descricao || null,
    localizacao: data.localizacao || null,
  };
  const created = await rest(table('itens'), { method: 'POST', body: JSON.stringify(row) });
  return created?.[0] || null;
}

export async function listLoans() {
  return await rest(`${table('emprestimos')}?select=id,usuario_id,equipamento_id,data_emprestimo,data_devolucao,status,observacao&order=id.desc&limit=200`);
}
