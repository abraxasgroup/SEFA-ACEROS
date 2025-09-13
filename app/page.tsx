// Página principal
import TiltCard from "../components/ui/TiltCard";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Page() {
  return (
    <>
      {/* HERO con video */}
      <section className="hero">
        <video
          src={`${prefix}/drone-hero.mp4`}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          poster={`${prefix}/logo-sefa.png`}
        />
        <div className="heroContent">
          <div className="badge">Industria • Acero • Servicio</div>
          <h1 className="h1">SEFA ACEROS S.A.</h1>
          <p className="lead">35+ años liderando el mercado argentino</p>
          <div className="ctaRow">
            <a className="btn primary" href="#ventas">Ver productos</a>
            <a className="btn" href="https://wa.me/5491140691068" target="_blank">Cotizar ahora</a>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section id="servicios" className="section">
        <h2>Productos &amp; Servicios</h2>
        <div className="grid">
          <div className="col-12 col-6">
            <TiltCard
              image="ventas.jpg"
              title="Ventas de Caños, Tubos y Chapas"
              href="#ventas"
            />
          </div>
          <div className="col-12 col-6">
            <TiltCard
              image="servicio.jpg"
              title="Desmontaje y Demolición Industrial"
              href="#servicios"
            />
          </div>
          <div className="col-12">
            <TiltCard
              image="contacto.jpg"
              title="Contacto / WhatsApp"
              href="https://wa.me/5491140691068"
            />
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section id="nosotros" className="section content">
        <h2>Nosotros</h2>
        <p>
          <strong>Excelencia y Profesionalismo.</strong> Nuestra experiencia es
          vasta y comprobable. Más de tres décadas en el rubro avalan nuestra
          calidad y servicio.
        </p>
      </section>
    </>
  );
}
