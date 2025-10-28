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
    <section id="gallery" className="relative py-20 overflow-hidden bg-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#323131]">
          Galeri King Kong Splash
        </h2>
        <p className="text-[#323131]/70 mt-3 text-lg max-w-3xl mx-auto">
          Lihat keseruan di King Kong Splash Waterpark Pandaan! Dari seluncuran
          raksasa hingga kolam anak, semua wahana air kami siap memberikan
          pengalaman seru untuk seluruh keluarga.
        </p>
      </div>

      {/* Auto-scroll Container */}
      <div className="space-y-10">
        {/* Baris 1 */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...row1, ...row1].map((item, i) => (
              <div
                key={i}
                className="shrink-0 w-64 h-40 relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Baris 2 */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll-reverse">
            {[...row2, ...row2].map((item, i) => (
              <div
                key={i}
                className="shrink-0 w-64 h-40 relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Scroll Animasi */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll-reverse {
          width: max-content;
          animation: scroll-reverse 40s linear infinite;
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
