"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Gallery() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  const positionRef = useRef(0);
  const requestRef = useRef(null);
  const startTimeRef = useRef(null);
  const isPausedRef = useRef(false);

  const images = [
    "/images/gal1.png",
    "/images/gal2.png",
    "/images/gal3.png",
    "/images/gal4.png",
    "/images/gal5.png",
    "/images/gal6.png",
    "/images/gal7.png",
    "/images/gal8.png",
    "/images/gal9.png",
    "/images/gal10.png",
  ];

  const animateLoop = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    if (!isPausedRef.current) {
      const speed = 0.05;
      positionRef.current = (positionRef.current - speed) % 50;
      controls.set({ x: `${positionRef.current}%` });
    }
    requestRef.current = requestAnimationFrame(animateLoop);
  };

  useEffect(() => {
    if (inView) requestRef.current = requestAnimationFrame(animateLoop);
    else cancelAnimationFrame(requestRef.current);
    return () => cancelAnimationFrame(requestRef.current);
  }, [inView]);

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-20 bg-gradient-to-b from-[#E3F6F7] to-[#9CDEEE] overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#323131]">
          Galeri King Kong Splash
        </h2>
        <p className="text-[#323131]/70 mt-3 text-lg">
          Keseruan dan keceriaan di wahana air kami!
        </p>
      </div>

      {/* Gallery Animation */}
      <div
        className="relative overflow-hidden cursor-pointer"
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
      >
        <motion.div
          animate={controls}
          initial={{ x: "0%", opacity: 1 }}
          className="flex gap-6"
          style={{ width: "200%" }}
        >
          {[...images, ...images].map((src, i) => (
            <motion.div
              key={i}
              className="min-w-[280px] h-[180px] sm:min-w-[360px] sm:h-[220px] md:min-w-[420px] md:h-[260px]
                         relative rounded-3xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.1)]
                         border border-[#6FCEDC]/40 bg-white/60 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative bottom blur */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#E3F6F7] to-transparent pointer-events-none" />
    </section>
  );
}
