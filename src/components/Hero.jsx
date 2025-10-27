"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const text = "King Kong Splash";
  const letters = text.split("");

  return (
    <section
      id="hero"
      className="relative min-h-svh flex flex-col items-center justify-center pt-24 md:pt-40 bg-[#E3F6F7] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero.webp"
        alt="Kolam Renang King Kong Splash"
        fill
        className="object-cover opacity-80"
        priority
      />

      {/* Overlay lembut agar teks terbaca jelas */}
      <div className="absolute inset-0 bg-[#323131]/20 backdrop-blur-[2px]" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        {/* Animasi Teks */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold flex justify-center drop-shadow-lg flex-wrap"
          style={{
            color: "White",
          }}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: i * 0.05,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-[#ffffff] font-medium">
          Serunya berenang bareng keluarga!
        </p>

        {/* Jam buka */}
        <p className="mt-6 text-base sm:text-lg text-[#ffffff] font-semibold flex items-center justify-center gap-2">
          🕒 Buka setiap hari • 07.00 – 17.00 WIB
        </p>

        {/* Tombol CTA */}
        <Link
          href="https://wa.me/6287701044580?text=Halo%20King%20Kong%20Splash!%20Saya%20mau%20beli%20tiketnya%20dong!"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-[#6FCEDC] text-[#ffffff] font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#9CDEEE] hover:shadow-lg transition-all duration-300"
        >
          Pesan Tiket Sekarang
        </Link>
      </div>
    </section>
  );
}
