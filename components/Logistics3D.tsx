"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function generatePoints() {
  const p = new Float32Array(300 * 3);
  for (let i = 0; i < 300; i++) {
    p[i * 3] = (Math.random() - 0.5) * 10;
    p[i * 3 + 1] = (Math.random() - 0.5) * 10;
    p[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  return p;
}

function AnimatedNodes() {
  const points = useMemo(() => generatePoints(), []);
  const pointsRef = useRef<THREE.Points>(null);
  const timer = useMemo(() => new THREE.Timer(), []);

  useFrame((state) => {
    timer.update(state.clock.getElapsedTime());
    const elapsed = timer.getElapsed();

    if (pointsRef.current) {
      pointsRef.current.rotation.y = elapsed * 0.05;
      pointsRef.current.rotation.x = elapsed * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#2563eb"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function CentralCore() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#2563eb"
          speed={3}
          distort={0.4}
          radius={1}
          emissive="#1e40af"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
}

export default function Logistics3D() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedNodes />
        <CentralCore />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white" />
    </div>
  );
}
