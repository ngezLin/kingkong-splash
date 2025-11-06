"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamic Import untuk komponen 3D (Lanyard)
const Lanyard = dynamic(() => import("./reactbits/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center w-full h-[500px]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-cyan-400/10 rounded-full"></div>
      </div>
    </div>
  ),
});

export default function Merchandise() {
  const whatsappNumber = "6287701044580";
  const whatsappMessage = encodeURIComponent(
    "Halo Kong! Saya tertarik dengan Lanyard King Kong. Bisakah info lebih lanjut?"
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="merchandise"
      className="relative flex flex-col items-center justify-center w-full min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl w-full">
        {/* Badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">
              EXCLUSIVE MERCHANDISE
            </span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-5xl md:text-7xl font-black mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          King Kong Lanyard
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-slate-300 mb-12 text-center max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Lanyard premium dengan desain eksklusif King Kong Splash.
          <span className="text-cyan-400 font-semibold">
            {" "}
            Putar model 3D
          </span>{" "}
          di bawah ini untuk melihat detailnya! 🎨
        </motion.p>

        {/* 3D Viewer Container */}
        <motion.div
          className="relative w-full max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Glow Effect Behind Viewer */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl -z-10 animate-pulse"></div>

          {/* Main 3D Viewer Box */}
          <div
            className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm
                          border border-white/10 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50"
          >
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-400/50 rounded-br-3xl"></div>

            {/* 3D Content */}
            <Lanyard />

            {/* Interaction Hint */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-slate-950/80 backdrop-blur-md rounded-full border border-cyan-500/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <p className="text-cyan-400 text-sm font-medium flex items-center gap-2">
                <svg
                  className="w-5 h-5 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
                Klik & Drag untuk memutar
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            {
              icon: "✨",
              title: "Premium Quality",
              desc: "Material berkualitas tinggi",
            },
            {
              icon: "🎨",
              title: "Desain Eksklusif",
              desc: "Logo King Kong yang unik",
            },
            {
              icon: "💪",
              title: "Tahan Lama",
              desc: "Kuat dan awet untuk penggunaan sehari-hari",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-lg font-bold text-white shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>

            {/* Button Content */}
            <span className="relative flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pesan via WhatsApp
            </span>
          </motion.a>

          <p className="text-slate-400 text-sm">
            Stok terbatas! Dapatkan sekarang juga 🔥
          </p>
        </motion.div>
      </div>
    </section>
  );
}
