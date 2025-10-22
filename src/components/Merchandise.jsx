"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Band from "./Lanyard";
import { Physics } from "@react-three/rapier";

export default function Merchandise() {
  return (
    <section className="py-20 bg-[#FFF8E1] text-center">
      <h2 className="text-3xl font-bold text-[#2F2723] mb-6">Merchandise 3D</h2>
      <div className="border-4 border-[#F9C021] rounded-3xl shadow-2xl mx-auto w-full max-w-2xl aspect-[4/3] overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[5, 5, 5]} />

          {/* Bungkus Band dalam Physics */}
          <Physics>
            <Band />
          </Physics>
        </Canvas>
      </div>
    </section>
  );
}
