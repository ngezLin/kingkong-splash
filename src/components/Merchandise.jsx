"use client";
import TiltedCard from "./TiltedCard";
import AnimatedContent from "./AnimatedContent";

export default function Merchandise() {
  const whatsappNumber = "6287701044580";
  const whatsappMessage = encodeURIComponent("saya mau beli merchnya dong");

  const merchItems = [
    {
      name: "Brooch King Kong",
      price: "Rp 25.000",
      image: "/images/merch1.png",
    },
    {
      name: "Lanyard King Kong",
      price: "Rp 35.000",
      image: "/images/merch2.png",
    },
  ];

  return (
    <section
      id="merchandise"
      className="relative bg-gradient-to-b from-[#E3F6F7] to-[#9CDEEE]/40 py-20 text-[#323131]"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          🎁 Merchandise Eksklusif
        </h2>
        <p className="text-[#323131]/70 max-w-2xl mx-auto mb-12">
          Bawa pulang kenangan seru dari{" "}
          <b className="text-[#63B5D6]">King Kong Splash</b>! Koleksi
          merchandise spesial kami siap melengkapi harimu.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {merchItems.map((item, i) => (
            <AnimatedContent
              key={i}
              distance={150}
              direction="horizontal"
              delay={i * 0.2}
              duration={1}
            >
              <TiltedCard
                imageSrc={item.image}
                altText={item.name}
                captionText={item.name}
                priceText={item.price}
              />
            </AnimatedContent>
          ))}
        </div>

        <AnimatedContent
          distance={100}
          direction="vertical"
          duration={1}
          delay={0.5}
        >
          <div className="mt-12">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#323131] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#63B5D6] hover:text-[#323131] transition-all duration-300 shadow-md"
            >
              Pesan Sekarang
            </a>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
