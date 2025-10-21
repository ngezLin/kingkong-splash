import Image from "next/image";

export default function Promo() {
  return (
    <section
      id="promo"
      className="bg-gradient-to-b from-[#FFF8E1] to-[#F9C021]/20 py-20 text-[#2F2723]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Gambar promo */}
        <div className="relative w-full md:w-1/2 flex justify-center order-1 md:order-none">
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[450px] rounded-2xl overflow-hidden shadow-2xl aspect-[747/1024]">
            <Image
              src="/images/promo.png"
              alt="Promo Natal Buy 3 Get 4"
              fill
              className="object-contain md:object-cover"
              sizes="(max-width: 768px) 100vw, 450px"
              priority
            />
          </div>
        </div>

        {/* Konten promo */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            🎄 Promo Natal Spesial 🎁
          </h2>

          <p className="text-lg md:text-xl text-[#4A403A]">
            Rayakan Natal bersama keluarga dan teman-teman di{" "}
            <span className="font-bold text-[#F9C021]">King Kong Splash!</span>
            <br />
            Dapatkan promo istimewa yang cuma berlaku bulan ini:
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-6 inline-block">
            <p className="text-2xl font-bold text-[#2F2723]">
              🎟️ Beli 3 Tiket, Gratis 1 Tiket!
            </p>
            <p className="text-sm text-[#4A403A] mt-2">
              Berlaku untuk semua kategori tiket selama bulan Desember 🎅
            </p>
          </div>
          <div>
            <a
              href="#pricing"
              className="inline-block bg-[#2F2723] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#F9C021] hover:text-[#2F2723] transition-all duration-300"
            >
              Lihat Harga Tiket
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
