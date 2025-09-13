"use client";

import NeonBg from "@/components/NeonBg";
import TiltCard from "@/components/ui/TiltCard";

export default function Home() {
  return (
    <>
      <NeonBg />

      <header className="hero">
        <video
          className="hero__video"
          autoPlay
          muted
          playsInline
          loop
          poster="assets/hero-poster.jpg"
        >
          <source src="assets/drone-hero.mp4" type="video/mp4" />
          <source src="assets/drone-hero.mp4.mp4" type="video/mp4" />
        </video>

        <div className="hero__overlay">
          <img src="assets/logo-sefa.png" alt="SEFA ACEROS S.A." className="hero__logo" />
          <h1 className="hero__title">SEFA ACEROS S.A.</h1>
          <p className="hero__subtitle">35+ años liderando el mercado argentino</p>
          <div className="hero__cta">
            <a
              className="btn btn--primary"
              href="https://wa.me/5491140691068?text=Hola%20SEFA%20ACEROS%2C%20quisiera%20una%20cotizaci%C3%B3n."
              target="_blank"
              rel="noreferrer"
            >
              Cotizar por WhatsApp
            </a>
            <a className="btn btn--ghost" href="#servicios">Ver servicios</a>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section id="servicios" className="section">
          <h2 className="section-title">Servicios & Ventas</h2>

          <div className="grid-cards">
            <TiltCard
              title="Ventas de Caños, Tubos y Chapas"
              image="assets/card-ventas.jpg"
              href="#ventas"
            />
            <TiltCard
              title="Desmontaje y Demolición Industrial"
              image="assets/card-demo.jpg"
              href="#demolicion"
            />
            <TiltCard
              title="Contacto / WhatsApp"
              image="assets/card-contacto.jpg"
              href="https://wa.me/5491140691068?text=Hola%20SEFA%20ACEROS"
              external
            />
          </div>
        </section>

        <section id="nosotros" className="section">
          <h2 className="section-title">Nosotros</h2>
          <p>
            <strong>Excelencia y Profesionalismo:</strong> experiencia vasta y comprobable. 
            30+ años de trayectoria. Nace SEFA ACEROS S.A. con socios de amplia trayectoria y
            las mejores referencias. <strong>Servicios Personalizados:</strong> respetamos los tiempos
            y necesidades de cada cliente, para agilizar sus procesos productivos.
          </p>
        </section>

        <section className="section">
          <h2 className="section-title">Galería</h2>
          <div className="gallery">
            <img src="assets/698943B3-2710-419A-971C-E8C83B096A48.jpeg" alt="" />
            <img src="assets/7432769A-21BF-43A7-A3C1-7F2A5C40E71C.jpeg" alt="" />
            <img src="assets/DB9CE18F-C084-4195-9618-201F03D63BEF.jpeg" alt="" />
            <img src="assets/8C98B1E0-CB46-4358-8DEF-989EFE441132.jpeg" alt="" />
          </div>
        </section>
      </main>

      <a
        className="wa-float"
        href="https://wa.me/5491140691068?text=Hola%20SEFA%20ACEROS"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        ☎
      </a>

      <footer className="site-footer">
        © {new Date().getFullYear()} SEFA ACEROS S.A. — Todos los derechos reservados
      </footer>
    </>
  );
}
