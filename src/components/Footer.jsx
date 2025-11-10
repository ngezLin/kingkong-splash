"use client";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#323131] text-[#E3F6F7] py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo dan Deskripsi */}
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold text-[#6FCEDC]">
            King Kong Splash Waterpark
          </h2>
          <p className="mt-3 text-sm text-[#E3F6F7]/80 max-w-sm leading-relaxed">
            Destinasi wisata di pandaan , dengan wahana seru, kolam bersih, dan
            suasana menyenangkan untuk seluruh keluarga. Ownernya main emel.
          </p>
        </div>

        {/* Kontak */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#9CDEEE] mb-3">
            Hubungi Kami
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#6FCEDC]" />
              <span>
                Jalan Pahlawan Prof. Sunaryo No.9, Mbajang. Pandaan, Pasuruan{" "}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-[#6FCEDC]" />
              <a
                href="https://wa.me/6287701044580"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#9CDEEE] transition"
              >
                087701044580
              </a>
            </li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-[#9CDEEE] mb-3">
            Ikuti Kami
          </h3>
          <div className="flex items-center gap-5 text-2xl">
            <a href="#" className="hover:text-[#6FCEDC] transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#6FCEDC] transition">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Garis bawah */}
      <div className="mt-10 border-t border-[#63B5D6]/40 pt-6 text-center text-sm text-[#E3F6F7]/70">
        © {new Date().getFullYear()} King Kong Splash. All Rights Reserved.
      </div>
    </footer>
  );
}
