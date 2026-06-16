"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [opacity, setOpacity] = useState(0);

  // Scroll smooth ke section
  const handleScroll = (e, targetId) => {
    const target = document.querySelector(targetId);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Ganti active section + efek scroll background
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const eventSection = document.getElementById("event");
      if (eventSection) {
        const rect = eventSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        // Start fading in when the Event section enters the viewport
        const startFade = viewportHeight;
        // Fully visible when the Event section reaches 100px from the top
        const endFade = 100;

        if (rect.top >= startFade) {
          setOpacity(0);
        } else if (rect.top <= endFade) {
          setOpacity(1);
        } else {
          // Linear interpolation of opacity between 0 and 1
          const progress = (startFade - rect.top) / (startFade - endFade);
          setOpacity(progress);
        }
      } else {
        // Fallback based on scroll position
        const threshold = window.innerHeight * 1.5;
        const fadeRange = 300;
        if (window.scrollY >= threshold) {
          setOpacity(1);
        } else if (window.scrollY <= threshold - fadeRange) {
          setOpacity(0);
        } else {
          const progress = (window.scrollY - (threshold - fadeRange)) / fadeRange;
          setOpacity(progress);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items
  const menuItems = [
    { id: "#hero", label: "Home" },
    { id: "#event", label: "Event" },
    { id: "#pricing", label: "Harga Tiket" },
    { id: "#gallery", label: "Gallery" },
    { id: "#merchandise", label: "Merchandise" },
    { id: "#about", label: "About" },
  ];

  const baseUrl = "https://kolamrenangkingkong.com";
  return (
    <nav
      style={{
        opacity: opacity,
        pointerEvents: opacity > 0.1 ? "auto" : "none",
      }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-[#63B5D6]/30 transition-shadow duration-500"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-2  text-[#323131]">
        {/* Logo */}
        <a
          href={baseUrl}
          onClick={(e) => handleScroll(e, "#hero")}
          className="flex items-center"
        >
          <Image
            src="/images/logo1.png"
            alt="King Kong Splash Logo"
            width={60}
            height={200}
            className="w-full h-auto object-cover"
            priority
          />
        </a>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-8 font-medium">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => handleScroll(e, item.id)}
              className={`transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-[#63B5D6]"
                  : "text-[#000000] hover:text-[#6FCEDC]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden focus:outline-none text-[#323131]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg text-[#323131] flex flex-col items-center space-y-4 py-6 border-t border-[#63B5D6]/30 animate-fade-in-down">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => handleScroll(e, item.id)}
              className={`font-medium transition-colors ${
                activeSection === item.id
                  ? "text-[#63B5D6]"
                  : "hover:text-[#6FCEDC]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
