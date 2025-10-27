"use client";
import AnimatedContent from "./AnimatedContent";

export default function AboutMap() {
  return (
    <section
      id="about"
      className="relative py-20 text-[#323131] overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <AnimatedContent
          distance={100}
          direction="vertical"
          duration={1}
          delay={0.2}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Tentang Kami & Lokasi
            </h2>
            <p className="text-[#323131]/70 max-w-3xl mx-auto">
              <b className="text-[#63B5D6]">King Kong Splash Waterpark</b>{" "}
              adalah destinasi wisata air terbaik yang menawarkan pengalaman
              seru dan menyegarkan untuk seluruh keluarga. Dengan berbagai
              wahana air yang menantang dan fasilitas modern, kami siap
              memberikan kenangan tak terlupakan untuk Anda.
            </p>
          </div>
        </AnimatedContent>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Kiri: Info */}
          <AnimatedContent
            distance={150}
            direction="horizontal"
            duration={1}
            delay={0.4}
          >
            <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-4 text-[#63B5D6]">
                Kunjungi Kami
              </h3>
              <div className="space-y-4 text-[#323131]/80">
                <div>
                  <h4 className="font-semibold text-lg mb-2">📌 Alamat:</h4>
                  <p>Kingkong Splash Waterpark, Surabaya, Jawa Timur</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    🕒 Jam Operasional:
                  </h4>
                  <p>Senin - Minggu: 07.00 - 17.00 WIB</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">📞 Kontak:</h4>
                  <p>WhatsApp: +62 877-0104-4580</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/place/Kingkong+Splash+Waterpark/@-7.6451416,112.7052399,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#63B5D6] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#323131] transition-all duration-300 shadow-md"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </AnimatedContent>

          {/* Kanan: Map */}
          <AnimatedContent
            distance={150}
            direction="horizontal"
            duration={1}
            delay={0.6}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg w-full aspect-video md:aspect-auto md:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.352952542932!2d112.70523997574841!3d-7.645141575629616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d98ed407f445%3A0xbc0788d114702b4d!2sKingkong%20Splash%20Waterpark!5e0!3m2!1sid!2sid!4v1761126682278!5m2!1sid!2sid"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kingkong Splash Waterpark Location"
              ></iframe>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
