"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setIsOpen(false);
    }
  };

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

  const menuItems = [
    { id: "#hero", label: "Home" },
    { id: "#event", label: "Event" },
    { id: "#pricing", label: "Harga Tiket" },
    { id: "#gallery", label: "Gallery" },
    { id: "#about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#323131]/90 backdrop-blur-md shadow-lg border-b border-[#63B5D6]/40">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 text-[#E3F6F7]">
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
            className="object-contain"
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
                  ? "text-[#6FCEDC]" // warna aktif
                  : "text-[#E3F6F7] hover:text-[#9CDEEE]" // default + hover
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden focus:outline-none text-[#E3F6F7]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown menu (mobile) */}
      {isOpen && (
        <div className="md:hidden bg-[#323131]/95 text-[#E3F6F7] flex flex-col items-center space-y-4 py-6 border-t border-[#63B5D6]/30 animate-fade-in-down">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => handleScroll(e, item.id)}
              className={`transition-colors ${
                activeSection === item.id
                  ? "text-[#6FCEDC]"
                  : "hover:text-[#9CDEEE]"
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
