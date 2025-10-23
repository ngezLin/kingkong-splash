"use client";
import Image from "next/image";
import { useState } from "react";
import AnimatedContent from "./AnimatedContent";

export default function Merchandise() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const whatsappNumber = "6285336047865";
  const whatsappMessage = encodeURIComponent("saya mau beli merchnya dong");

  const merchItems = [
    {
      name: "Brooch King Kong",
      price: "Rp 25.000",
      image: "/images/merch-brooch.png",
    },
    {
      name: "Lanyard King Kong",
      price: "Rp 35.000",
      image: "/images/merch-lanyard.png",
    },
  ];

  return (
    <section
      id="merchandise"
      className="relative bg-gradient-to-b from-[#E3F6F7] to-[#9CDEEE]/40 py-20 text-[#323131] overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {/* ✨ Spotlight efek mengikuti cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(111,206,220,0.15), transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Judul */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#323131]">
          🎁 Merchandise Eksklusif
        </h2>

        <p className="text-[#323131]/70 max-w-2xl mx-auto mb-12">
          Bawa pulang kenangan seru dari{" "}
          <b className="text-[#63B5D6]">King Kong Splash</b>! Koleksi
          merchandise spesial kami siap melengkapi harimu.
        </p>

        {/* Grid Merchandise */}
        <div
          className={`grid ${
            merchItems.length <= 2
              ? "grid-cols-1 sm:grid-cols-2 justify-center"
              : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          } gap-8 justify-items-center`}
        >
          {merchItems.map((item, i) => (
            <AnimatedContent
              key={i}
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={i * 0.2}
            >
              <div className="bg-[#E3F6F7] rounded-2xl shadow-lg overflow-hidden w-[180px] sm:w-[200px] p-5 flex flex-col items-center hover:shadow-xl hover:scale-[1.05] transition-all duration-300 border border-[#9CDEEE]">
                <div className="relative w-full aspect-square mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg text-[#323131]">
                  {item.name}
                </h3>
                <p className="text-[#63B5D6] font-bold mt-1">{item.price}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>

        {/* Tombol WhatsApp */}
        <AnimatedContent
          distance={100}
          direction="vertical"
          duration={1}
          delay={0.5}
          ease="power3.out"
        >
          <div className="mt-12">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#323131] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#63B5D6] hover:text-[#323131] transition-all duration-300 shadow-md"
            >
              Pesan Sekarang
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
