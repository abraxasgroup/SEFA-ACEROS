"use client";

import React, { useRef } from "react";

type Props = {
  title: string;
  image: string;
  href: string;
  external?: boolean;
};

export default function TiltCard({ title, image, href, external }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = (e as any).touches?.[0] ?? e;
    const cx = p.clientX - r.left;
    const cy = p.clientY - r.top;
    const rx = ((cy / r.height) - 0.5) * -18; // grados
    const ry = ((cx / r.width)  - 0.5) *  18;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateX(0) rotateY(0) translateZ(0)";
  };

  return (
    <a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="tilt"
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      onPointerUp={reset}
    >
      <img src={image} alt="" className="tilt__img" />
      <span className="tilt__label">{title}</span>
    </a>
  );
}
