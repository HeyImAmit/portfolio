import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface NodeData {
  id: string;
  name: string;
  category: string;
  position: [number, number, number];
  color: string;
}

const nodes: NodeData[] = [
  { id: '1', name: 'RAG / LLMs', category: 'AI', position: [0, 1.8, 0], color: '#a855f7' },
  { id: '2', name: 'Spring Boot', category: 'Backend', position: [-2.2, 0.8, 0.5], color: '#3b82f6' },
  { id: '3', name: 'FastAPI', category: 'Backend', position: [2.2, 0.8, -0.5], color: '#06b6d4' },
  { id: '4', name: 'ChromaDB', category: 'AI', position: [1.2, 2.2, -1], color: '#ec4899' },
  { id: '5', name: 'PostgreSQL', category: 'DB', position: [-1.8, -1.2, 0.8], color: '#60a5fa' },
  { id: '6', name: 'React', category: 'Frontend', position: [2.0, -1.0, 0.6], color: '#38bdf8' },
  { id: '7', name: 'Docker', category: 'DevOps', position: [0, -2.0, -0.8], color: '#0284c7' },
  { id: '8', name: 'LangChain', category: 'AI', position: [-1.4, 2.0, -0.8], color: '#c084fc' },
  { id: '9', name: 'Java / DSA', category: 'Core', position: [0, 0, 1.2], color: '#f97316' },
  { id: '10', name: 'Redis', category: 'DB', position: [-2.5, -0.4, -1.2], color: '#ef4444' },
];

function NodeNetwork() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_: unknown, delta: number) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const lines = useMemo(() => {
    const lineGeometries: { start: [number, number, number]; end: [number, number, number]; color: string }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p1 = new THREE.Vector3(...nodes[i].position);
        const p2 = new THREE.Vector3(...nodes[j].position);
        const dist = p1.distanceTo(p2);
        if (dist < 3.2) {
          lineGeometries.push({
            start: nodes[i].position,
            end: nodes[j].position,
            color: nodes[i].color
          });
        }
      }
    }
    return lineGeometries;
  }, []);

  return (
    <group ref={groupRef}>
      {nodes.map((node) => (
        <group key={node.id} position={node.position}>
          <mesh>
            <sphereGeometry args={[0.22, 32, 32]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.6}
              roughness={0.2}
            />
          </mesh>
          <Text
            position={[0, 0.45, 0]}
            fontSize={0.28}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7B.woff"
          >
            {node.name}
          </Text>
        </group>
      ))}

      {lines.map((line, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(...line.start),
          new THREE.Vector3(...line.end)
        ]);
        return (
          <primitive key={index} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: line.color,
            transparent: true,
            opacity: 0.25
          }))} />
        );
      })}
    </group>
  );
}

export default function TechEcosystem() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden glass-panel border border-white/10 my-8">
      <div className="absolute top-4 left-6 z-10 pointer-events-none">
        <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold">Interactive 3D Ecosystem</span>
        <h4 className="text-lg font-bold text-white">Technology Constellation</h4>
        <p className="text-xs text-slate-400">Drag to rotate • Scroll to zoom</p>
      </div>

      <Canvas camera={{ position: [0, 0, 7.5], fov: 50 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
        <NodeNetwork />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
