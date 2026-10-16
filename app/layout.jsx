import './globals.css';

export const metadata = {
  title: 'Laboratório de Hardware 2025',
  description: 'Controle de itens, equipamentos e empréstimos do laboratório de hardware.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
