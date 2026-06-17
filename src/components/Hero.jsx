"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { Play } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // --- Mount detection ---
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // --- Lock body scroll until the intro is played ---
  useEffect(() => {
    if (!isMounted) return;
    if (!hasStarted) {
      document.body.style.overflow = "hidden";
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      if (window.lenis) window.lenis.start();
    };
  }, [isMounted, hasStarted]);

  // --- Pause/Play video based on viewport intersection ---
  useEffect(() => {
    if (!isMounted || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasStarted && videoRef.current) {
            videoRef.current.play().catch((err) => {});
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isMounted, hasStarted]);

  // --- Handle Play button click ---
  const handlePlay = useCallback(() => {
    setHasStarted(true);

    // Play the background video
    if (videoRef.current) {
      videoRef.current.play().catch((err) =>
        console.log("Video play failed:", err)
      );
    }

    // Cinematic text reveal after a 2.5s delay to let the video zoom in first
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power2.out", delay: 2.5 }
    );
  }, []);

  // --- SSR loading skeleton ---
  if (!isMounted) {
    return (
      <section
        id="hero"
        className="relative w-full h-screen bg-sky-950 flex flex-col items-center justify-center text-white gap-4 z-50"
      >
        <div className="w-16 h-16 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
        <div className="text-cyan-300 font-bold text-xl tracking-wider animate-pulse">
          Memuat King Kong Splash...
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-sky-950"
    >
      {/* Background video (poster shows first frame before playing) */}
      <video
        ref={videoRef}
        src="/assets/KingkongSplashHeroVideo.mp4"
        poster="/assets/ParallaxAsset/0002.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        muted
        playsInline
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-[1] pointer-events-none" />

      {/* ============================================= */}
      {/*  PLAY BUTTON OVERLAY — the cinematic gate     */}
      {/* ============================================= */}
      {!hasStarted && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 animate-fade-in">
          {/* Play button */}
          <button
            onClick={handlePlay}
            className="group relative flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/30 text-white transition-all duration-500 hover:scale-110 active:scale-95 shadow-2xl cursor-pointer"
            aria-label="Mulai Petualangan"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-ping opacity-50"></span>
            <span className="absolute -inset-3 rounded-full border border-cyan-400/20 animate-pulse opacity-30"></span>
            <span className="absolute -inset-6 rounded-full border border-cyan-400/10 animate-pulse opacity-20" style={{ animationDelay: "0.5s" }}></span>
            <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white/20 group-hover:fill-white/40 transition-all duration-300 ml-1" />
          </button>

          {/* Label below button */}
          <span className="text-white/80 text-sm md:text-base font-semibold tracking-[0.2em] uppercase animate-pulse">
            Mulai Petualangan
          </span>
        </div>
      )}

      {/* ============================================= */}
      {/*  HERO TEXT CONTENT (revealed after Play)      */}
      {/* ============================================= */}
      <div
        ref={contentRef}
        style={{ opacity: 0 }}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
      >
        <div className="w-full max-w-6xl mx-auto px-6 text-center space-y-4 md:space-y-6 pointer-events-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-white text-xs md:text-sm font-semibold">
              Kolam Renang Terfavorit di Pandaan
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-0 drop-shadow-2xl">
            Kolam Renang Pandaan
            <span className="block text-cyan-300 drop-shadow-md">
              King Kong Splash Waterpark
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-2xl text-white font-semibold max-w-4xl mx-auto mt-1 drop-shadow-lg leading-relaxed">
            Wisata Air Keluarga Terbaik & Seru di Pasuruan
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2 md:pt-4">
            <Link
              href="https://wa.me/6287701044580?text=Halo%20King%20Kong%20Splash!%20Saya%20mau%20beli%20tiket%20wahana%20air%20Pandaan%20dong!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-6 md:py-4 md:px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-xl text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pesan Tiket Sekarang
            </Link>

            <Link
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold py-3.5 px-6 md:py-4 md:px-8 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-md text-sm md:text-base"
            >
              Lihat Harga Tiket
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 md:pt-6 text-white drop-shadow-md text-xs md:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">4.8/5</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="font-semibold">10.000+ Pengunjung</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Aman & Terpercaya</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
