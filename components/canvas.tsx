'use client'

import { useRef } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader, type MeshProps } from '@react-three/fiber'
import {
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { motion } from 'framer-motion-3d'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function CanvasComponent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const rotation = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2])
  const smoothProgress = useSpring(rotation, { damping: 40 })
  return (
    <div
      ref={containerRef}
      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
    >
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[2, 1, 1]} />
        <Cube progress={smoothProgress} />
      </Canvas>
    </div>
  )
}

function Cube({ progress }: { progress: MotionValue<number> }) {
  const mesh = useRef<MeshProps>(null)

  const textureOne = useLoader(TextureLoader, '/me.png')
  const textureTwo = useLoader(TextureLoader, '/assets/cube1.jpg')
  const textureThree = useLoader(TextureLoader, '/assets/cube2.jpg')
  const textureFour = useLoader(TextureLoader, '/assets/cube3.jpg')
  const textureFive = useLoader(TextureLoader, '/assets/cube4.jpg')
  const textureSix = useLoader(TextureLoader, '/assets/color.png')

  return (
    <motion.mesh ref={mesh} rotation-x={progress} rotation-y={progress}>
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
