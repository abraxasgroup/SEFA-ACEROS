"use client";

import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/components/ui/TiltCard";

const HERO_VIDEO = "/drone-hero.mp4"; // ya está en /public
const WHATSAPP = "https://wa.me/5491140691068";

const CARDS = [
  {
    id: "ventas",
    title: "Ventas de Caños, Tubos y Chapas",
    img: "/ventas.jpg",
    href: "#ventas",
  },
  {
    id: "servicios",
    title: "Desmontaje y Demolición Industrial",
    img: "/servicio.jpg",
    href: "#servicios",
  },
  {
    id: "contacto",
    title: "Contacto / WhatsApp",
    img: "/contacto.jpg",
    href: WHATSAPP,
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* BG NEÓN (no saca el video) */}
      <div className="fixed inset-0 -z-10 neon-bg pointer-events-none" />

      {/* HERO con video */}
      <section className="relative w-full max-w-6xl mx-auto pt-6 px-4">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src="/logo-sefa.png"
            alt="SEFA ACEROS S.A."
            width={160}
            height={80}
            className="h-12 w-auto"
            priority
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            SEFA ACEROS S.A.
          </h1>
        </div>

        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
          <video
            className="w-full h-[52vh] object-cover"
            src={HERO_VIDEO}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/ventas.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP}
              className="btn-primary"
            >
              Cotizar ahora
            </a>
            <a href="#productos" className="btn-secondary">
              Ver productos
            </a>
          </div>
        </div>
      </section>

      {/* TARJETAS / SECCIONES con tilt + imágenes */}
      <section
        id="secciones"
        className="relative w-full max-w-6xl mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {CARDS.map((c) => (
          <TiltCard key={c.id} title={c.title} imageSrc={c.img} href={c.href} />
        ))}
      </section>

      {/* CONTENIDO */}
      <section id="nosotros" className="w-full max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">Nosotros</h2>
        <p className="text-white/80 leading-relaxed">
          Excelencia y Profesionalismo: 30+ años liderando el mercado argentino.
          Servicios personalizados y stock amplio de productos de acero.
        </p>
      </section>
    </main>
  );
}
