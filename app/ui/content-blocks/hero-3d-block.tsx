'use client';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { CameraControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';
import { Suspense, useEffect, useRef } from 'react';
import Image from 'next/image';

////////
////////

export function Hero3dBlock() {

  return (
    <div className="center-child-content mt-5 lg:mt-12">
      <div className="common-content-w common-content-p h-96 lg:h-[41rem]">
        
        <div className="h-full w-full bg-[url('/scenes/island/placeholder.jpg')] bg-cover bg-center">
          <Suspense fallback={<></>}>
            <InteractiveScene/>
          </Suspense>
        </div>

        {/* <InteractiveScenePlaceholder/> */}

      </div>
    </div>
  )
}

function InteractiveScene() {
  const { scene } = useLoader(GLTFLoader, '/scenes/island/scene.gltf');

  scene.castShadow = true;
  scene.receiveShadow = true;

  scene.traverse((object) => {
    if(object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;

      // REVIEW: Assigning new materials to objects as their defaults have an issue with draw order
      if(object.name.indexOf('Fortress') >= 0) {
        var standardMaterial = new THREE.MeshStandardMaterial({map: object.material.map});
        object.material = standardMaterial;
      }
    }
  });

  // NOTE: Increasing the render depth could introduce artifacts. Consider if model should be scaled down instead.
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 5000);

  return <Canvas camera={camera} shadows>
    <CameraSetup />

    <ambientLight intensity={1} />
    <hemisphereLight intensity={2} color="white" position={[0, 5, 0]} />
    <directionalLight intensity={2} color="white" position={[0, 5, -2]} castShadow />
    <mesh castShadow receiveShadow>
      <primitive object={scene} castShadow receiveShadow />
    </mesh>
  </Canvas>;
}

function InteractiveScenePlaceholder() {
  return (
    <div className="h-full flex justify-center content-center overflow-hidden">
      <Image
        src = "/scenes/island/placeholder.png"
        alt = "A beautiful island"
        width = {1160}
        height = {656}
        className = "h-full w-auto max-w-none"
        style = {{
          aspectRatio: 1160/656,
        }}
      />
    </div>
  )
}

function CameraSetup() {
  const cameraRef = useRef<CameraControls>(null);
  // const {camera} = useThree();

  useEffect( () => {
    const cameraPos = {x: 673, y: 130, z: -524}
    const orbitCenter = { x: 0, y: 130, z: 0 }
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

      // onChange = {() => {
      //   console.log(camera.position);
      // }}
    />
  </>);
}





