import { redirect } from 'next/navigation';
import Nav from '../../../components/Nav.jsx';
import { createItemAction } from '../../server/itemActions.js';
import { requireSession } from '../../../lib/auth.js';

export default async function NovoItemPage() {
  const session = await requireSession();
  if (!session) redirect('/login');
  return <><Nav session={session} /><main className="container"><div className="card"><h1>Cadastrar item</h1><form className="form" action={createItemAction}><div><label>Código patrimônio</label><input name="codigo_patrimonio" required /></div><div><label>Nome</label><input name="nome" required /></div><input type="hidden" name="status" value="disponivel" /><div><label>Localização</label><input name="localizacao" /></div><div><label>Descrição</label><textarea name="descricao" /></div><button type="submit">Salvar</button></form></div></main></>;
}
