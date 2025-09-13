"use client";

import React, { useRef } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function TiltCard({ image, title, href }) {
  const ref = useRef(null);

  const apply = (x = 0, y = 0) => {
    if (!ref.current) return;
    ref.current.style.transform =
      `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(1.01)`;
  };

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = ("touches" in e ? e.touches[0].clientX : e.clientX);
    const cy = ("touches" in e ? e.touches[0].clientY : e.clientY);
    const px = (cx - rect.left) / rect.width - 0.5;
    const py = (cy - rect.top) / rect.height - 0.5;
    apply(px * 10, -py * 10);
  };

  const reset = () => apply(0, 0);

  return (
    <a
      href={href}
      className="card"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onTouchStart={onMove}
      onTouchMove={onMove}
      onTouchEnd={reset}
    >
      <img className="card-img" src={`${BASE}/${image}`} alt={title} />
      <div className="card-grad"></div>
      <div className="card-title">{title}</div>
    </a>
  );
}
