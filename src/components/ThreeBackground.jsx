import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ==================== TEMA CODING ====================

// Particelle verdi tranquille - meno caotiche
function MatrixRain() {
  const ref = useRef();
  const particlesCount = 800;

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    const velocities = new Float32Array(particlesCount);
    
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = Math.random() * 20 - 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      velocities[i] = Math.random() * 0.02 + 0.015;
    }
    return { positions, velocities };
  }, []);

  useFrame(() => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array;
      
      for (let i = 0; i < particlesCount; i++) {
        positions[i * 3 + 1] -= velocities[i];
        
        if (positions[i * 3 + 1] < -10) {
          positions[i * 3 + 1] = 10;
        }
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff88"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Griglia semplice e statica
function CodeGrid() {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={gridRef} position={[0, -3, -3]}>
      <gridHelper args={[20, 40, '#00ff88', '#003322']} />
    </group>
  );
}

// ==================== TEMA VIDEOGAME ====================

// Cubi pixelati stile retro gaming
function PixelCubes() {
  const cubes = useRef([]);
  const count = 40;

  const cubeData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
      ],
      speed: Math.random() * 0.5 + 0.3,
      scale: Math.random() * 0.4 + 0.2,
      color: ['#ff3366', '#ffcc00', '#00ffff', '#ff00ff'][Math.floor(Math.random() * 4)],
    }));
  }, []);

  useFrame((state) => {
    cubes.current.forEach((cube, i) => {
      if (cube) {
        cube.rotation.x = state.clock.elapsedTime * cubeData[i].speed;
        cube.rotation.y = state.clock.elapsedTime * cubeData[i].speed * 0.7;
        cube.rotation.z = state.clock.elapsedTime * cubeData[i].speed * 0.5;
        
        // Movimento oscillatorio
        cube.position.y += Math.sin(state.clock.elapsedTime + i) * 0.001;
      }
    });
  });

  return (
    <>
      {cubeData.map((data, i) => (
        <mesh
          key={i}
          ref={(el) => (cubes.current[i] = el)}
          position={data.position}
          scale={data.scale}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={data.color}
            wireframe={i % 4 === 0}
            emissive={data.color}
            emissiveIntensity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </>
  );
}

// Anelli rotanti stile power-ups
function PowerUpRings() {
  const rings = useRef([]);
  const count = 8;

  useFrame((state) => {
    rings.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z = state.clock.elapsedTime * (0.5 + i * 0.1);
        ring.rotation.y = state.clock.elapsedTime * 0.3;
        ring.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1);
      }
    });
  });

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (rings.current[i] = el)}
          position={[
            Math.sin(i * Math.PI / 4) * 5,
            Math.cos(i * Math.PI / 4) * 5,
            -5
          ]}
        >
          <torusGeometry args={[1, 0.1, 16, 32]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#ff3366' : '#ffcc00'}
            emissive={i % 2 === 0 ? '#ff3366' : '#ffcc00'}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </>
  );
}

// Particelle esplosive gaming
function GamingParticles() {
  const ref = useRef();
  const particlesCount = 1000;

  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const radius = Math.random() * 8 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff00ff"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// ==================== TEMA PALLAVOLO ====================

// Sfere rimbalzanti come palloni
function VolleyballSpheres() {
  const spheres = useRef([]);
  const count = 25;

  const sphereData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ],
      velocity: [
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03,
        (Math.random() - 0.5) * 0.03,
      ],
      scale: Math.random() * 0.4 + 0.25,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
    }));
  }, []);

  useFrame(() => {
    spheres.current.forEach((sphere, i) => {
      if (sphere) {
        const data = sphereData[i];
        
        sphere.position.x += data.velocity[0];
        sphere.position.y += data.velocity[1];
        sphere.position.z += data.velocity[2];

        // Rimbalzo con gravità
        if (Math.abs(sphere.position.x) > 6) {
          data.velocity[0] *= -0.95;
          sphere.position.x = Math.sign(sphere.position.x) * 6;
        }
        if (Math.abs(sphere.position.y) > 6) {
          data.velocity[1] *= -0.95;
          sphere.position.y = Math.sign(sphere.position.y) * 6;
        }
        if (Math.abs(sphere.position.z) > 6) {
          data.velocity[2] *= -0.95;
          sphere.position.z = Math.sign(sphere.position.z) * 6;
        }

        // Rotazione realistica
        sphere.rotation.x += data.rotationSpeed;
        sphere.rotation.y += data.rotationSpeed * 0.7;
      }
    });
  });

  return (
    <>
      {sphereData.map((data, i) => (
        <mesh
          key={i}
          ref={(el) => (spheres.current[i] = el)}
          position={data.position}
          scale={data.scale}
          castShadow
        >
          <sphereGeometry args={[1, 20, 20]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#ff6b35' : i % 3 === 1 ? '#f7931e' : '#ffd700'}
            emissive={i % 3 === 0 ? '#ff6b35' : i % 3 === 1 ? '#f7931e' : '#ffd700'}
            emissiveIntensity={0.3}
            metalness={0.3}
            roughness={0.7}
          />
        </mesh>
      ))}
    </>
  );
}

// ==================== COMPONENTE PRINCIPALE ====================

const ThreeBackground = ({ theme }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      opacity: 1,
      pointerEvents: 'none',
    }}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: theme === 'coding' ? '#0a0e27' : theme === 'videogame' ? '#1a0033' : '#0f1419' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4444ff" />
        <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.3} penumbra={1} />

        {theme === 'coding' && (
          <>
            <MatrixRain />
            <CodeGrid />
            <fog attach="fog" args={['#0a0e27', 10, 25]} />
          </>
        )}

        {theme === 'videogame' && (
          <>
            <PixelCubes />
            <PowerUpRings />
            <GamingParticles />
            <fog attach="fog" args={['#1a0033', 8, 20]} />
          </>
        )}

        {theme === 'pallavolo' && (
          <>
            <VolleyballSpheres />
            <fog attach="fog" args={['#0f1419', 10, 25]} />
          </>
        )}
      </Canvas>
    </div>
  );
};

export default ThreeBackground;