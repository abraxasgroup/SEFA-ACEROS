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

  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <a
      ref={ref}
      className="tilt"
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onTouchMove={onMove}
      onTouchEnd={onLeave}
    >
      <img src={`${prefix}/${image}`} alt={title} loading="lazy" />
      <div className="titleBar">{title}</div>
    </a>
  );
}
