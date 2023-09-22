'use client'

import { useEffect, useRef } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader, type MeshProps } from '@react-three/fiber'
import { useMotionValue, useSpring } from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function CanvasComponent() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 1, 1]} />
      <Cube />
    </Canvas>
  )
}

function Cube() {
  const mesh = useRef<MeshProps>(null)
  const options = {
    damping: 20,
  }
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }

  function manageMouseMove(event: MouseEvent) {
    const { innerWidth, innerHeight } = window
    const { clientX, clientY } = event
    const x = -0.5 + clientX / innerWidth
    const y = -0.5 + clientY / innerHeight
    mouse.x.set(x)
    mouse.y.set(y)
  }
  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove)
    return () => window.removeEventListener('mousemove', manageMouseMove)
  })

  const textureOne = useLoader(TextureLoader, '/me.png')
  const textureTwo = useLoader(TextureLoader, '/assets/cube1.jpg')
  const textureThree = useLoader(TextureLoader, '/assets/cube2.jpg')
  const textureFour = useLoader(TextureLoader, '/assets/cube3.jpg')
  const textureFive = useLoader(TextureLoader, '/assets/cube4.jpg')
  const textureSix = useLoader(TextureLoader, '/assets/color.png')

  return (
    <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={textureOne} attach="material-0" />
      <meshStandardMaterial map={textureTwo} attach="material-1" />
      <meshStandardMaterial map={textureThree} attach="material-2" />
      <meshStandardMaterial map={textureFour} attach="material-3" />
      <meshStandardMaterial map={textureFive} attach="material-4" />
      <meshStandardMaterial map={textureSix} attach="material-5" />
    </motion.mesh>
  )
}
