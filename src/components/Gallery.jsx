"use client";
import CircularGallery from "./CircularGallery";

export default function Gallery() {
  const images = [
    { image: "/images/gal1.png", text: "Overview" },
    { image: "/images/gal2.png", text: "Model Kingkong" },
    { image: "/images/gal3.png", text: "Model luar" },
    { image: "/images/gal4.png", text: "apalah ini" },
    { image: "/images/gal5.png", text: "Kolam renang" },
    { image: "/images/gal6.png", text: "candid" },
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 bg-gradient-to-b from-[#E3F6F7] to-[#9CDEEE] overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#323131]">
          Galeri King Kong Splash
        </h2>
        <p className="text-[#323131]/70 mt-3 text-lg">
          Keseruan dan keceriaan di wahana air kami!
        </p>
      </div>

      {/* Circular Gallery */}
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          items={images}
          bend={3}
          textColor="#323131"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </section>
  );
}
