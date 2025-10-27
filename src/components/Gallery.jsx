"use client";
import Image from "next/image";

export default function Gallery() {
  const row1 = [
    "/images/gal1.png",
    "/images/gal2.png",
    "/images/gal3.png",
    "/images/gal4.png",
    "/images/gal5.png",
  ];
  const row2 = [
    "/images/gal6.png",
    "/images/gal7.png",
    "/images/gal8.png",
    "/images/gal9.png",
    "/images/gal10.png",
  ];

  return (
    <section id="gallery" className="relative py-20 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#323131]">
          Galeri King Kong Splash
        </h2>
        <p className="text-[#323131]/70 mt-3 text-lg">
          Keseruan dan keceriaan di wahana air kami!
        </p>
      </div>

      {/* Auto-scroll Container */}
      <div className="space-y-10">
        {/* Baris 1 */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {[...row1, ...row1].map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-64 h-40 relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image src={src} alt="Gallery" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* baris 2 */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-reverse gap-6">
            {[...row2, ...row2].map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-64 h-40 relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image src={src} alt="Gallery" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

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
          animation: scroll 5s linear infinite;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
