import "./globals.css";
import type { Metadata } from "next";
import WhatsAppFab from "../components/WhatsAppFab";

export const metadata: Metadata = {
  title: "SEFA ACEROS S.A. — Caños, Tubos, Chapas y Demolición Industrial",
  description:
    "35+ años en el mercado argentino. Ventas de caños y tubos con y sin costura, chapas gruesas, accesorios certificados y recuperados. Desmontaje y demolición industrial con certificado de disposición final.",
  metadataBase: new URL("https://abraxasgroup.github.io"),
  alternates: { canonical: "/SEFA-ACEROS/" },
  openGraph: {
    title: "SEFA ACEROS S.A.",
    description:
      "Caños, tubos, chapas y demolición industrial certificada. 35+ años de experiencia.",
    url: "https://abraxasgroup.github.io/SEFA-ACEROS/",
    siteName: "SEFA ACEROS S.A.",
    images: [{ url: "/SEFA-ACEROS/logo-sefa.png", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEFA ACEROS S.A.",
    description:
      "Caños, tubos, chapas y demolición industrial certificada. 35+ años de experiencia.",
    images: ["/SEFA-ACEROS/logo-sefa.png"],
  },
  icons: { icon: "/SEFA-ACEROS/favicon.svg" },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#0b1a2a] text-[#eaf4ff] antialiased">
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}
