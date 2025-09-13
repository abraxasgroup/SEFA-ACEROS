"use client";

import TiltCard from "../components/ui/TiltCard";
import NeonBg from "../components/NeonBg";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0c1b24] text-white">
      {/* HERO con video */}
      <section className="relative mx-auto max-w-6xl px-4 pt-6">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
          <video
            className="h-[55vh] w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            {/* SIN barra inicial: el archivo está en /public */}
            <source src="drone-hero.mp4#t=0.1" type="video/mp4" />
          </video>

          {/* overlay + texto */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1b24] via-[#0c1b24]/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h1 className="text-3xl font-black tracking-tight md:text-5xl">
              SEFA ACEROS S.A.
            </h1>
            <p className="mt-2 max-w-2xl text-sm md:text-base text-white/80">
              35+ años liderando el mercado argentino.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="rounded-full bg-[#15a8ff] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-[#15a8ff]/30 hover:bg-[#1198e6] transition"
              >
                Cotizar ahora
              </a>
              <a
                href="#productos"
                className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              >
                Ver productos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FONDO NEÓN (DO NOT REMOVE VIDEO/GALLERY) */}
      <NeonBg />

      {/* SECCIONES con tarjetas animadas */}
      <section id="productos" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
          Productos & Servicios
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <TiltCard
            image="ventas.jpg"
            title="Ventas de Caños, Tubos y Chapas"
            href="#ventas"
          />
          <TiltCard
            image="servicios.jpg"
            title="Desmontaje y Demolición Industrial"
            href="#servicios"
          />
          <TiltCard
            image="contacto.jpg"
            title="Contacto / WhatsApp"
            href="#contacto"
          />
        </div>
      </section>

      {/* NOSOTROS (placeholder simple para que compile) */}
      <section id="nosotros" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Nosotros</h2>
        <p className="max-w-3xl text-white/80">
          Excelencia y profesionalismo. 30+ años de trayectoria y una red de
          clientes de referencia.
        </p>
      </section>
    </main>
  );
}
