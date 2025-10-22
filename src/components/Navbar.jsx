"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 80; // offset biar ga ketutupan navbar
      window.scrollTo({ top: offset, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2F2723] shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 text-white">
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
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "#hero")}
            className="hover:text-[#F9C021] transition-colors"
          >
            Home
          </a>
          <a
            href="#event"
            onClick={(e) => handleScroll(e, "#event")}
            className="hover:text-[#F9C021] transition-colors"
          >
            Event
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleScroll(e, "#pricing")}
            className="hover:text-[#F9C021] transition-colors"
          >
            Harga Tiket
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleScroll(e, "#gallery")}
            className="hover:text-[#F9C021] transition-colors"
          >
            Gallery
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="hover:text-[#F9C021] transition-colors"
          >
            About
          </a>
        </div>

        {/* Tombol hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown menu (mobile) */}
      {isOpen && (
        <div className="md:hidden bg-[#2F2723] text-white flex flex-col items-center space-y-4 py-6 animate-fade-in-down">
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "#hero")}
            className="hover:text-[#F9C021]"
          >
            Home
          </a>
          <a
            href="#event"
            onClick={(e) => handleScroll(e, "#event")}
            className="hover:text-[#F9C021]"
          >
            Event
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "#about")}
            className="hover:text-[#F9C021]"
          >
            Tentang
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleScroll(e, "#pricing")}
            className="hover:text-[#F9C021]"
          >
            Harga Tiket
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="hover:text-[#F9C021]"
          >
            Kontak
          </a>
        </div>
      )}
    </nav>
  );
}
