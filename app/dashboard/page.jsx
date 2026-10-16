import { redirect } from 'next/navigation';
import Nav from '../../components/Nav.jsx';
import { requireSession } from '../../lib/auth.js';
import { getCounts } from '../../lib/labApi.js';

export default async function DashboardPage() {
  const session = await requireSession();
  if (!session) redirect('/login');

  let stats = { itens: 0, equipamentos: 0, emprestimos: 0, atrasados: 0 };
  let erro = '';
  try {
    const counts = await getCounts();
    stats = {
      itens: counts.itens || 0,
      equipamentos: counts.equipamentos || 0,
      emprestimos: counts.emprestimos || 0,
      atrasados: counts.atrasados || 0,
    };
  } catch (error) {
    erro = error.message;
  }

  return (
    <>
      <Nav session={session} />
      <main className="container">
        <h1>Painel do Laboratório</h1>
        <p className="muted">Bem-vindo, {session.username}.</p>
        {erro && <div className="alert danger">Erro ao ler API: {erro}</div>}
        <div className="grid">
          <div className="card"><div className="muted">Itens cadastrados</div><div className="stat">{stats.itens}</div><a className="btn" href="/itens">Ver itens</a></div>
          <div className="card"><div className="muted">Equipamentos</div><div className="stat">{stats.equipamentos}</div></div>
          <div className="card"><div className="muted">Empréstimos</div><div className="stat">{stats.emprestimos}</div><a className="btn" href="/emprestimos">Ver empréstimos</a></div>
          <div className="card"><div className="muted">Atrasados</div><div className="stat">{stats.atrasados}</div></div>
        </div>
      </main>
    </>
  );
}
