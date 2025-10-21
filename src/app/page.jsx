import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Lanyard from "@/components/Lanyard";
import Event from "@/components/Event";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Merchandise from "@/components/Merchandise";
import AboutMap from "@/components/AboutMap";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Page() {
  return (
    <main className="bg-sky-50 text-gray-800 scroll-smooth">
      <Navbar />
      <Hero />
      {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
      <Event />
      <Pricing />
      {/* <Gallery /> */}
      {/* <Merchandise /> */}
      {/* <AboutMap /> */}
      {/* <Footer /> */}
      {/* <WhatsAppButton /> */}
    </main>
  );
}
