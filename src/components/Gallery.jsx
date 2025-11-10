"use client";
import Image from "next/image";
import Script from "next/script";

export default function Gallery() {
  const row1 = [
    { src: "/images/gal1.png", alt: "Seluncuran raksasa King Kong Splash" },
    { src: "/images/gal2.png", alt: "Kolam anak King Kong Splash" },
    { src: "/images/gal3.png", alt: "Wahana air keluarga King Kong Splash" },
    { src: "/images/gal4.png", alt: "Area bermain air King Kong Splash" },
    { src: "/images/gal5.png", alt: "Keseruan wahana air King Kong Splash" },
  ];

  const row2 = [
    { src: "/images/gal6.png", alt: "Kolam renang dewasa King Kong Splash" },
    { src: "/images/gal7.png", alt: "Seluncuran mini anak King Kong Splash" },
    { src: "/images/gal8.png", alt: "Bermain air bersama keluarga" },
    { src: "/images/gal9.png", alt: "Keseruan wahana air King Kong Splash" },
    { src: "/images/gal10.png", alt: "Liburan keluarga di King Kong Splash" },
  ];

  return (
    <section
      id="gallery"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* === Animated Background Elements === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cyan Orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* === Content === */}
      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-12 px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Galeri King Kong Splash
          </h2>
          <p className="text-slate-300 mt-3 text-lg max-w-3xl mx-auto">
            Lihat keseruan di King Kong Splash Waterpark Pandaan! Dari
            seluncuran raksasa hingga kolam anak, semua wahana air kami siap
            memberikan pengalaman seru untuk seluruh keluarga.
          </p>
        </div>

        {/* Auto-scroll Container */}
        <div className="space-y-10">
          {/* Baris 1 - Scroll to Left */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-left">
              {[...row1, ...row1, ...row1].map((item, i) => (
                <div
                  key={i}
                  className="shrink-0 w-64 h-40 relative rounded-xl overflow-hidden shadow-lg border border-white/10 bg-slate-800/40 backdrop-blur-sm"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 16rem"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Baris 2 - Scroll to Right */}
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-right">
              {[...row2, ...row2, ...row2].map((item, i) => (
                <div
                  key={i}
                  className="shrink-0 w-64 h-40 relative rounded-xl overflow-hidden shadow-lg border border-white/10 bg-slate-800/40 backdrop-blur-sm"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 16rem"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Scroll Animation */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          width: max-content;
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          width: max-content;
          animation: scroll-right 60s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Schema ImageObject */}
      <Script type="application/ld+json" id="gallery-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Galeri King Kong Splash",
          url: "https://kolamrenangkingkong.com/gallery",
          image: [
            "https://kolamrenangkingkong.com/images/gal1.png",
            "https://kolamrenangkingkong.com/images/gal2.png",
            "https://kolamrenangkingkong.com/images/gal3.png",
            "https://kolamrenangkingkong.com/images/gal4.png",
            "https://kolamrenangkingkong.com/images/gal5.png",
            "https://kolamrenangkingkong.com/images/gal6.png",
            "https://kolamrenangkingkong.com/images/gal7.png",
            "https://kolamrenangkingkong.com/images/gal8.png",
            "https://kolamrenangkingkong.com/images/gal9.png",
            "https://kolamrenangkingkong.com/images/gal10.png",
          ],
        })}
      </Script>
    </section>
  );
}
