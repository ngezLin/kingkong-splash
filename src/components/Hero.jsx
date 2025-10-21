import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-start pt-40 bg-white overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/images/hero.webp"
        alt="Kolam Renang King Kong Splash"
        fill
        className="object-cover opacity-90"
        priority
      />

      {/* Overlay agar teks terlihat jelas */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <h1
          className="text-6xl md:text-7xl font-extrabold"
          style={{
            color: "#2F2723",
            WebkitTextStroke: "2px #F9C021",
          }}
        >
          King Kong Splash
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-[#2F2723] font-medium">
          Serunya berenang bareng keluarga!
        </p>

        {/* Jam buka */}
        <p className="mt-6 text-lg text-[#2F2723] font-semibold flex items-center justify-center gap-2">
          🕒 Buka setiap hari • 08.00 – 17.00 WIB
        </p>

        {/* Tombol CTA */}
        <Link
          href="https://wa.me/6285336047865"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-[#F9C021] text-[#2F2723] font-bold py-3 px-8 rounded-full shadow-md hover:bg-[#ffcf33] transition-all duration-300"
        >
          Pesan Tiket Sekarang
        </Link>
      </div>
    </section>
  );
}
