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
      {/* Konten */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          {/* Judul */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold mb-10 drop-shadow-lg text-[#2C7DA0]"
          >
            Merchandise Resmi
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
    </section>
  );
}
