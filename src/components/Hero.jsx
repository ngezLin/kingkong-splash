"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const startFrame = 2;
const numFrames = 215;
const totalFrames = numFrames - startFrame + 1; // 214 frames (0002.jpg to 0215.jpg)

const getFramePath = (index) => {
  const frameNumber = startFrame + index;
  const fileNum = String(frameNumber).padStart(4, "0");
  return `/assets/ParallaxAsset/${fileNum}.jpg`;
};

export default function Hero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const imagesRef = useRef([]);

  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    // Register GSAP ScrollTrigger inside useEffect for Next.js SSR compatibility
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Load only a subset of frames on mobile screens to drastically reduce memory usage and prevent VRAM exhaustion lag
    const isMobile = window.innerWidth < 768;
    const frameStep = isMobile ? 3 : 1; // Load 1/3 of the frames on mobile (71 frames instead of 214)
    const subsetTotal = Math.ceil(totalFrames / frameStep);

    let loadedCount = 0;
    const tempImages = [];
    const animationObj = { frame: 1 };

    // Function to calculate cover proportions for standard canvas resizing
    const drawFrame = (index) => {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;
      const ctx = currentCanvas.getContext("2d");
      const img = imagesRef.current[index];
      if (!img) return;

      ctx.clearRect(0, 0, currentCanvas.width, currentCanvas.height);

      const canvasRatio = currentCanvas.width / currentCanvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = currentCanvas.width;
        drawHeight = currentCanvas.width / imgRatio;
        offsetX = 0;
        offsetY = (currentCanvas.height - drawHeight) / 2;
      } else {
        drawWidth = currentCanvas.height * imgRatio;
        drawHeight = currentCanvas.height;
        offsetX = (currentCanvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      const currentCanvas = canvasRef.current;
      if (!currentCanvas) return;
      currentCanvas.width = window.innerWidth;
      currentCanvas.height = window.innerHeight;

      // Re-draw current frame on resize
      const currentFrame = Math.floor(animationObj.frame) - 1;
      drawFrame(Math.min(Math.max(0, currentFrame), subsetTotal - 1));
    };

    const initScrollAnimation = () => {
      // Set canvas initial size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener("resize", handleResize);

      // Render the very first frame immediately (0002.jpg)
      drawFrame(0);

      // GSAP Timeline to animate the frame sequence tied to scrolling
      const timeline = gsap.to(animationObj, {
        frame: subsetTotal,
        snap: "frame", // Snap value to whole integer frames
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4, // Smooth scrub catchup delay
        },
        onUpdate: () => {
          const currentFrame = Math.floor(animationObj.frame) - 1;
          drawFrame(Math.min(Math.max(0, currentFrame), subsetTotal - 1));
        },
      });

      // GSAP Timeline to fade the Hero text IN and freeze/hold it until the end of the parallax scroll
      const contentTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      contentTimeline
        // 1. Text fades IN and slides up slightly in the first 25% of the scroll
        .fromTo(
          contentRef.current,
          { opacity: 0, y: 50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" }
        )
        // 2. Holds the text fully visible and active (stuck in center) for the remaining 75% of the scroll
        .to(contentRef.current, { duration: 3 });

      return () => {
        window.removeEventListener("resize", handleResize);
        timeline.kill();
        contentTimeline.kill();
        // Clean up ScrollTrigger instances for the hero section
        ScrollTrigger.getAll().forEach(t => {
          if (t.vars.trigger === containerRef.current) t.kill();
        });
      };
    };

    const onImageLoad = () => {
      loadedCount++;
      setLoadProgress(Math.round((loadedCount / subsetTotal) * 100));

      if (loadedCount === subsetTotal) {
        setIsLoading(false);
        // Wait a small bit to let state resolve before initializing animation
        setTimeout(() => {
          initScrollAnimation();
        }, 100);
      }
    };

    // Preload subset of frames asynchronously starting from 0002.jpg (index 0)
    for (let i = 0; i < totalFrames; i += frameStep) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = onImageLoad;
      img.onerror = onImageLoad; // Fallback so page loads even if an asset fails
      tempImages.push(img);
    }
    imagesRef.current = tempImages;

    // Draw frame 0 (0002.jpg) immediately once it loads, in case loading takes some time
    if (tempImages[0]) {
      tempImages[0].onload = () => {
        // Only set and draw if container is still loading
        const currentCanvas = canvasRef.current;
        if (currentCanvas && isLoading) {
          currentCanvas.width = window.innerWidth;
          currentCanvas.height = window.innerHeight;
          drawFrame(0);
        }
        onImageLoad();
      };
    }

    return () => {
      // Cleanup events on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoading]);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{ height: "250vh" }} // Inline style guarantees container height and enables scroll range on Windows
      className="relative w-full"
    >
      {/* Sticky background wrapper containing both Canvas and Text Content Overlay */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-sky-950 z-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover block z-0"
        />
        
        {/* Dark gradient overlay for top and bottom readability against bright skies/water */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/65 z-1" />

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-sky-950 z-50 text-white gap-4">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
            <div className="text-cyan-300 font-bold text-xl tracking-wider animate-pulse">
              Memuat King Kong Splash... {loadProgress}%
            </div>
            <div className="text-xs text-sky-300/80">
              Mempersiapkan visual petualangan air terbaik
            </div>
          </div>
        )}

        {/* Sticky Text Content Wrapper - centered inside the sticky viewport */}
        <div
          ref={contentRef}
          style={{ opacity: 0 }} // Pre-hide to prevent flash on server side render
          className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
        >
        {/* pointer-events-auto re-enables link clicking on buttons inside the content container */}
        <div className="w-full max-w-6xl mx-auto px-6 text-center space-y-4 md:space-y-6 pointer-events-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-white text-xs md:text-sm font-semibold">
              Kolam Renang Terfavorit di Pandaan
            </span>
          </div>

          {/* Main Title - size is reduced on mobile (text-4xl) to prevent clipping at the top */}
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
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">4.8/5</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="font-semibold">10.000+ Pengunjung</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">Aman & Terpercaya</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
