"use client";

import React from "react";
import NeonBg from "@/components/NeonBg";
import TiltCard from "@/components/ui/TiltCard";

export default function Home() {
  return (
    <>
      <NeonBg />

      {/* HERO con video de fondo */}
      <header className="hero">
        <video
          className="hero__video"
          src="assets/drone-hero.mp4"
          // si tu archivo quedó con doble extensión, descomentá la línea de abajo:
          // src="assets/drone-hero.mp4.mp4"
          autoPlay
          muted
          playsInline
          loop
          poster="assets/hero-poster.jpg"
        />
        <div className="hero__overlay">
          <img
            src="assets/logo-sefa.png"
            alt="SEFA ACEROS S.A."
            className="hero__logo"
          />
          <h1>SEFA ACEROS S.A.</h1>
          <p>35+ años liderando el mercado argentino</p>
          <div className="hero__cta">
            <a
              className="btn"
              href="https://wa.me/5491140691068?text=Hola%20SEFA%20ACEROS,%20quisiera%20cotizar"
              target="_blank"
              rel="noreferrer"
            >
              Cotizar por WhatsApp
            </a>
            <a className="btn btn--ghost" href="#servicios">
              Ver servicios
            </a>
          </div>
        </div>
      </header>

      {/* Tarjetas con efecto 3D/touch */}
      <main className="wrap">
        <section id="servicios" className="grid">
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
        </section>

        {/* Nosotros */}
        <section className="section">
          <h2>Nosotros</h2>
          <p>
            <strong>Excelencia y Profesionalismo:</strong> Nuestra experiencia es
            vasta y comprobable. Tenemos 30+ años de trayectoria en el rubro. 
            Abriendo nuevos caminos nace SEFA ACEROS S.A. con socios de amplia
            trayectoria y las mejores referencias. 
            <strong> Servicios Personalizados:</strong> respetamos los tiempos y
            necesidades de cada cliente. Objetivo: trabajar con seriedad y
            responsabilidad para agilizar los procesos productivos.
          </p>
        </section>

        {/* Galería simple (deja tus JPG en /assets) */}
        <section className="section">
          <h2>Galería</h2>
          <div className="gallery">
            <img src="assets/698943B3-2710-419A-971C-E8C83B096A48.jpeg" alt="" />
            <img src="assets/7432769A-21BF-43A7-A3C1-7F2AC540E71C.jpeg" alt="" />
            <img src="assets/DB9CE18F-C084-4195-9618-201F03D63BEF.jpeg" alt="" />
            <img src="assets/7432769A-21BF-43A7-A3C1-7F2A5C40E71C.jpeg" alt="" />
          </div>
        </section>
      </main>

      {/* Botón flotante de WhatsApp */}
      <a
        className="wa-float"
        href="https://wa.me/5491140691068?text=Hola%20SEFA%20ACEROS"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        ☎
      </a>
    </>
  );
}
