import { setupAdminAction } from '../server/setupActions.js';

export default async function SetupPage({ searchParams }) {
  const params = await searchParams;
  return <main className="container"><div className="card"><h1>Primeiro acesso</h1>{params?.erro && <div className="alert danger">Não foi possível criar o usuário.</div>}<form className="form" action={setupAdminAction}><div><label>Usuário</label><input name="username" defaultValue="admin" required /></div><div><label>Senha</label><input name="password" type="password" minLength="6" required /></div><button type="submit">Criar</button></form></div></main>;
}
