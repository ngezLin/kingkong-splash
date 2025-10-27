"use client";
import Image from "next/image";
import Magnet from "./Magnet";

export default function Pricing() {
  const pricing = [
    {
      id: 1,
      title: "Tiket Normal",
      image: "/images/pricing1.png",
      prices: [{ label: "Harga", value: "Rp15.000" }],
      desc: "Nikmati kolam renang di hari biasa dengan suasana tenang dan nyaman.",
    },
    {
      id: 2,
      title: "Promo Rombongan Sekolah",
      image: "/images/pricing2.png",
      prices: [{ label: "Harga", value: "Contact Us" }],
      desc: "Harga tiket Khusus rombongan sekolah!!",
    },
  ];

  const whatsappNumber = "6287701044580";

  return (
    <section
      id="pricing"
      className="bg-linear-to-b from-[#E3F6F7] to-[#9CDEEE] py-20 text-[#323131]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-[#323131]">
          Harga Tiket & Promo
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 justify-items-center">
          {pricing.map((item) => (
            <Magnet key={item.id} padding={100} magnetStrength={8}>
              <div
                className="group bg-white/70 backdrop-blur-md rounded-3xl w-full max-w-[360px]
                           shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden 
                           border border-[#6FCEDC]/40 transform hover:-translate-y-3 
                           hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                {/* Gambar */}
                <div className="relative w-full aspect-4/3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>

                {/* Konten */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-3 text-[#323131]">
                    {item.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    {item.prices.map((price, idx) => (
                      <p key={idx} className="text-lg font-semibold">
                        <span className="text-[#323131]">{price.label}:</span>{" "}
                        <span className="text-[#63B5D6] drop-shadow-sm">
                          {price.value}
                        </span>
                      </p>
                    ))}
                  </div>

                  <p className="text-sm text-[#323131]/80 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Tombol WhatsApp */}
                  <button
                    onClick={() => {
                      const message = `Halo kong, saya mau beli ${item.title}.`;
                      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        message
                      )}`;
                      window.open(url, "_blank");
                    }}
                    className="px-6 py-2 bg-[#6FCEDC] text-[#323131] font-bold rounded-full
                               hover:bg-[#323131] hover:text-[#E3F6F7]
                               transition-colors duration-300 shadow-md"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            </Magnet>
          ))}
        </div>
      </div>
    </section>
  );
}
