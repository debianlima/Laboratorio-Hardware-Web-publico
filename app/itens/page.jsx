import { redirect } from 'next/navigation';
import Nav from '../../components/Nav.jsx';
import { requireSession } from '../../lib/auth.js';
import { listItems } from '../../lib/labApi.js';

export default async function ItensPage() {
  const session = await requireSession();
  if (!session) redirect('/login');
  let itens = [];
  let erro = '';
  try { itens = await listItems(); } catch (error) { erro = error.message; }
  return <><Nav session={session} /><main className="container"><h1>Itens</h1><p><a className="btn" href="/itens/novo">Cadastrar item</a></p>{erro && <div className="alert danger">Erro: {erro}</div>}<div className="table-wrap card"><table><thead><tr><th>ID</th><th>Patrimônio</th><th>Nome</th><th>Status</th><th>Local</th><th></th></tr></thead><tbody>{itens.length === 0 && <tr><td colSpan="6" className="muted">Nenhum item cadastrado.</td></tr>}{itens.map((item) => <tr key={item.id}><td>{item.id}</td><td>{item.codigo_patrimonio}</td><td>{item.nome}</td><td>{item.status}</td><td>{item.localizacao || '-'}</td><td><a href={`/itens/${item.id}`}>ver</a></td></tr>)}</tbody></table></div></main></>;
}
