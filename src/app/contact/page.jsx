import Footer from "@/components/Footer";

export const metadata = {
  title: "Kontak & Lokasi | King Kong Splash Pandaan",
  description:
    "Info lengkap alamat, rute perjalanan, nomor telepon, WhatsApp, dan jam buka operasional King Kong Splash Waterpark Pandaan.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-sky-50 text-gray-800">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-6">Kontak Kami</h1>

        <p className="text-lg text-gray-700 text-center mb-10">
          Ada pertanyaan? Silakan hubungi kami melalui informasi berikut.
        </p>

        <div className="bg-white shadow-lg rounded-xl p-8 space-y-4">
          <p className="text-gray-700">
            📍 <strong>Alamat:</strong>{" "}
            Jalan Pahlawan Prof. Sunaryo No.9, Mbajang, Kb. Waris, Kec. Pandaan, Pasuruan, Jawa Timur 67156
          </p>

          <p className="text-gray-700">
            📞 <strong>Telepon:</strong>{" "}
            <a href="tel:+6287701044580" className="text-blue-600 underline">
              6287701044580
            </a>
          </p>

          <p className="text-gray-700">
            💬 <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/6287701044580"
              className="text-blue-600 underline"
              target="_blank"
            >
              Chat via WhatsApp
            </a>
          </p>

          <p className="text-gray-700">
            🌐 <strong>Instagram:</strong>{" "}
            <a
              href="https://instagram.com/kingkongsplash"
              className="text-blue-600 underline"
              target="_blank"
            >
              @kingkongsplash
            </a>
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Lokasi di Google Maps
          </h2>
          <div className="w-full h-72 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.352952542932!2d112.70523997574841!3d-7.645141575629616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7d98ed407f445%3A0xbc0788d114702b4d!2sKingkong%20Splash%20Waterpark!5e0!3m2!1sid!2sid!4v1761126682278!5m2!1sid!2sid"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen=""
            />
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
