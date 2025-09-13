"use client";

import TiltCard from "../components/ui/TiltCard";

export default function Page() {
  return (
    <main className="main">
      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <video
            className="hero__video"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="logo-sefa.png"
          >
            <source src="drone-hero.mp4#t=0.1" type="video/mp4" />
          </video>
          <div className="hero__veil" />
          <div className="hero__glow" />
        </div>

        <div className="container hero__content">
          <span className="badge">Industria • Aceros • Servicio</span>
          <h1 className="h1">SEFA ACEROS S.A.</h1>
          <p className="lead">
            35+ años en el mercado argentino — Caños y tubos con y sin costura,
            chapas gruesas y accesorios certificados/recuperados.
          </p>
          <div className="ctaRow">
            <a className="btn btn--primary" href="#contacto">Cotizar ahora</a>
            <a className="btn btn--ghost" href="#productos">Ver productos</a>
          </div>

          <ul className="chips">
            <li>★ Referencias comprobables</li>
            <li>✔ Certificado disposición final</li>
            <li>🏗️ Hidrogrúas & Astilleros</li>
          </ul>
        </div>
      </section>

      {/* PRODUCTOS & SERVICIOS */}
      <section id="productos" className="section">
        <div className="container">
          <h2 className="h2">Productos & Servicios</h2>
          <div className="grid">
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
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="section">
        <div className="container">
          <h2 className="h2">Nosotros</h2>
          <p className="text">
            Excelencia y profesionalismo. Nuestra experiencia es vasta y comprobable.
            Respetamos los tiempos y necesidades de cada cliente, con foco en seguridad
            y agilidad de procesos productivos.
          </p>
        </div>
      </section>

      {/* VENTAS */}
      <section id="ventas" className="section">
        <div className="container">
          <h2 className="h2">Ventas</h2>
          <p className="text">
            Caños y tubos con y sin costura, accesorios certificados/recuperados, chapas gruesas.
            Entregas a todo el país.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="container">
          <h2 className="h2">Servicios</h2>
          <p className="text">
            Desmontaje y demolición industrial. Poseemos certificado de disposición final.
            Chatarra, astilleros, servicio de grúa e hidrogrúas 🏗️.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section">
        <div className="container">
          <h2 className="h2">Contacto</h2>
          <a className="btn btn--primary" href="https://wa.me/5491140691068" target="_blank" rel="noopener">
            WhatsApp +54 9 11 4069-1068
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} SEFA ACEROS S.A. · Rosario, Santa Fe, Argentina
        </div>
      </footer>
    </main>
  );
}
