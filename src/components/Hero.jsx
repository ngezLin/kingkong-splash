"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Hero() {
  const text = "King Kong Splash";
  const letters = text.split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-40 bg-[#E3F6F7] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero.webp"
        alt="Kolam Renang King Kong Splash Pandaan"
        fill
        className="object-cover opacity-80"
        priority
      />

      {/* Overlay lembut agar teks terbaca jelas */}
      <div className="absolute inset-0 bg-[#323131]/20 backdrop-blur-[2px]" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        {/* SEO fallback */}
        <h1 className="sr-only">
          King Kong Splash - Kolam Renang & Wahana Air di Pandaan
        </h1>

        {/* Animasi Teks */}
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold flex justify-center drop-shadow-lg flex-wrap text-white">
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
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white font-medium">
          Serunya berenang bareng keluarga!
        </p>

        {/* Deskripsi tambahan */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto">
          King Kong Splash adalah kolam renang dan wahana air terbaik di
          Pandaan, Pasuruan. Cocok untuk keluarga dan anak-anak, dengan wahana
          seru seperti seluncuran raksasa, kolam anak, dan area bermain air.
        </p>

        {/* Jam buka */}
        <p className="mt-6 text-base sm:text-lg text-white font-semibold flex items-center justify-center gap-2">
          🕒 Buka setiap hari • 07.00 – 17.00 WIB
        </p>

        {/* Tombol CTA */}
        <Link
          href="https://wa.me/6287701044580?text=Halo%20King%20Kong%20Splash!%20Saya%20mau%20beli%20tiketnya%20dong!"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-[#6FCEDC] text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#9CDEEE] hover:shadow-lg transition-all duration-300"
        >
          Pesan Tiket Sekarang
        </Link>
      </div>

      {/* Schema LocalBusiness */}
      <Script type="application/ld+json" id="local-business-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "King Kong Splash",
          image: "https://kolamrenangkingkong.com/images/hero.webp",
          url: "https://kolamrenangkingkong.com",
          telephone: "+6287701044580",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Jalan Pahlawan Prof. Sunaryo No.9, Mbajang, Kb. Waris, Kec. Pandaan, Pasuruan, Jawa Timur 67156",
            addressLocality: "Pandaan",
            postalCode: "67156",
            addressCountry: "ID",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "07:00",
              closes: "17:00",
            },
          ],
          priceRange: "Rp.15,000",
          sameAs: [
            "https://www.facebook.com/kingkongsplash",
            "https://www.instagram.com/kingkongsplash",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "125",
          },
        })}
      </Script>
    </section>
  );
}
