"use client";
import { motion } from "framer-motion";

export default function Description() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Kolam Renang & Wahana Air Terbaik di Pandaan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Description - SEO Rich Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Paragraph 1 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-cyan-100">
            <p className="text-gray-700 text-lg leading-relaxed">
              <strong className="text-cyan-600">King Kong Splash</strong> adalah{" "}
              <strong className="text-gray-800">kolam renang di Pandaan</strong>{" "}
              yang menawarkan berbagai{" "}
              <strong className="text-gray-800">wahana air seru</strong> untuk
              anak-anak dan keluarga. Dengan suasana sejuk khas Pasuruan dan
              area yang luas, tempat ini cocok untuk rekreasi keluarga, acara
              sekolah, maupun liburan akhir pekan.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-cyan-100">
            <p className="text-gray-700 text-lg leading-relaxed">
              Dikenal juga sebagai{" "}
              <strong className="text-gray-800">kolam renang Kingkong</strong>,
              King Kong Splash menghadirkan pengalaman bermain air yang aman,
              bersih, dan menyenangkan. Banyak pengunjung menyebutnya sebagai{" "}
              <strong className="text-gray-800">wahana air Pandaan</strong>{" "}
              paling populer, berkat fasilitas modern dan area bermain yang
              selalu terawat.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-cyan-100">
            <p className="text-gray-700 text-lg leading-relaxed">
              Jika kamu mencari tempat liburan keluarga terbaik di Pasuruan,{" "}
              <strong className="text-cyan-600">King Kong Splash</strong> adalah
              pilihan utama untuk bersantai dan bersenang-senang bersama orang
              tercinta. Lokasi strategis dan akses mudah membuat kami menjadi
              destinasi <strong className="text-gray-800">wahana air</strong>{" "}
              favorit di Jawa Timur.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            {
              icon: "🏊‍♂️",
              title: "Kolam Renang Keluarga",
              desc: "Area kolam yang luas dan aman untuk semua usia",
            },
            {
              icon: "🎢",
              title: "Wahana Air Seru",
              desc: "Seluncuran raksasa dan berbagai permainan air",
            },
            {
              icon: "🌳",
              title: "Suasana Asri",
              desc: "Lingkungan sejuk dan nyaman khas pegunungan Pandaan",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-cyan-100"
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-700 text-lg mb-6">
            Siap untuk pengalaman bermain air yang tak terlupakan?
          </p>
          <a
            href="#pricing"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
          >
            Cek Harga Tiket Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}
