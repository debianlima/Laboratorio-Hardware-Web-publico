import { redirect } from 'next/navigation';
import Nav from '../../components/Nav.jsx';
import { requireSession } from '../../lib/auth.js';
import { query, tables } from '../../lib/db.js';

export default async function EmprestimosPage() {
  const session = await requireSession();
  if (!session) redirect('/login');
  let emprestimos = [];
  let erro = '';
  try {
    const result = await query(
      `SELECT e.id, e.data_emprestimo, e.data_devolucao, e.status, e.observacao,
              u.username AS usuario_nome, eq.nome AS equipamento_nome
       FROM ${tables.emprestimos} e
       JOIN ${tables.usuarios} u ON u.id = e.usuario_id
       JOIN ${tables.equipamentos} eq ON eq.id = e.equipamento_id
       ORDER BY e.data_emprestimo DESC LIMIT 200`
    );
    emprestimos = result.rows;
  } catch (error) {
    erro = error.message;
  }
  return (
    <>
      <Nav session={session} />
      <main className="container">
        <h1>Empréstimos</h1>
        {erro && <div className="alert danger">Erro: {erro}</div>}
        <div className="table-wrap card"><table>
          <thead><tr><th>ID</th><th>Usuário</th><th>Equipamento</th><th>Data</th><th>Previsão/Devolução</th><th>Status</th></tr></thead>
          <tbody>
            {emprestimos.length === 0 && <tr><td colSpan="6" className="muted">Nenhum empréstimo cadastrado.</td></tr>}
            {emprestimos.map((emp) => <tr key={emp.id}><td>{emp.id}</td><td>{emp.usuario_nome}</td><td>{emp.equipamento_nome}</td><td>{String(emp.data_emprestimo).slice(0, 10)}</td><td>{emp.data_devolucao ? String(emp.data_devolucao).slice(0, 10) : '-'}</td><td>{emp.status}</td></tr>)}
          </tbody>
        </table></div>
      </main>
    </>
  );
}
