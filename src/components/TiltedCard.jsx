"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const springValues = { damping: 30, stiffness: 100, mass: 2 };

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  priceText = "",
  rotateAmplitude = 14,
  scaleOnHover = 1.08,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });
  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    rotateX.set(rotationX);
    rotateY.set(rotationY);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  return (
    <figure
      ref={ref}
      className="relative w-[220px] sm:w-[240px] h-[300px] [perspective:800px] flex flex-col items-center justify-center"
      onMouseMove={handleMouse}
      onMouseEnter={() => {
        scale.set(scaleOnHover);
        opacity.set(1);
      }}
      onMouseLeave={() => {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
      }}
    >
      <motion.div
        className="relative [transform-style:preserve-3d] bg-[#E3F6F7] border border-[#9CDEEE] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
        style={{ rotateX, rotateY, scale, width: "100%", height: "100%" }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 w-full h-full object-contain p-6"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-[#63B5D6]/10 py-3 text-center backdrop-blur-sm">
          <p className="text-[#323131] font-semibold text-sm">{captionText}</p>
          <p className="text-[#63B5D6] font-bold text-base">{priceText}</p>
        </div>
      </motion.div>
    </figure>
  );
}
