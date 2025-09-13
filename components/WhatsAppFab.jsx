"use client";

const phone = "5491140691068"; // tu número en formato internacional sin + ni espacios
const text = encodeURIComponent("Hola! Quisiera más información sobre productos de SEFA Aceros.");

export default function WhatsAppFab() {
  return (
    <a className="fab" href={`https://wa.me/${phone}?text=${text}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/whatsapp.jpg`} alt="WhatsApp" />
    </a>
  );
}
