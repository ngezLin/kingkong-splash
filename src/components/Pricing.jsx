import Image from "next/image";

export default function Pricing() {
  const pricing = [
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
      id="pricing"
      className="bg-gradient-to-b from-[#FFF8E1] to-[#FFF2C2] py-20 text-[#2F2723]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Harga Tiket & Promo
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map((pricing) => (
            <div
              key={pricing.id}
              className="group bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden border border-[#F9C021]/20 transform hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] transition-all duration-300"
            >
              {/* Gambar */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={pricing.image}
                  alt={pricing.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
              </div>

              {/* Konten */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 text-[#2F2723]">
                  {pricing.title}
                </h3>

                <div className="space-y-2 mb-4">
                  {pricing.prices.map((price, idx) => (
                    <p key={idx} className="text-lg font-semibold">
                      <span className="text-[#2F2723]">{price.label}:</span>{" "}
                      <span className="text-[#F9C021] drop-shadow-sm">
                        {price.value}
                      </span>
                    </p>
                  ))}
                </div>

                <p className="text-sm text-[#4A403A]/80 leading-relaxed">
                  {pricing.desc}
                </p>

                <button className="mt-6 px-6 py-2 bg-[#F9C021] text-[#2F2723] font-bold rounded-full hover:bg-[#2F2723] hover:text-[#F9C021] transition-colors duration-300 shadow-md">
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
