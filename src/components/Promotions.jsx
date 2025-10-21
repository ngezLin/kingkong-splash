import Image from "next/image";

export default function Promotion() {
  const promos = [
    {
      id: 1,
      title: "Tiket Weekday",
      image: "/images/pricing1.png",
      prices: [
        { label: "Anak-anak", value: "Rp25.000" },
        { label: "Dewasa", value: "Rp30.000" },
      ],
      desc: "Nikmati kolam renang di hari biasa dengan suasana tenang dan nyaman.",
    },
    {
      id: 2,
      title: "Tiket Weekend",
      image: "/images/pricing2.png",
      prices: [
        { label: "Anak-anak", value: "Rp30.000" },
        { label: "Dewasa", value: "Rp35.000" },
      ],
      desc: "Liburan makin seru di akhir pekan bersama keluarga dan teman-teman!",
    },
    {
      id: 3,
      title: "Paket Keluarga",
      image: "/images/pricing3.png",
      prices: [{ label: "2 Dewasa + 1 Anak", value: "Rp75.000" }],
      desc: "Paket hemat keluarga, cocok untuk bersenang-senang bersama orang tersayang.",
    },
  ];

  return (
    <section
      id="promotions"
      className="bg-[#FFF8E1] py-20 text-[#2F2723] text-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-[#2F2723]">
          Harga Tiket & Promo
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gambar */}
              <div className="relative w-full h-[700px]">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                  priority
                />
              </div>

              {/* Konten */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-[#2F2723]">
                  {promo.title}
                </h3>

                {/* Harga */}
                <div className="space-y-1 mb-4">
                  {promo.prices.map((price, idx) => (
                    <p key={idx} className="text-lg font-semibold">
                      <span className="text-[#2F2723]">{price.label}:</span>{" "}
                      <span className="text-[#F9C021]">{price.value}</span>
                    </p>
                  ))}
                </div>

                <p className="text-sm text-[#4A403A]">{promo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
