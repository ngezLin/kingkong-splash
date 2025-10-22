"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function AboutMap() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/6285336047865", "_blank"); // no wa
  };

  return (
    <section
      id="about"
      className="bg-[#2F2723] text-white py-20 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Kolom Kiri - Tentang */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold text-[#F9C021]">
            Tentang King Kong Splash
          </h2>
          <p className="text-lg leading-relaxed text-gray-100/90">
            King Kong Splash adalah destinasi wisata air yang seru untuk
            keluarga dan anak-anak. Didesain dengan berbagai wahana menarik,
            kolam renang bersih, dan suasana yang menyenangkan untuk semua umur.
          </p>
          <div className="text-[#F9C021] font-semibold text-lg">
            🕒 Buka Setiap Hari: <br />
            <span className="text-white">08.00 – 17.00 WIB</span>
          </div>
        </div>

        {/* Kolom Kanan - Map */}
        <div className="flex-1 w-full h-[350px] rounded-2xl overflow-hidden shadow-lg border-4 border-[#F9C021]">
          <iframe
            title="King Kong Splash Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.985664367123!2d112.72836447499977!3d-7.128573492877759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e780cfe48c5a3b3%3A0x8a3c9a7fcd8e6a8d!2sKing%20Kong%20Splash!5e0!3m2!1sid!2sid!4v1697743778123!5m2!1sid!2sid"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-none"
          ></iframe>
        </div>
      </div>

      {/* Tombol WhatsApp */}
      <div className="mt-12 text-center">
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-3 bg-[#F9C021] text-[#2F2723] font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-[#2F2723] hover:text-[#F9C021] border-2 border-[#F9C021] transition-all duration-300"
        >
          <FaWhatsapp size={22} />
          Pesan Tiket via WhatsApp
        </button>
      </div>

      {/* Efek dekorasi background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,192,33,0.1),transparent_60%)] pointer-events-none" />
    </section>
  );
}
