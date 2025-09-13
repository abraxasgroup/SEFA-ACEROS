import './globals.css';

export const metadata = {
  title: 'SEFA ACEROS S.A.',
  description:
    'Caños y tubos con y sin costura, chapas y accesorios. Ingeniero Allan, Buenos Aires, Argentina.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
