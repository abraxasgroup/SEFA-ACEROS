"use client";

import React, { useRef } from "react";

type Props = { image: string; title: string; href: string };

export default function TiltCard({ image, title, href }: Props) {
  const elRef = useRef<HTMLAnchorElement>(null);

  const apply = (x = 0, y = 0, s = 1.02) => {
    if (!elRef.current) return;
    elRef.current.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(${s})`;
  };

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    const el = elRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const cy = "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    const px = ((cx - r.left) / r.width - .5) * 10;
    const py = ((cy - r.top) / r.height - .5) * -10;
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
      className="tilt"
      style={{ transition: "transform .15s ease" }}
    >
      <div className="tilt__imgwrap">
        <img src={image} alt={title} className="tilt__img" loading="lazy" />
        <div className="tilt__shade" />
        <div className="tilt__title">{title}</div>
      </div>
    </a>
  );
}
