import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import type { Mesh } from 'three'

export const DummyGeometry = ({
    rotationMultiplierX,
    rotationMultiplierY,
    color
}: {
    rotationMultiplierX: number;
    rotationMultiplierY: number;
    color: string
}) => {

    const meshRef = useRef<Mesh>(null!)

    useFrame((_, delta) => {
        meshRef.current.rotation.x += delta * rotationMultiplierX
        meshRef.current.rotation.y += delta * rotationMultiplierY
    })

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}