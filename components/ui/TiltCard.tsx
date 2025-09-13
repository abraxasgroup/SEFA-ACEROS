"use client";

import React, { useRef } from "react";

type Props = {
  image: string;
  title: string;
  href: string;
};

export default function TiltCard({ image, title, href }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const apply = (x = 0, y = 0) => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`;
  };

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY =
      "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

    const px = (clientX - rect.left) / rect.width - 0.5;
    const py = (clientY - rect.top) / rect.height - 0.5;

    apply(px * 10, -py * 10);
  };

  const onLeave = () => apply(0, 0);

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMove as any}
      onMouseLeave={onLeave}
      onTouchMove={onMove as any}
      onTouchEnd={onLeave}
      className="block rounded-3xl overflow-hidden shadow-lg transition-transform will-change-transform"
      style={{ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" }}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-xl drop-shadow">
          {title}
        </div>
      </div>
    </a>
  );
}
