"use client";

import React, { useRef } from "react";

type Props = {
  image: string;
  title: string;
  href: string;
};

export default function TiltCard({ image, title, href }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const rx = (+py * 8).toFixed(2);
    const ry = (-px * 8).toFixed(2);
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  const press = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) scale(0.98)`;
  };

  return (
    <a
      ref={ref}
      href={href}
      className="tilt"
      onMouseMove={onMove}
      onMouseLeave={reset}
      onTouchStart={press}
      onTouchEnd={reset}
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className="tilt-title">{title}</span>
    </a>
  );
}
