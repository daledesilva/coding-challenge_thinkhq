'use client';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";

////////
////////

export function Hero3d() {
  return (
    <div id="canvas-container">
      <Canvas>
      <OrbitControls
        // enableZoom={true}
        // enablePan={true}
        enableRotate={true}
        // maxPolarAngle={Math.PI / 2}
        // minDistance={10}
        // maxDistance={100}
      />

        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}