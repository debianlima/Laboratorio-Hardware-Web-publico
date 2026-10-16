import { redirect } from 'next/navigation';
import { loginAction } from '../server/loginActions.js';
import { getSession } from '../../lib/auth.js';
import { healthCheck } from '../../lib/labApi.js';

export default async function LoginPage({ searchParams }) {
  const session = await getSession();
  if (session) redirect('/dashboard');
  const params = await searchParams;
  const health = await healthCheck();
  if (health.ok && health.counts?.usuarios === 0) redirect('/setup');
  const apiError = health.ok ? '' : health.message;
  return (
    <main className="container"><div className="card">
      <h1>Laboratório de Hardware</h1>
      <p className="muted">Next.js + Supabase Edge Function</p>
      {params?.setup === 'ok' && <div className="alert ok">Administrador criado.</div>}
      {params?.erro && <div className="alert danger">Não foi possível entrar.</div>}
      {apiError && <div className="alert danger">API não disponível: {apiError}</div>}
      <form className="form" action={loginAction}>
        <div><label>Usuário</label><input name="username" required /></div>
        <div><label>Senha</label><input name="password" type="password" required /></div>
        <button type="submit" disabled={Boolean(apiError)}>Entrar</button>
      </form>
      <p className="muted">Primeiro acesso: <a href="/setup">criar administrador</a>.</p>
    </div></main>
  );
}
