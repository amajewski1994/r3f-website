import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

function Box() {
  const meshRef = useRef<Mesh>(null!)

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta * 0.7
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

export default function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 3, 3]} />
        <Box />
      </Canvas>
    </div>
  )
}