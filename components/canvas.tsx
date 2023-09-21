'use client'

import { useRef } from 'react'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function CanvasComponent() {
  return (
    <Canvas>
      <ambientLight intensity={2} />
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

  const textureOne = useLoader(TextureLoader, '/assets/color.png')

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={textureOne} />
    </mesh>
  )
}
