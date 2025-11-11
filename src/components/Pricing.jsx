"use client";
import Image from "next/image";

export default function Pricing() {
  const whatsappNumber = "6287701044580";

  const plans = [
    {
      id: 1,
      title: "Tiket Normal",
      price: "Rp15.000",
      billed: "per orang",
      features: [
        "Akses ke semua kolam renang",
        "Wahana air untuk anak & dewasa",
        "Gazebo & area santai gratis",
        "Parkir luas & aman",
      ],
      highlight: true,
    },
    {
      id: 2,
      title: "Promo Rombongan Sekolah",
      price: "Hubungi Kami",
      billed: "untuk info harga spesial",
      features: [
        "Harga khusus untuk rombongan sekolah",
        "Fasilitas lengkap & area private",
        "Bisa request acara & dekorasi",
        "Gratis 1 tiket untuk tiap 20 orang",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-cyan-50 via-blue-50 to-white relative overflow-hidden"
    >
      {/* Subtle floating shapes for depth */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute w-64 h-64 bg-cyan-200 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-80 h-80 bg-blue-200 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* === LEFT SIDE === */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <p className="text-[#6FCEDC] font-semibold mb-3">Harga & Promo</p>
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              HARGA TIKET
            </h2>
            <p className="text-gray-600 text-lg">
              Pilih paket terbaik untuk kunjungan kamu ke{" "}
              <strong>King Kong Splash</strong>. Nikmati keseruan dan fasilitas
              lengkap dengan harga yang ramah di kantong. Coba tiket promo kami
              untuk pengalaman lebih hemat!
            </p>
            {/* <p className="text-sm text-gray-500 mt-4 mb-8">
              Semua tiket sudah termasuk akses ke seluruh area kolam & wahana
              air.
            </p> */}

            {/* logo */}
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/pricinglogo.png"
                alt="King Kong Splash Pricing Logo"
                width={280}
                height={180}
                priority
              />
            </div>
          </div>

          {/* tiket */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`flex flex-col rounded-3xl border ${
                  plan.highlight
                    ? "border-[#6FCEDC] bg-white/90 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                    : "border-gray-200 bg-white/80 backdrop-blur-sm"
                } p-10 min-h-[500px] hover:-translate-y-2 transition-all duration-300`}
              >
                {/* Icon top */}
                <div
                  className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${
                    plan.highlight ? "bg-[#6FCEDC]/20" : "bg-gray-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#6FCEDC"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6 8H6a2 2 0 01-2-2V6a2 
                      2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.title}
                </h3>

                {/* Price */}
                <p className="text-3xl font-extrabold text-[#63B5D6] mb-1">
                  {plan.price}
                </p>
                <p className="text-sm text-gray-500 mb-6">{plan.billed}</p>

                {/* Features */}
                <ul className="space-y-2 text-gray-700 text-sm mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#6FCEDC"
                        className="w-5 h-5 shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3.25-3.25a1 1 0 0 1 1.414-1.414L8.5 11.086l6.543-6.543a1 1 0 0 1 1.414 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => {
                    const message = `Halo kong, saya mau pesan ${plan.title}.`;
                    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      message
                    )}`;
                    window.open(url, "_blank");
                  }}
                  className={`mt-auto py-3 font-semibold rounded-full transition-colors duration-300 shadow-md ${
                    plan.highlight
                      ? "bg-[#6FCEDC] text-[#323131] hover:bg-[#323131] hover:text-[#E3F6F7]"
                      : "bg-[#323131] text-white hover:bg-[#6FCEDC] hover:text-[#323131]"
                  }`}
                >
                  Pesan Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
