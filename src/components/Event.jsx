"use client";
import Image from "next/image";
import Magnet from "./Magnet";

export default function Event() {
  return (
    <section
      id="event"
      className="bg-gradient-to-b from-[#E3F6F7] to-[#9CDEEE]/30 py-20 text-[#323131]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Gambar promo */}
        <div className="relative w-full md:w-1/2 flex justify-center order-1 md:order-none">
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[450px] rounded-2xl overflow-hidden shadow-2xl aspect-[747/1024] border-4 border-[#63B5D6]/40">
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
            Promo Spesial 💦
          </h2>

          <p className="text-lg md:text-xl text-[#323131]/90">
            Nikmati keseruan bareng keluarga di{" "}
            <span className="font-bold text-[#63B5D6]">King Kong Splash!</span>
            <br />
            Dapatkan promo menarik yang cuma berlaku bulan ini:
          </p>

          <div className="bg-[#E3F6F7] rounded-2xl shadow-lg p-6 inline-block border border-[#6FCEDC]/40">
            <p className="text-2xl font-bold text-[#323131]">
              Saat ini belum ada event nih :(
            </p>
            <p className="text-sm text-[#323131]/70 mt-2">
              Tunggu event dan promosi kita selanjutnya yaa
            </p>
          </div>

          <div>
            <Magnet padding={80} magnetStrength={4}>
              <a
                href="#pricing"
                className="inline-block bg-[#6FCEDC] text-[#323131] px-8 py-3 rounded-full font-semibold hover:bg-[#9CDEEE] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Lihat Harga Tiket
              </a>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
