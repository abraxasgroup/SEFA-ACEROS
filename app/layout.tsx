export const metadata = {
  title: "SEFA ACEROS S.A.",
  description: "35+ años liderando el mercado argentino"
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
