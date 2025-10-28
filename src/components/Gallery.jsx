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
    <section id="gallery" className="relative py-20 overflow-hidden bg-white">
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
          <div className="flex gap-6 animate-scroll">
            {[...row1, ...row1].map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-64 h-40 relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Gallery ${i}`}
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
            {[...row2, ...row2].map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-64 h-40 relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover"
                />
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
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        .animate-scroll-reverse {
          width: max-content;
          animation: scroll-reverse 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
