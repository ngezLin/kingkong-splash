"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);

  // Scroll smooth ke section
  const handleScroll = (e, targetId) => {
    e.preventDefault();
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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-[#63B5D6]/30"
          : "bg-transparent backdrop-blur-none border-none shadow-none"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4 text-[#323131]">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleScroll(e, "#hero")}
          className="flex items-center"
        >
          <Image
            src="/images/logo1.png"
            alt="King Kong Splash Logo"
            width={120}
            height={50}
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
                  : "text-[#323131] hover:text-[#6FCEDC]"
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
          {isOpen ? <X size={28} /> : <Menu size={28} />}
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
