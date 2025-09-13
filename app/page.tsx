"use client";

import TiltCard from "@/components/ui/TiltCard";

export default function Page() {
  return (
    <main>

      {/* HERO con video */}
      <section className="hero">
        <video
          className="hero-video"
          src="/drone-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/logo-sefa.png"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <img src="/logo-sefa.png" alt="SEFA ACEROS" className="logo" />
          <h1 className="title">SEFA ACEROS S.A.</h1>
          <p className="subtitle">35+ años liderando el mercado argentino</p>
          <div className="cta">
            <a href="#contacto" className="btn btn-primary">Cotizar ahora</a>
            <a href="#productos" className="btn btn-link">Ver productos</a>
          </div>
        </div>
      </section>

      {/* SECCIONES / SERVICIOS */}
      <section id="servicios" className="section">
        <h2 className="section-title">Productos & Servicios</h2>

        <div className="cards">
          <TiltCard
            href="#ventas"
            image="/ventas.jpg"
            title="Ventas de Caños, Tubos y Chapas"
          />
          <TiltCard
            href="#servicios"
            image="/servicio.jpg"
            title="Desmontaje y Demolición Industrial"
          />
          <TiltCard
            href="#contacto"
            image="/whatsapp.jpg"
            title="Contacto / WhatsApp"
          />
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="section">
        <h2 className="section-title">Nosotros</h2>
        <p className="copy">
          Excelencia y Profesionalismo. Nuestra experiencia es vasta y comprobable.
          Negociamos plazos y necesidades con cada cliente.
        </p>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section">
        <h2 className="section-title">Contacto</h2>
        <a
          className="btn btn-primary"
          href="https://wa.me/5491140691068"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp +54 9 11 4069-1068
        </a>
      </section>

      <footer className="footer">© {new Date().getFullYear()} SEFA ACEROS S.A.</footer>
    </main>
  );
}
