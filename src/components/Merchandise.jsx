"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// 1. Dynamic Import untuk komponen 3D (Lanyard)
const Lanyard = dynamic(() => import("./reactbits/Lanyard"), {
  ssr: false, // Penting agar komponen 3D hanya dirender di sisi klien
  loading: () => (
    <div className="flex justify-center items-center w-full h-[500px] text-white">
      Loading 3D Lanyard...
    </div>
  ),
});

export default function Merchandise() {
  // 2. Data untuk Link WhatsApp
  const whatsappNumber = "6287701044580";
  const whatsappMessage = encodeURIComponent(
    "Saya mau beli Lanyard King Kong!"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen bg-black text-white overflow-hidden">
      {/* 3. Title (dengan Framer Motion) */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        King Kong Lanyard
      </motion.h2>

      {/* 4. Subtitle (dengan Framer Motion) */}
      <motion.p
        className="text-lg text-gray-300 mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Lanyard keren bergaya King Kong — cocok untuk ID card, event, atau
        sekadar gaya! Bisa kamu lihat langsung dalam bentuk 3D interaktif di
        bawah ini 👇
      </motion.p>

      {/* 5. 3D Viewer Box (dengan Penyesuaian Responsif) */}
      <motion.div
        className="relative w-full max-w-4xl h-[600px] lg:h-[800px] border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.1)] mb-12 bg-gradient-to-b from-[#111] to-[#000]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Lanyard />
      </motion.div>

      {/* 6. WhatsApp Button (dengan Framer Motion) */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/30"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        Beli Sekarang
      </motion.a>

      {/* 7. Glow Effect sebagai latar belakang dekoratif */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
    </section>
  );
}
