"use client";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          <img src="logo-sefa.png" alt="SEFA ACEROS" className="nav__logo" />
          <span>SEFA ACEROS S.A.</span>
        </a>

        <nav className="nav__links">
          <a href="#productos" className="link">Productos</a>
          <a href="#nosotros" className="link">Nosotros</a>
          <a href="#contacto" className="btn btn--ghost">Contacto</a>
          <a href="https://wa.me/5491140691068" target="_blank" rel="noopener" className="btn btn--primary">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
