"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-40 bg-[#E3F6F7] overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero.webp"
        alt="Kolam Renang King Kong Splash Pandaan - Wahana Air Keluarga dan Seluncuran Raksasa"
        fill
        className="object-cover opacity-80"
        priority
      />

      {/* Overlay lembut */}
      <div className="absolute inset-0 bg-[#323131]/20 backdrop-blur-[2px]" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        {/* Judul utama H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          King Kong Splash – Kolam Renang & Wahana Air Terbaik di Pandaan
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white font-medium">
          Tempat liburan keluarga seru di <strong>Pandaan</strong>!
        </p>

        {/* Deskripsi singkat */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto">
          Nikmati keseruan bermain air di <strong>King Kong Splash</strong> —
          <strong> kolam renang Pandaan</strong> dengan seluncuran raksasa,
          kolam anak, dan area bermain keluarga. Pilihan terbaik untuk
          <strong> wisata keluarga di Pasuruan dan Pandaan</strong>.
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
