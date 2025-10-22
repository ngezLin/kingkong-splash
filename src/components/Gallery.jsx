"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Gallery() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

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

  // Jalan otomatis saat muncul di layar
  useEffect(() => {
    if (inView) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        },
        opacity: 1,
        transitionEnd: { opacity: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-16 bg-[#F9C021]/10 overflow-hidden"
    >
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2F2723]">
          Galeri King Kong Splash
        </h2>
        <p className="text-[#2F2723]/70 mt-2">
          Keseruan dan keceriaan di wahana air kami!
        </p>
      </div>

      {/* Gallery Animation */}
      <div
        className="relative overflow-hidden cursor-pointer"
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            },
          })
        }
      >
        <motion.div
          animate={controls}
          initial={{ opacity: 0 }}
          className="flex gap-6"
          style={{ width: "200%" }}
        >
          {[...images, ...images].map((src, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] h-[200px] md:min-w-[400px] md:h-[250px] relative rounded-2xl overflow-hidden shadow-lg"
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
    </section>
  );
}
