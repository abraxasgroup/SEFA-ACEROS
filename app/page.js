"use client";

import TiltCard from "../components/TiltCard";
import WhatsAppFab from "../components/WhatsAppFab";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Page() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="nav-logo">
            <img src={`${BASE}/logo-sefa.png`} alt="SEFA logo"/>
            <div className="nav-title">SEFA <span style={{opacity:.7}}>ACEROS S.A.</span></div>
          </div>
          <div className="nav-links">
            <a href="#productos">Productos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#contacto">Contacto</a>
            <a className="btn" href="https://wa.me/5491140691068?text=Hola!%20Quisiera%20cotizar." target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </nav>

      <main className="container">
        {/* HERO VIDEO */}
        <section className="hero">
          <video
            src={`${BASE}/drone-hero.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${BASE}/ventas.jpg`}
          />
          <div className="hero-overlay">
            <div className="hero-content">
              <div className="badges">
                <span className="badge">Industria</span>
                <span className="badge">Aceros</span>
                <span className="badge">Servicio</span>
              </div>
              <h1>SEFA ACEROS S.A.</h1>
              <p className="lead">
                35+ años en el mercado argentino — Caños y tubos con y sin costura,
                chapas y accesorios certificados/recuperados.
              </p>
              <div className="ctas">
                <a className="btn" href="https://wa.me/5491140691068?text=Hola!%20Quisiera%20cotizar." target="_blank" rel="noopener noreferrer">Cotizar ahora</a>
                <a className="btn secondary" href="#productos">Ver productos</a>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTOS & SERVICIOS */}
        <section id="productos" className="section">
          <h2 style={{marginBottom:12}}>Productos &amp; Servicios</h2>
          <div className="grid">
            <TiltCard
              image="ventas.jpg"
              title="Ventas: Caños, Tubos (c/ y s/ costura), Chapas y Accesorios"
              href="#contacto"
            />
            <TiltCard
              image="servicios.jpg"
              title="Desmontaje y Demolición Industrial (certificado final)"
              href="#contacto"
            />
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section">
          <h2>Nosotros</h2>
          <p className="lead">
            Excelencia y Profesionalismo. Amplio stock, logística y referencias comprobables.
          </p>
          <ul style={{marginTop:10, color:"var(--muted)"}}>
            <li>✔ Referencias comprobables</li>
            <li>✔ Certificado disposición final</li>
            <li>✔ Hidrogrúas &amp; Astilleros</li>
          </ul>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section">
          <h2>Contacto</h2>
          <div className="grid">
            <TiltCard image="contacto.jpg" title="Escribinos por WhatsApp" href="https://wa.me/5491140691068?text=Hola!%20Quisiera%20información." />
          </div>
          <p style={{marginTop:14, color:"var(--muted)"}}>
            Ubicación: Ing. Allan, Buenos Aires, Argentina.
          </p>
        </section>

        <footer className="footer">
          © 2025 SEFA ACEROS S.A. · Ing. Allan, Buenos Aires, Argentina
        </footer>
      </main>

      <WhatsAppFab />
    </>
  );
}
