import './globals.css';
import { ReactNode } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';

export const metadata = {
  title: 'SEFA ACEROS — Caños, Tubos, Desmontaje & Demolición',
  description: 'SEFA ACEROS — Más de 35 años en el mercado argentino.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <GluestackUIProvider>
          {children}
        </GluestackUIProvider>
      </body>
    </html>
  );
}
