'use client';
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { CameraControls, Plane, useHelper, useProgress } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils.js';
import { Suspense, useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { flair } from '../fonts';
import { DirectionalLightHelper, DirectionalLight } from "three";

////////
////////

export function Hero3dBlock() {

  return (
    <div className="center-child-content mt-5 lg:mt-12">
      <div className="common-content-w common-content-p h-96 lg:h-[41rem]">
        
        <div className="h-full w-full bg-[url('/scenes/island/placeholder.jpg')] bg-cover bg-center">
          <Suspense fallback={<InteractiveSceneLoader/>}>
            <InteractiveScene/>
          </Suspense>
        </div>

      </div>
    </div>
  )
}

function InteractiveScene() {  
  // const { scene } = useLoader(GLTFLoader, '/scenes/island/scene.gltf');
  const { scene } = useGLTF('/scenes/island/scene.glb');

  // REVIEW: An attempt to get rid fo the "Failed to parse URL" error
  // const { scene } = useGLTF(process.env.NEXT_PUBLIC_URL + '/scenes/island/scene.glb');

  scene.traverse((object) => {
    if(object instanceof THREE.Mesh && object.isMesh) {
      const mesh = object as THREE.Mesh;
      const material = mesh.material as THREE.MeshStandardMaterial;
      
      if(mesh.name.indexOf('Sky') == -1) {
        // NOTE: Shadows aren't working anyway. It might be a scene size issue, but scaling it down didn't seem to fix
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }

      // Ensure all solid materials refresh their depth order before each render
      material.depthWrite = true;

      // Ensure transparent see is always rendered after everything (to prevent it becoming opaque on certain camera angles)
      if(mesh.name == 'Sea_Sea_0') {
        mesh.renderOrder = 1;
      }
      
    }
  });

  // NOTE: Increasing the render depth could introduce artifacts. Consider if model should be scaled down instead.
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 0.1, 5000);
  
  return (
    <Canvas
      camera = {camera}
      shadows = {{ type: THREE.VSMShadowMap }}
    >
      <CameraSetup />
      <Lights/>
      <mesh castShadow receiveShadow>
        <primitive object={scene} />
      </mesh>
    </Canvas>
  );
}

function Lights() {
  const dirLightRef = useRef<DirectionalLight>(null!);
  // useHelper(dirLightRef, DirectionalLightHelper, 50, 'black');

  useEffect( () => {
    const shadow = dirLightRef.current.shadow;
    const shadowCamera = shadow.camera;
    shadowCamera.left = -500;
    shadowCamera.right = 500;
    shadowCamera.top = 500;
    shadowCamera.bottom = -500;
    shadow.radius = 5;
    shadow.blurSamples = 25;
  },[])

  return (<>
    <hemisphereLight intensity={2} color="white" position={[0, 5, 0]} />
    <directionalLight
      ref = {dirLightRef}
      position={[300,400,200]}
      color="white"
      intensity={5}
      castShadow
      shadow-mapSize-height={2048}
      shadow-mapSize-width={2048}
      shadow-camera-near={0.5}
      shadow-camera-far={1000}
      visible
    />
  </>)
}

function InteractiveSceneLoader() {
  const {progress} = useProgress();
  return (
    <div className="h-full flex justify-center content-center flex-wrap">
      <div className="p-4 bg-[--bg-light] text-[--text-dark] w-fit h-fit">
        <p className={`${flair.className} italic text-2xl`}>
          Loading... {progress.toFixed(0)}
        </p>
      </div>
    </div>
  );
}

function CameraSetup() {
  const cameraRef = useRef<CameraControls>(null);

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
      maxPolarAngle = {degToRad(95)}
      // Prevent extreme ddolly in/out
      minDistance={200}
      maxDistance={1000}
      // Prevent panning off center
      truckSpeed = {0}


      // NOTE: For first person view (Incomplete)
      // azimuthRotateSpeed = {-0.3} // negative value to invert rotation direction
      // polarRotateSpeed = {- 0.3} // negative value to invert rotation direction
      // verticalDragToForward = {true}
      // colliderMeshes
    />
  </>);
}





