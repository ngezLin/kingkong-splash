import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
      <Event />
      <Pricing />
      <Gallery />
      <Merchandise />
      {/* <AboutMap /> */}
      {/* <Footer /> */}
    </main>
  );
}
