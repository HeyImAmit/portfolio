import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles({ count = 450 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const color1 = new THREE.Color('#2563eb'); // Deep Blue
    const color2 = new THREE.Color('#06b6d4'); // Cyan
    const color3 = new THREE.Color('#38bdf8'); // Ice Blue

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 12;
      pos[i3 + 1] = (Math.random() - 0.5) * 12;
      pos[i3 + 2] = (Math.random() - 0.5) * 12;

      const mixRatio = Math.random();
      const mixedColor = mixRatio < 0.5 ? color1.clone().lerp(color2, mixRatio * 2) : color2.clone().lerp(color3, (mixRatio - 0.5) * 2);

      col[i3] = mixedColor.r;
      col[i3 + 1] = mixedColor.g;
      col[i3 + 2] = mixedColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state: { pointer: { x: number; y: number } }, delta: number) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.03;
      pointsRef.current.rotation.y += delta * 0.04;

      const mouseX = state.pointer.x * 0.3;
      const mouseY = state.pointer.y * 0.3;
      pointsRef.current.rotation.x += (mouseY - pointsRef.current.rotation.x) * 0.02;
      pointsRef.current.rotation.y += (mouseX - pointsRef.current.rotation.y) * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={true}>
        <PointMaterial
          transparent
          vertexColors
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.65}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const mesh1 = useRef<THREE.Mesh>(null!);
  const mesh2 = useRef<THREE.Mesh>(null!);

  useFrame((_: unknown, delta: number) => {
    if (mesh1.current) {
      mesh1.current.rotation.x += delta * 0.15;
      mesh1.current.rotation.y += delta * 0.2;
    }
    if (mesh2.current) {
      mesh2.current.rotation.y += delta * 0.18;
      mesh2.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <>
      <mesh ref={mesh1} position={[-3, 1.2, -2]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshBasicMaterial
          color="#2563eb"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      <mesh ref={mesh2} position={[3.2, -1.5, -3]}>
        <octahedronGeometry args={[1.1, 0]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-70">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <FloatingParticles count={450} />
        <FloatingGeometry />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
    </div>
  );
}
