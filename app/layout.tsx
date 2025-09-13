import "./globals.css";

export const metadata = {
  title: "SEFA ACEROS S.A.",
  description: "Ventas, servicios y desmontaje industrial"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
