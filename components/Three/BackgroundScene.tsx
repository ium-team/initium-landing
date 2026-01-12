import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

// A single floating geometric shape that reacts to mouse
const ReactiveShape = ({ 
  position, 
  geometryType, 
  color, 
  scaleBase,
  rotationSpeed = { x: 0.002, y: 0.003 }
}: { 
  position: [number, number, number], 
  geometryType: 'box' | 'octahedron' | 'torus' | 'sphere' | 'icosahedron',
  color: string,
  scaleBase: number,
  rotationSpeed?: { x: number, y: number }
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  // Store original position to return to it
  const originalPos = useMemo(() => new THREE.Vector3(...position), [position]);
  const vec = new THREE.Vector3();

  useFrame((state) => {
    if (!meshRef.current) return;

    // 1. Mouse Interaction Logic
    const mouseX = state.mouse.x * state.viewport.width / 2;
    const mouseY = state.mouse.y * state.viewport.height / 2;
    
    const mousePos = new THREE.Vector3(mouseX, mouseY, 0);
    const meshPos = meshRef.current.position;
    
    const distance = mousePos.distanceTo(meshPos);
    
    // Repulsion force
    const repulsionRadius = 6;
    const repulsionStrength = 4;

    if (distance < repulsionRadius) {
      const direction = new THREE.Vector3().subVectors(meshPos, mousePos).normalize();
      const force = (repulsionRadius - distance) / repulsionRadius;
      meshRef.current.position.add(direction.multiplyScalar(force * 0.1 * repulsionStrength));
    }

    // Restorative force
    meshRef.current.position.lerp(originalPos, 0.03);

    // 2. Rotation Animation
    meshRef.current.rotation.x += rotationSpeed.x;
    meshRef.current.rotation.y += rotationSpeed.y;

    // 3. Hover scale effect
    const targetScale = hovered ? scaleBase * 1.3 : scaleBase;
    meshRef.current.scale.lerp(vec.set(targetScale, targetScale, targetScale), 0.1);
  });

  // Sophisticated Material - Glass/Candy look
  const materialProps = {
    color: color,
    metalness: 0.3,
    roughness: 0.1,
    transmission: 0.4,
    thickness: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    emissive: color,
    emissiveIntensity: 0.5,
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh 
        ref={meshRef} 
        position={position}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        {geometryType === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {geometryType === 'octahedron' && <octahedronGeometry args={[0.8, 0]} />}
        {geometryType === 'torus' && <torusGeometry args={[0.6, 0.25, 16, 32]} />}
        {geometryType === 'sphere' && <sphereGeometry args={[0.6, 32, 32]} />}
        {geometryType === 'icosahedron' && <icosahedronGeometry args={[0.7, 0]} />}
        
        <meshPhysicalMaterial {...materialProps} />
      </mesh>
    </Float>
  );
};

export const BackgroundScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
      <Canvas 
        camera={{ position: [0, 0, 18], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['transparent']} />
        
        {/* Dynamic Lighting - Replaced Green/Teal with Blue/Indigo/Pink */}
        <ambientLight intensity={1.0} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#a855f7" /> {/* Purple */}
        <pointLight position={[-10, -10, 10]} intensity={2} color="#3b82f6" /> {/* Blue */}
        <pointLight position={[0, 5, 5]} intensity={1.5} color="#ec4899" /> {/* Pink */}
        
        <Environment preset="city" />

        {/* Hero Section Visible Objects */}
        <group>
            {/* Left Cluster - Blue/Purple */}
            <ReactiveShape position={[-6, 2, 4]} geometryType="icosahedron" color="#6366f1" scaleBase={2.0} />
            <ReactiveShape position={[-9, -4, 2]} geometryType="torus" color="#8b5cf6" scaleBase={1.8} />
            
            {/* Right Cluster - Pink/Blue */}
            <ReactiveShape position={[6, 3, 3]} geometryType="torus" color="#d946ef" scaleBase={1.8} />
            <ReactiveShape position={[8, -2, 4]} geometryType="sphere" color="#3b82f6" scaleBase={1.5} />

            {/* Subtle Floating Background Elements */}
            <ReactiveShape position={[0, 5, -5]} geometryType="octahedron" color="#fcd34d" scaleBase={1.0} /> {/* Gold accent */}
            <ReactiveShape position={[-4, -6, 0]} geometryType="box" color="#a855f7" scaleBase={0.8} />
            <ReactiveShape position={[4, -6, -2]} geometryType="icosahedron" color="#06b6d4" scaleBase={1.2} /> {/* Cyan accent */}
        </group>

        {/* Deep background filler */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={0.5} />
        
        {/* Subtle Fog to blend edges */}
        <fog attach="fog" args={['#ffffff', 15, 40]} />
      </Canvas>
    </div>
  );
};