'use client'

import { useRef } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function CanvasComponent() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 1, 1]} />
      <Cube />
    </Canvas>
  )
}

function Cube() {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.25
      mesh.current.rotation.y += delta * 0.25
      mesh.current.rotation.z += delta * 0.25
    }
  })

  const textureOne = useLoader(TextureLoader, '/me.png')
  const textureTwo = useLoader(TextureLoader, '/assets/cube1.jpg')
  const textureThree = useLoader(TextureLoader, '/assets/cube2.jpg')
  const textureFour = useLoader(TextureLoader, '/assets/cube3.jpg')
  const textureFive = useLoader(TextureLoader, '/assets/cube4.jpg')
  const textureSix = useLoader(TextureLoader, '/assets/color.png')

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={textureOne} attach="material-0" />
      <meshStandardMaterial map={textureTwo} attach="material-1" />
      <meshStandardMaterial map={textureThree} attach="material-2" />
      <meshStandardMaterial map={textureFour} attach="material-3" />
      <meshStandardMaterial map={textureFive} attach="material-4" />
      <meshStandardMaterial map={textureSix} attach="material-5" />
    </mesh>
  )
}
