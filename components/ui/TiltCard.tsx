"use client";

import React, { useRef } from "react";

type Props = { image: string; title: string; href: string };

export default function TiltCard({ image, title, href }: Props) {
  const elRef = useRef<HTMLAnchorElement>(null);

  const apply = (x = 0, y = 0, scale = 1.02) => {
    if (!elRef.current) return;
    elRef.current.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(${scale})`;
  };

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    const el = elRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    const px = ((clientX - rect.left) / rect.width - 0.5) * 10;
    const py = ((clientY - rect.top) / rect.height - 0.5) * -10;
    apply(px, py);
  };

  const reset = () => apply(0, 0, 1);

  return (
    <a
      ref={elRef}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onTouchMove={onMove}
      onTouchEnd={reset}
      className="group block overflow-hidden rounded-3xl border border-white/12 bg-[#0b1a22] shadow-[0_18px_60px_rgba(2,12,20,.55)] ring-1 ring-white/8"
      style={{ transition: "transform .15s ease" }}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white drop-shadow">
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
}
