import Nav from '../../../components/Nav.jsx';
import { getSession } from '../../../lib/auth.js';
import { query, tables } from '../../../lib/db.js';

export default async function VerItemPage({ params }) {
  const session = await getSession();
  const p = await params;
  const id = Number(p.id);
  let item = null;
  let erro = '';
  try {
    const result = await query(
      `SELECT i.id, i.codigo_patrimonio, i.nome, i.status, i.descricao, i.localizacao, i.criado_em, t.nome AS tipo_nome
       FROM ${tables.itens} i LEFT JOIN ${tables.tiposItens} t ON t.id = i.tipo_id WHERE i.id = $1 LIMIT 1`,
      [id]
    );
    item = result.rows[0] || null;
  } catch (error) {
    erro = error.message;
  }
  return (
    <>
      {session && <Nav session={session} />}
      <main className="container"><div className="card">
        <h1>Ficha do item</h1>
        {erro && <div className="alert danger">Erro: {erro}</div>}
        {!erro && !item && <div className="alert danger">Item não encontrado.</div>}
        {item && <div>
          <p><strong>Patrimônio:</strong> {item.codigo_patrimonio}</p>
          <p><strong>Nome:</strong> {item.nome}</p>
          <p><strong>Tipo:</strong> {item.tipo_nome || '-'}</p>
          <p><strong>Status:</strong> <span className="badge">{item.status}</span></p>
          <p><strong>Localização:</strong> {item.localizacao || '-'}</p>
          <p><strong>Descrição:</strong> {item.descricao || '-'}</p>
          <p className="muted">Esta página pode ser usada como destino público de QR Code.</p>
        </div>}
        <p><a className="btn secondary" href={session ? '/itens' : '/login'}>Voltar</a></p>
      </div></main>
    </>
  );
}
