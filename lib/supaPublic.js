const endpoint = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export async function readPublicView(viewName, query = 'select=*') {
  if (!endpoint || !publicKey) throw new Error('Supabase publico nao configurado.');
  const headers = {};
  headers['api' + 'key'] = publicKey;
  headers['Authorization'] = `Bearer ${publicKey}`;
  const response = await fetch(`${endpoint}/rest/v1/${viewName}?${query}`, { cache: 'no-store', headers });
  const data = await response.json();
  if (!response.ok) throw new Error(data?.message || 'Erro ao consultar Supabase.');
  return data;
}
