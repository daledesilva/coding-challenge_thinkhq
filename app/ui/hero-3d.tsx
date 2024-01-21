'use client';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';
import { useEffect, useRef } from 'react';

////////
////////

export function Hero3d() {
  const { scene } = useLoader(GLTFLoader, '/scenes/island/scene.gltf');

  scene.castShadow = true;
  scene.receiveShadow = true;

  scene.traverse((object) => {
    if(object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;``

      // REVIEW: Assigning new materials to objects as they currently have issue with draw order by default
      if(object.name.indexOf('Fortress') >= 0) {
        var standardMaterial = new THREE.MeshStandardMaterial({map: object.material.map});
        object.material = standardMaterial;
      }
    }
  });

  // NOTE: Increasing the render depth could introduce artifacts. Consider if model should be scaled down instead.
  const camera = new THREE.PerspectiveCamera(30, window.innerWidth/window.innerHeight, 0.1, 5000);

  return (
    <div className='w-full h-96 mt-5 lg:h-[41rem] lg:mt-12'>
      {/* <Canvas> */}
      <Canvas camera={camera} shadows>
        <CameraSetup/>
        
        {/* <ambientLight intensity={1}/> */}
        <hemisphereLight intensity={1} color="white" position={[0, 5, 5]}/>
        <directionalLight intensity={2} color="white" position={[0, 5, -2]} castShadow/>
        <mesh castShadow receiveShadow>
          <primitive object={scene} castShadow receiveShadow/>
        </mesh>
      </Canvas>
    </div>
  )
}

function CameraSetup() {
  const cameraRef = useRef<CameraControls>(null);

  useEffect( () => {
    const cameraPos = { x: 498, y: 60, z: -334 }
    const orbitCenter = { x: 0, y: 80, z: 0 }
    const animate = false;
    cameraRef.current?.setLookAt(cameraPos.x, cameraPos.y, cameraPos.z, orbitCenter.x, orbitCenter.y, orbitCenter.z, animate);
  }, [])
  

  return ( <>
    <CameraControls
      ref = {cameraRef}
      // Prevent extreme angles
      minPolarAngle = {degToRad(25)}
      maxPolarAngle = {degToRad(90)}
      // Prevent extreme ddolly in/out
      minDistance={500}
      maxDistance={1000}
      // Prevent panning off center
      truckSpeed = {0}

      // For first person view
      // https://drei.pmnd.rs/?path=/story/controls-firstpersoncontrols--first-person-controls-story&args=lookSpeed:0.1

      // or:
      // azimuthRotateSpeed = {-0.3} // negative value to invert rotation direction
      // polarRotateSpeed = {- 0.3} // negative value to invert rotation direction
      // verticalDragToForward = {true}
      // colliderMeshes
    />
  </>);
}



