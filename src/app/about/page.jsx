export const metadata = {
  title: "Tentang King Kong Splash",
  description:
    "Pelajari lebih lanjut tentang King Kong Splash Pandaan — kolam renang dan wahana air untuk keluarga, anak-anak, dan tempat wisata favorit di Pasuruan.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sky-50 text-gray-800">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Tentang King Kong Splash
        </h1>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          King Kong Splash adalah kolam renang keluarga yang berlokasi di
          Pandaan, Pasuruan. Kami menghadirkan berbagai wahana air seru,
          seluncuran, kolam anak, dan area santai untuk orang tua. Tempat ini
          dirancang untuk memberikan pengalaman liburan yang menyenangkan bagi
          seluruh keluarga.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Sejak dibuka, King Kong Splash telah menjadi destinasi favorit bagi
          warga Pandaan, Pasuruan, dan sekitarnya. Kami terus berkomitmen
          menghadirkan fasilitas terbaik, keamanan terjamin, serta pelayanan
          ramah bagi pengunjung.
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">
            Mengapa Memilih King Kong Splash?
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Kolam anak & dewasa</li>
            <li>Wahana seluncuran air</li>
            <li>Tempat nyaman untuk keluarga</li>
            <li>Harga tiket terjangkau</li>
            <li>Lokasi strategis di Pandaan</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
