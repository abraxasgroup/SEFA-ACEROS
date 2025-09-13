// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'SEFA ACEROS S.A.',
  description: '35+ años liderando el mercado argentino',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
