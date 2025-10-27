"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Merchandise() {
  const whatsappNumber = "6287701044580";
  const whatsappMessage = encodeURIComponent("Saya mau beli merchnya dong!");

  const merchItems = [
    {
      name: "Brooch King Kong",
      price: "Rp 25.000",
      image: "/images/merch1.png",
    },
    {
      name: "Lanyard King Kong",
      price: "Rp 35.000",
      image: "/images/merch2.png",
    },
  ];

  const handleWhatsApp = (itemName) => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Halo! ${whatsappMessage} (${itemName})`
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="merchandise"
      className="relative text-[#323131] overflow-hidden"
    >
      {/* Wave Atas */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-16 sm:h-20 text-[#E3F6F7]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C213.55,83.12,107.78,116.4,0,120V0H1200V120C1074.19,116.4,946.4,85.58,821.74,56.44,696.28,27,571.77,-1.52,447.16,2.47,405.94,3.78,364.35,13.1,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="bg-linear-to-b from-[#E3F6F7] to-[#9CDEEE]/40 py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          {/* Judul */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold mb-10 drop-shadow-lg text-[#2C7DA0]"
          >
            Merchandise Resmi 🎁
          </motion.h2>

          {/* Grid Barang */}
          <div className="flex flex-wrap justify-center gap-8">
            {merchItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center w-72"
              >
                <div className="w-40 h-40 relative mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
                <p className="text-sky-600 font-bold mb-4">{item.price}</p>
                <button
                  onClick={() => handleWhatsApp(item.name)}
                  className="bg-sky-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-sky-600 transition-all"
                >
                  Beli Sekarang
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Bawah */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-16 sm:h-20 text-[#9CDEEE]/40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44C213.55,83.12,107.78,116.4,0,120V0H1200V120C1074.19,116.4,946.4,85.58,821.74,56.44,696.28,27,571.77,-1.52,447.16,2.47,405.94,3.78,364.35,13.1,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
