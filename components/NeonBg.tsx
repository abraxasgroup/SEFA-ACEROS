"use client";
export default function NeonBg() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(1200px 500px at 50% -20%, rgba(21,168,255,.25), transparent 60%), #0c1b24",
      }}
    />
  );
}
