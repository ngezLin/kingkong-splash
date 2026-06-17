"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Berapa harga tiket masuk King Kong Splash?",
      answer: "Harga tiket masuk normal berkisar antara Rp15.000 hingga Rp25.000, tergantung pada hari kunjungan (weekdays/weekend/holiday). Kami juga menyediakan paket promo khusus untuk rombongan sekolah.",
    },
    {
      question: "Di mana lokasi Kolam Renang King Kong?",
      answer: "Lokasi King Kong Splash berada di Jl. Pahlawan Prof. Sunaryo No.9, Mbajang, Kecamatan Pandaan, Pasuruan, Jawa Timur 67156. Lokasi kami sangat mudah diakses dengan kendaraan pribadi dan dekat dengan pusat kota Pandaan.",
    },
    {
      question: "Jam berapa King Kong Splash buka?",
      answer: "King Kong Splash buka setiap hari (Senin - Minggu) mulai pukul 07.00 WIB hingga 17.00 WIB, cocok untuk petualangan air pagi hari maupun bersantai di sore hari.",
    },
    {
      question: "Apa tempat renang di Pandaan yang paling direkomendasikan?",
      answer: "King Kong Splash adalah tempat renang di Pandaan yang sangat direkomendasikan berkat wahana airnya yang lengkap, air kolam yang bersih dan selalu terawat, area kolam anak yang aman, serta pemandangan asri pegunungan.",
    },
    {
      question: "Apakah ada promo tiket rombongan sekolah di King Kong Splash?",
      answer: "Ya! Kami menawarkan promo khusus untuk rombongan sekolah dengan fasilitas lengkap, area privat, serta gratis 1 tiket masuk untuk setiap pembelian kelipatan 20 tiket. Silakan hubungi admin kami untuk penawaran harga terbaik.",
    },
    {
      question: "Apakah ada wahana air ekstrem di King Kong Splash?",
      answer: "King Kong Splash menyediakan seluncuran raksasa (water slide) yang seru untuk menguji adrenalin Anda dengan aman, serta wahana air interaktif yang menyenangkan di area kolam anak.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#6FCEDC] font-semibold mb-3 tracking-wider uppercase">F.A.Q</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Pertanyaan Umum
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan jawaban cepat untuk pertanyaan yang sering diajukan mengenai fasilitas, harga, lokasi, dan promo di King Kong Splash Pandaan.
          </p>
        </motion.div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-cyan-100/50 shadow-xs overflow-hidden hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {/* Header/Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center text-left p-6 md:p-8 focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-gray-800 text-base md:text-lg group-hover:text-cyan-600 transition-colors duration-300 pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-cyan-50 group-hover:bg-cyan-100 transition-colors duration-300 ${
                      isOpen ? "rotate-180 bg-cyan-100" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-cyan-600" />
                  </div>
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 text-gray-600 text-base md:text-lg border-t border-cyan-50/50 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
