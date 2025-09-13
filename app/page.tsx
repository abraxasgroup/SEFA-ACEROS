// app/page.tsx
import NeonBg from "@/components/NeonBg";
import TiltCard from "@/components/ui/TiltCard";

export default function Page() {
  return (
    <NeonBg>
      <main className="container">
        {/* HERO con video */}
        <section className="hero" id="home">
          <video
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            poster="/SEFA-ACEROS/assets/hero-poster.jpg"
          >
            <source src="/SEFA-ACEROS/assets/drone-hero.mp4" type="video/mp4" />
          </video>
          <div className="overlay" />
          <div className="copy">
            <h1 style={{ fontSize: "clamp(28px,3.2vw,46px)", margin: 0 }}>
              SEFA ACEROS S.A.
            </h1>
            <p style={{ opacity: 0.9, margin: 0 }}>
              35+ años liderando el mercado argentino
            </p>
            <div className="cta">
              <a className="btn" href="#ventas">Ver productos</a>
              <a className="btn" href="https://wa.me/5491140691068" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* SECCIONES con tarjetas tilt */}
        <section className="grid" style={{ marginTop: 24 }}>
          <div className="col-12 col-6">
            <TiltCard
              title="Ventas de Caños, Tubos y Chapas"
              href="#ventas"
              img="/SEFA-ACEROS/assets/ventas.jpg"
            />
          </div>
          <div className="col-12 col-6">
            <TiltCard
              title="Desmontaje y Demolición Industrial"
              href="#servicios"
              img="/SEFA-ACEROS/assets/servicios.jpg"
            />
          </div>
          <div className="col-12 col-6">
            <TiltCard
              title="Contacto / WhatsApp"
              href="https://wa.me/5491140691068"
              img="/SEFA-ACEROS/assets/whatsapp.jpg"
            />
          </div>
        </section>

        {/* NOSOTROS */}
        <section style={{ marginTop: 36 }}>
          <h2>Nosotros</h2>
          <p><b>Excelencia y Profesionalismo:</b> Nuestra experiencia es vasta y comprobable. Tenemos 30+ años de trayectoria en el rubro. Abriendo nuevos caminos nace SEFA ACEROS S.A. con socios de amplia trayectoria y las mejores referencias.</p>
          <p><b>Servicios Personalizados:</b> Respetamos los tiempos y las necesidades de cada cliente. Trabajamos con seriedad y responsabilidad para agilizar los procesos productivos.</p>
        </section>

        {/* anclas */}
        <div id="ventas" />
        <div id="servicios" />
      </main>
    </NeonBg>
  );
}
