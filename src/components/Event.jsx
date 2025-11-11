"use client";
import Image from "next/image";
import Magnet from "./Magnet";

export default function Event() {
  return (
    <section id="event" className="py-20 text-[#323131]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Gambar promo */}
        <div className="relative w-full md:w-1/2 flex justify-center order-1 md:order-0">
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[450px] rounded-3xl overflow-hidden shadow-2xl aspect-747/1024 border-4 border-[#63B5D6]/40 hover:scale-[1.03] transition-transform duration-500">
            <Image
              src="/images/promo.png"
              alt="Event Spesial King Kong Splash"
              fill
              className="object-contain md:object-cover"
              sizes="(max-width: 768px) 100vw, 450px"
              priority
            />
          </div>
        </div>

        {/* Konten promo */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#323131]">
            🎉 Event & Promotion
          </h2>

          <p className="text-lg md:text-xl text-[#323131]/90 leading-relaxed">
            New Year Swimming Tournament in{" "}
            <span className="font-bold text-[#63B5D6]">King Kong Splash!</span>
            <br />
            Sambut tahun baru dengan penuh semangat di King Kong Splash
            Waterpark! Ayo ikut lomba renang seru dengan berbagai kategori.
          </p>

          {/* Card Event Info */}
          <div className="relative bg-gradient-to-b from-[#E3F6F7] to-[#C9EEF1] rounded-3xl shadow-xl p-8 border border-[#6FCEDC]/40 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute inset-0 rounded-3xl border border-white/50 pointer-events-none"></div>

            <p className="text-2xl font-bold text-[#323131] text-center mb-4">
              Bebas 25 | Katak 25 | Bebas 50 | Katak 50 | Kick Bebas 25
            </p>

            <div className="space-y-3 text-[#323131]/80 text-sm leading-relaxed">
              <p>
                💰 <span className="font-semibold">Rp 35.000 / 1 Nomor</span>{" "}
                atau <span className="font-semibold">Rp 60.000 / 2 Nomor</span>
              </p>
              <p>
                🏆 Dapatkan: Win Certificate, Participation Certificate, Swim
                Voucher, dan New Year Parcel
              </p>
              <p>
                📅 <b>Minggu, 28 Desember 2025</b>
              </p>
              <p>
                🕒 Pendaftaran ditutup <b>25 Desember 2025</b>
              </p>
              <p>
                📞 Info & Pendaftaran: <b>Bagus (0877 0104 4580)</b>
              </p>
              <p className="pt-3 text-[#2c8a9d] font-semibold">
                👉 Daftar sekarang dan rayakan tahun baru dengan keseruan di
                air!
              </p>
            </div>
          </div>

          <div>
            <Magnet padding={80} magnetStrength={4}>
              <a
                href="#pricing"
                className="inline-block bg-[#6FCEDC] text-[#323131] px-8 py-3 rounded-full font-semibold hover:bg-[#9CDEEE] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                💦 Lihat Harga Tiket
              </a>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
