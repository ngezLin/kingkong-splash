"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollSlide() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [tilt, setTilt] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [pathLength, setPathLength] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pathRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(0);
  const scrollTimeoutRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const frameCounter = useRef(0);
  const scrollVelocity = useRef(0);

  // Track size configuration
  const trackWidth = 24; // w-6 in Tailwind (24px)

  // SVG Water Slide Path definition (shared between background and filled lines)
  const getPathD = (heightPx) => {
    return `M ${trackWidth / 2} 0 C ${trackWidth / 2 + 6} ${heightPx * 0.1} , ${trackWidth / 2 - 6} ${heightPx * 0.2} , ${trackWidth / 2} ${heightPx * 0.3} S ${trackWidth / 2 + 6} ${heightPx * 0.4} , ${trackWidth / 2} ${heightPx * 0.5} S ${trackWidth / 2 - 6} ${heightPx * 0.7} , ${trackWidth / 2} ${heightPx * 0.8} L ${trackWidth / 2} ${heightPx}`;
  };

  const [pathD, setPathD] = useState("");

  // Mobile detection
  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    lastScrollY.current = window.scrollY;
    lastScrollTime.current = Date.now();

    const handleScroll = () => {
      const now = Date.now();
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);

      const dt = now - lastScrollTime.current;
      const dy = scrollTop - lastScrollY.current;

      if (dt > 0) {
        // Calculate scroll velocity and map it to tilt angle (max 20deg)
        const velocity = dy / dt;
        scrollVelocity.current = velocity;
        const targetTilt = Math.min(Math.max(velocity * 8, -20), 20);
        setTilt(targetTilt);
      }

      setIsScrolling(true);

      // Spawn splash particles at the scroll indicator's position (desktop only)
      if (!isMobile && containerRef.current && canvasRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const indicatorY = progress * (rect.height - 40); // Indicator is ~40px high
        const indicatorX = trackWidth / 2 + Math.sin(progress * Math.PI * 6) * 6;

        // Spawn 2-3 splash particles per scroll event
        const count = Math.random() > 0.5 ? 2 : 1;
        for (let i = 0; i < count; i++) {
          particlesRef.current.push({
            type: "splash",
            x: indicatorX,
            y: indicatorY + 20, // spawn near center/bottom of indicator
            vx: (Math.random() - 0.5) * 1.5,
            vy: (Math.random() - 0.8) * 1.2, // splash upwards slightly
            size: Math.random() * 3 + 2,
            alpha: 1,
            color: Math.random() > 0.4 ? "rgba(34, 211, 238, 0.8)" : "rgba(56, 189, 248, 0.8)", // cyan / sky blue
          });
        }
      }

      lastScrollY.current = scrollTop;
      lastScrollTime.current = now;

      // Inactivity timeout to reset tilt and scrolling state
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
        setTilt(0);
        scrollVelocity.current = 0;
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isMounted, isMobile]);

  // Main particle logic loop (always runs when mounted to animate rising bubbles)
  useEffect(() => {
    if (!isMounted) return;

    const runParticleLoop = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas) {
        animationFrameRef.current = requestAnimationFrame(runParticleLoop);
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        animationFrameRef.current = requestAnimationFrame(runParticleLoop);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCounter.current++;

      // Smoothly decay scroll velocity towards 0 for organic deceleration
      scrollVelocity.current *= 0.94;
      if (Math.abs(scrollVelocity.current) < 0.005) {
        scrollVelocity.current = 0;
      }

      // Calculate scroll offset speed factor for mobile diving effect
      const speedMultiplier = 16;
      let scrollOffset = scrollVelocity.current * speedMultiplier;
      // Cap the offset to prevent extreme jumps on high-velocity swipes
      scrollOffset = Math.min(Math.max(scrollOffset, -30), 30);

      if (isMobile) {
        // --- MOBILE MODE: Spawn bubbles at left & right edges ---
        // Spawn more frequently during active scrolling (diving effect)
        const isActiveScrolling = Math.abs(scrollVelocity.current) > 0.02;
        const spawnInterval = isActiveScrolling ? 4 : 16;

        if (frameCounter.current % spawnInterval === 0) {
          const size = Math.random() * 3.5 + 1.2;
          
          // If scrolling up (ascending), bubbles move down relative to the screen, so they enter from the top
          const isMovingDown = scrollOffset < -0.5;
          const spawnY = isMovingDown ? -15 : canvas.height + 15;

          // Left edge bubbles
          particlesRef.current.push({
            type: "bubble",
            baseX: Math.random() * 45, // far left margin
            x: 0,
            y: spawnY,
            baseVy: -(Math.random() * 1.0 + 0.6), // baseline upward buoyancy
            size: size,
            swaySpeed: Math.random() * 0.02 + 0.01,
            swayAmplitude: Math.random() * 2.5 + 0.8,
            swayOffset: Math.random() * Math.PI * 2,
            alpha: Math.random() * 0.35 + 0.45,
          });

          // Right edge bubbles
          particlesRef.current.push({
            type: "bubble",
            baseX: canvas.width - Math.random() * 45, // far right margin
            x: 0,
            y: spawnY,
            baseVy: -(Math.random() * 1.0 + 0.6), // baseline upward buoyancy
            size: size,
            swaySpeed: Math.random() * 0.02 + 0.01,
            swayAmplitude: Math.random() * 2.5 + 0.8,
            swayOffset: Math.random() * Math.PI * 2,
            alpha: Math.random() * 0.35 + 0.45,
          });
        }
      } else if (container) {
        // --- DESKTOP MODE: Spawn a bubble at the monkey's position ---
        const rect = container.getBoundingClientRect();
        const indicatorY = scrollProgress * (rect.height - 40);
        const indicatorX = trackWidth / 2 + Math.sin(scrollProgress * Math.PI * 6) * 6;

        if (frameCounter.current % 12 === 0) {
          particlesRef.current.push({
            type: "bubble",
            baseX: indicatorX + (Math.random() - 0.5) * 6,
            x: 0,
            y: indicatorY + 20,
            baseVy: -(Math.random() * 0.7 + 0.4),
            size: Math.random() * 2.5 + 1.2,
            swaySpeed: Math.random() * 0.03 + 0.015,
            swayAmplitude: Math.random() * 1.2 + 0.4,
            swayOffset: Math.random() * Math.PI * 2,
            alpha: Math.random() * 0.4 + 0.5,
          });
        }
      }

      // Update and draw all active particles (both mobile side-bubbles and desktop components)
      particlesRef.current = particlesRef.current.filter((p) => {
        if (p.type === "bubble") {
          // Update vertical position based on mode
          if (isMobile) {
            p.y += p.baseVy - scrollOffset;
          } else {
            p.y += p.baseVy;
          }
          
          // Organic sway animation
          p.x = p.baseX + Math.sin(Date.now() * p.swaySpeed + p.swayOffset) * p.swayAmplitude;

          // Remove bubble if it goes off screen (top or bottom)
          if (p.y <= -20 || p.y >= canvas.height + 20) return false;

          ctx.save();
          ctx.globalAlpha = p.alpha;
          
          // Outer bubble border
          ctx.strokeStyle = "rgba(6, 182, 212, 0.85)"; // cyan-500
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.stroke();

          // Highlight refraction spot
          ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
          ctx.beginPath();
          ctx.arc(p.x - p.size / 3, p.y - p.size / 3, p.size / 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
          return true;
        } else {
          // Desktop splash particles (decay/fade out in place)
          p.x += p.vx;
          p.y += p.vy;
          p.alpha -= 0.03;

          if (p.alpha <= 0) return false;

          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          return true;
        }
      });

      animationFrameRef.current = requestAnimationFrame(runParticleLoop);
    };

    animationFrameRef.current = requestAnimationFrame(runParticleLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMounted, scrollProgress, isMobile]);

  // Sync canvas size and regenerate SVG path strings
  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;

    const updateDimensions = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;

      if (canvas) {
        if (window.innerWidth < 768) {
          // Mobile: Take full screen
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        } else if (container) {
          // Desktop: Take container sizes
          const width = container.clientWidth;
          const height = container.clientHeight;
          canvas.width = width;
          canvas.height = height;

          // Generate matching path representation
          const newD = getPathD(height);
          setPathD(newD);

          // Measure path length
          setTimeout(() => {
            if (pathRef.current) {
              setPathLength(pathRef.current.getTotalLength());
            }
          }, 50);
        }
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [isMounted, isMobile]);

  if (!isMounted) return null;

  // Calculate coordinates (Desktop only)
  const indicatorSize = 40;
  const slalomOffset = Math.sin(scrollProgress * Math.PI * 6) * 6;
  const leftPosition = `calc(50% + ${slalomOffset}px)`;
  const topPosition = `calc(${scrollProgress * 100}% - ${scrollProgress * indicatorSize}px)`;

  const wrapperClass = isMobile
    ? "fixed inset-0 w-full h-full pointer-events-none z-40"
    : "fixed top-[15vh] right-4 w-6 h-[70vh] z-50 rounded-full border border-cyan-400/20 bg-[#E3F6F7]/25 backdrop-blur-xs shadow-md shadow-cyan-500/5 flex flex-col items-center overflow-hidden";

  return (
    <div ref={containerRef} className={wrapperClass}>
      {/* Desktop slide path components */}
      {!isMobile && (
        <svg className="absolute inset-0 w-full h-full fill-none z-0" xmlns="http://www.w3.org/2000/svg">
          {/* Unvisited path (Dashed Light Cyan) */}
          <path
            d={pathD}
            stroke="rgba(34, 211, 238, 0.2)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="4 4"
          />

          {/* Visited path (Solid Cyan Blue) */}
          {pathLength > 0 && (
            <path
              ref={pathRef}
              d={pathD}
              stroke="#08b6d4" // cyan-500
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength - pathLength * scrollProgress}
              className="transition-all duration-75 ease-out"
            />
          )}
        </svg>
      )}

      {/* Bubble / Splash Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      {/* Scroll Image Indicator (Desktop only) */}
      {!isMobile && (
        <motion.div
          className="absolute w-10 h-10 flex items-center justify-center select-none z-20 pointer-events-none rounded-full overflow-hidden border border-cyan-400/35 shadow-md bg-white/90"
          style={{
            left: leftPosition,
            top: topPosition,
            x: "-50%",
            rotate: tilt,
          }}
          animate={{
            scale: isScrolling ? 1.15 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          <img
            src="/assets/scrollImage.jpg"
            alt="Scroll Indicator"
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </div>
  );
}
