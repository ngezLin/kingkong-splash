"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // ikon hamburger & close

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2F2723] shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <Link href="#hero" className="flex items-center">
          <Image
            src="/images/logo1.png"
            alt="King Kong Splash Logo"
            width={120}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="#hero" className="hover:text-[#F9C021] transition-colors">
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#F9C021] transition-colors"
          >
            Tentang
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#F9C021] transition-colors"
          >
            Kontak
          </Link>
        </div>

        {/* Tombol hamburger (mobile) */}
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
          <Link
            href="#hero"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#F9C021]"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#F9C021]"
          >
            Tentang
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#F9C021]"
          >
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
}
