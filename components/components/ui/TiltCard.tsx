"use client";
import { useRef } from "react";

type Props = {
  title: string;
  href: string;
  img: string;
  alt?: string;
};

export default function TiltCard({ title, href, img, alt }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * 10;
    const rx = (0.5 - py) * 10;
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--rx", `${rx}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--rx", `0deg`);
  };

  const onTouch = () => {
    ref.current?.classList.add("touch");
    setTimeout(() => ref.current?.classList.remove("touch"), 280);
  };

  return (
    <a
      ref={ref}
      href={href}
      className="card tilt"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onTouchStart={onTouch}
    >
      <img src={img} alt={alt ?? title} />
      <div className="title">{title}</div>
    </a>
  );
}
