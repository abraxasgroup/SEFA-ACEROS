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
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(0) scale(1.02)`;
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "rotateY(0) rotateX(0) translateZ(0) scale(1)";
  };

  const A = external ? "a" : "a";

  return (
    <A
      ref={ref as any}
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
    </A>
  );
}

