"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Merchandise() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // ✅ Ganti nomor WA sesuai nomor resmi kamu
  const whatsappNumber = "6285336047865";
  const whatsappMessage = encodeURIComponent("saya mau beli merchnya dong");

  const merchItems = [
    {
      name: "Brooch King Kong",
      price: "Rp 25.000",
      image: "/images/merch-brooch.png",
    },
    {
      name: "Lanyard King Kong",
      price: "Rp 35.000",
      image: "/images/merch-lanyard.png",
    },
    // {
    //   name: "Tumbler King Kong",
    //   price: "Rp 75.000",
    //   image: "/images/merch-tumbler.png",
    // },
  ];

  return (
    <section
      id="merchandise"
      className="relative bg-gradient-to-b from-[#F9C021]/10 to-[#FFF8E1] py-20 text-[#2F2723] overflow-hidden"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {/* ✨ Spotlight efek mengikuti cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(249,192,33,0.15), transparent 70%)`,
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          🎁 Merchandise Eksklusif
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#2F2723]/70 max-w-2xl mx-auto mb-12"
        >
          Bawa pulang kenangan seru dari <b>King Kong Splash</b>! Koleksi
          merchandise spesial kami siap melengkapi harimu.
        </motion.p>

        {/* Grid Merchandise */}
        <div
          className={`grid ${
            merchItems.length <= 2
              ? "grid-cols-1 sm:grid-cols-2 justify-center"
              : "grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          } gap-8 justify-items-center`}
        >
          {merchItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                boxShadow: "0px 8px 30px rgba(249,192,33,0.4)",
                transition: { type: "spring", stiffness: 200 },
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden w-[160px] sm:w-[180px] md:w-[200px] p-4 flex flex-col items-center hover:shadow-2xl"
            >
              <div className="relative w-full aspect-square mb-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-base md:text-lg">
                {item.name}
              </h3>
              <p className="text-[#F9C021] font-bold mt-1">{item.price}</p>
            </motion.div>
          ))}
        </div>

        {/* Tombol WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2F2723] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#F9C021] hover:text-[#2F2723] transition-all duration-300"
          >
            Pesan Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}
