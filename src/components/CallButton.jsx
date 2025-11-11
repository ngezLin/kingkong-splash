"use client";
import Image from "next/image";

export default function CallButton() {
  const whatsappNumber = "6287701044580";
  const message = encodeURIComponent(
    "Halo kong, saya ingin tanya tentang event King Kong Splash!"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative group">
        {/* Tombol melayang */}

        <Image
          src="/images/eventicon.png"
          alt="WhatsApp King Kong Splash"
          width={60}
          height={60}
          className="group-hover:rotate-6 transition-transform duration-300"
        />

        {/* Tooltip saat hover */}
        <div className="absolute right-[110%] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-[#6FCEDC] text-[#323131] text-sm font-medium px-3 py-1 rounded-full shadow-md transition-all duration-300">
          Chat via WhatsApp
        </div>
      </div>
    </a>
  );
}
