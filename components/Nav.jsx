import { logoutAction } from '../app/server/loginActions.js';

export default function Nav({ session }) {
  return (
    <nav className="navbar">
      <a className="brand" href="/dashboard">Lab Hardware</a>
      <a href="/itens">Itens</a>
      <a href="/itens/novo">Cadastrar item</a>
      <a href="/emprestimos">Empréstimos</a>
      <a href="/api/health">Health</a>
      <span style={{ flex: 1 }} />
      {session ? (
        <form action={logoutAction}>
          <button type="submit">Sair de {session.username}</button>
        </form>
      ) : (
        <a href="/login">Entrar</a>
      )}
    </nav>
  );
}
