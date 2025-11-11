"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="Kolam Renang King Kong Splash Pandaan - Wahana Air Keluarga dan Seluncuran Raksasa"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          <span className="text-white text-sm font-semibold">
            Waterpark Terfavorit di Pandaan
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight mb-0">
          Kolam Renang King Kong
          <span className="block text-cyan-300">
            King Kong Splash Waterpark
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-2xl text-white font-semibold max-w-4xl mx-auto mt-1">
          Kolam Renang Pandaan Terbaik untuk Liburan Keluarga
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="https://wa.me/6287701044580?text=Halo%20King%20Kong%20Splash!%20Saya%20mau%20beli%20tiket%20wahana%20air%20Pandaan%20dong!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pesan Tiket Sekarang
          </Link>

          <Link
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Lihat Harga Tiket
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 pt-6 text-white">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">4.8/5</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="font-semibold">10.000+ Pengunjung</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-semibold">Aman & Terpercaya</span>
          </div>
        </div>
      </div>

      {/* Schema LocalBusiness */}
      <Script type="application/ld+json" id="local-business-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "King Kong Splash",
          alternateName: [
            "Kolam Renang King Kong",
            "Kolam Renang Kingkong Splash",
            "Kolam Renang Pandaan",
            "King Kong Splash Waterpark",
            "Wahana Air King Kong",
            "Kolam Renang Keluarga Pandaan",
          ],
          description:
            "Kolam Renang King Kong Splash di Pandaan, Pasuruan — wahana air keluarga terbaik dengan seluncuran raksasa dan kolam anak. Cocok untuk wisata keluarga dan acara sekolah.",
          image: "https://kolamrenangkingkong.com/images/hero.webp",
          url: "https://kolamrenangkingkong.com",
          telephone: "+6287701044580",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Jalan Pahlawan Prof. Sunaryo No.9, Mbajang, Kb. Waris",
            addressLocality: "Pandaan",
            addressRegion: "Jawa Timur",
            postalCode: "67156",
            addressCountry: "ID",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "-7.6522",
            longitude: "112.6842",
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
          priceRange: "Rp15.000 - Rp25.000",
          sameAs: [
            "https://www.facebook.com/kingkongsplash",
            "https://www.instagram.com/kingkongsplash",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "125",
            bestRating: "5",
            worstRating: "1",
          },
        })}
      </Script>
    </section>
  );
}
