import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import type { Mesh } from "three"

type DummyGeometryProps = {
    rotationMultiplierX: number
    rotationMultiplierY: number
    color: string
    interactive?: boolean
}

export const DummyGeometry = ({
    rotationMultiplierX,
    rotationMultiplierY,
    color,
    interactive = false,
}: DummyGeometryProps) => {
    const meshRef = useRef<Mesh>(null!)

    useFrame((state, delta) => {
        const mesh = meshRef.current

        const baseX = mesh.rotation.x + delta * rotationMultiplierX
        const baseY = mesh.rotation.y + delta * rotationMultiplierY

        if (interactive) {
            const pointerX = state.pointer.x * 0.35
            const pointerY = state.pointer.y * 0.25

            mesh.rotation.x += (pointerY - mesh.rotation.x) * 0.06
            mesh.rotation.y += (pointerX - mesh.rotation.y) * 0.06

            mesh.position.x += (state.pointer.x * 0.25 - mesh.position.x) * 0.04
            mesh.position.y += (state.pointer.y * 0.15 - mesh.position.y) * 0.04
        } else {
            mesh.rotation.x = baseX
            mesh.rotation.y = baseY
        }

        mesh.rotation.x += delta * rotationMultiplierX * 0.35
        mesh.rotation.y += delta * rotationMultiplierY * 0.45
    })

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[1.55, 1]} />
            <meshStandardMaterial color={color} roughness={0.22} metalness={0.45} />
        </mesh>
    )
}