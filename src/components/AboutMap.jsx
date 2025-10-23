"use client";
import { FaWhatsapp } from "react-icons/fa";
import AnimatedContent from "./AnimatedContent";

export default function AboutMap() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/62877010445805", "_blank"); // nomor WA
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#E3F6F7] to-[#6FCEDC]/30 text-[#323131] py-20 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Kolom Kiri - Tentang */}
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-extrabold text-[#63B5D6]">
              Tentang King Kong Splash
            </h2>
            <p className="text-lg leading-relaxed text-[#323131]/80">
              King Kong Splash adalah destinasi wisata air yang seru untuk
              keluarga dan anak-anak. Didesain dengan berbagai wahana menarik,
              kolam renang bersih, dan suasana yang menyenangkan untuk semua
              umur.
            </p>
            <div className="font-semibold text-lg text-[#63B5D6]">
              🕒 Buka Setiap Hari: <br />
              <span className="text-[#323131]">08.00 – 17.00 WIB</span>
            </div>
          </div>
        </AnimatedContent>

        {/* Kolom Kanan - Map */}
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.2}
        >
          <div className="flex-1 w-full h-[350px] rounded-2xl overflow-hidden shadow-lg border-4 border-[#9CDEEE]">
            <iframe
              title="Kingkong Splash Waterpark"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.352952542932!2d112.70523997574841!3d-7.645141575629616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d98ed407f445%3A0xbc0788d114702b4d!2sKingkong%20Splash%20Waterpark!5e0!3m2!1sid!2sid!4v1761126682278!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-none"
            ></iframe>
          </div>
        </AnimatedContent>
      </div>

      {/* Tombol WhatsApp */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        duration={1}
        ease="power3.out"
        delay={0.3}
      >
        <div className="mt-12 text-center">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-3 bg-[#63B5D6] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#323131] hover:text-[#9CDEEE] border-2 border-[#63B5D6] transition-all duration-300"
          >
            <FaWhatsapp size={22} />
            Pesan Tiket via WhatsApp
          </button>
        </div>
      </AnimatedContent>

      {/* Efek dekorasi background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,181,214,0.15),transparent_60%)] pointer-events-none" />
    </section>
  );
}
