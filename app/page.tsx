"use client";

import TiltCard from "../components/ui/TiltCard";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* HERO con video + glow petróleo */}
      <section className="relative mx-auto max-w-6xl px-4 pt-6">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
          <video
            className="h-[58vh] w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="logo-sefa.png"
          >
            <source src="drone-hero.mp4#t=0.1" type="video/mp4" />
          </video>

          {/* Glow y degradé para legibilidad */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_-10%,rgba(49,168,255,.25),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1a2a] via-[#0b1a2a]/10 to-transparent" />

          {/* Texto */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <span className="mb-2 inline-block rounded-full border border-[#31a8ff]/35 bg-[#081218]/60 px-3 py-1 text-xs text-[#d7f3ff] backdrop-blur">
              Industria • Aceros • Servicio
            </span>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl drop-shadow-[0_0_18px_rgba(49,168,255,.25)]">
              SEFA ACEROS S.A.
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/85 md:text-base">
              35+ años en el mercado argentino — Caños y tubos con y sin costura,
              <br className="hidden md:inline" />
              chapas gruesas y accesorios certificados/recuperados.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="rounded-full bg-[#31a8ff] px-5 py-2 text-sm font-semibold text-[#00121f] shadow-lg shadow-[#31a8ff]/30 transition hover:translate-y-[-2px] hover:bg-[#26a0ff]"
              >
                Cotizar ahora
              </a>
              <a
                href="#productos"
                className="rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Ver productos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Productos & Servicios con tarjetas tilt */}
      <section id="productos" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
          Productos & Servicios
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <TiltCard
            image="ventas.jpg"
            title="Ventas: Caños, Tubos (c/ y s/ costura), Chapas y Accesorios"
            href="#ventas"
          />
          <TiltCard
            image="servicio.jpg"
            title="Desmontaje y Demolición Industrial (certificado final)"
            href="#servicios"
          />
          <TiltCard
            image="contacto.jpg"
            title="Contacto — WhatsApp"
            href="#contacto"
          />
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Nosotros</h2>
        <p className="max-w-3xl text-white/85">
          Excelencia y profesionalismo. Nuestra experiencia es vasta y comprobable.
          Respetamos los tiempos y necesidades de cada cliente, con enfoque en
          seguridad y agilidad de procesos productivos.
        </p>
      </section>

      {/* Anclas simples para “ventas / servicios / contacto” */}
      <section id="ventas" className="mx-auto max-w-6xl px-4 pb-10">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Ventas</h2>
        <p className="max-w-3xl text-white/80">
          Caños y tubos con y sin costura, accesorios certificados/recuperados,
          chapas gruesas. Entregas a todo el país.
        </p>
      </section>

      <section id="servicios" className="mx-auto max-w-6xl px-4 pb-10">
        <h2 className="mb-3 text-2xl font-bold md:text-3xl">Servicios</h2>
        <p className="max-w-3xl text-white/80">
          Desmontaje y demolición industrial. Poseemos certificado de disposición final.
          Chatarra, astilleros, servicio de grúa e hidrogrúas 🏗️.
        </p>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Contacto</h2>
        <a
          className="inline-flex items-center gap-2 rounded-full bg-[#31a8ff] px-5 py-2 font-semibold text-[#00121f] shadow-lg shadow-[#31a8ff]/30 transition hover:translate-y-[-2px] hover:bg-[#26a0ff]"
          href="https://wa.me/5491140691068"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp +54 9 11 4069-1068
        </a>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/70">
        © {new Date().getFullYear()} SEFA ACEROS S.A.
      </footer>
    </main>
  );
}
