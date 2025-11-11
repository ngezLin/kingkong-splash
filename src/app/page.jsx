import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Event from "@/components/Event";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Merchandise from "@/components/Merchandise";
import AboutMap from "@/components/AboutMap";
import Footer from "@/components/Footer";
import Description from "@/components/Description";
import CallButton from "@/components/CallButton";

export default function Page() {
  return (
    <main className="min-h-screen text-gray-800 scroll-smooth bg-linear-to-b from-[#E3F6F7] via-[#9CDEEE]/40 to-[#E3F6F7]">
      <Navbar />
      <Hero />
      <Event />
      <CallButton />
      <Pricing />
      <Description />
      <Gallery />
      <Merchandise />
      <AboutMap />
      <Footer />
    </main>
  );
}
