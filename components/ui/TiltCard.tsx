"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  title: string;
  href: string;
  imageSrc: string; // ruta dentro de /public (ej: "/ventas.jpg")
};

export default function TiltCard({ title, href, imageSrc }: Props) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // inclinación suave
    const rotateY = ((x - centerX) / centerX) * 6;

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const reset = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  return (
    <Link
      href={href}
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onTouchMove={onMove}
      onTouchEnd={reset}
      className="group relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-slate-900/40 backdrop-blur-sm block"
      style={{ transform: "perspective(900px)" }}
    >
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={true}
        />
        {/* Glass título */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-4 mb-4 rounded-2xl bg-gradient-to-b from-white/0 to-black/60 px-5 py-3 ring-1 ring-white/10 backdrop-blur">
            <h3 className="text-lg font-semibold drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>
        {/* Glow azul al pasar */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute -inset-20 bg-blue-500/10 blur-3xl" />
        </div>
      </div>
    </Link>
  );
}
