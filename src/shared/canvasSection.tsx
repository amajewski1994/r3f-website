import { Canvas } from "@react-three/fiber"
import type { ReactNode } from "react"

type CanvasSectionProps = {
    children: ReactNode
}

export const CanvasSection = ({ children }: CanvasSectionProps) => {
    return (
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 3, 4]} intensity={7.5} />
            {children}
        </Canvas>
    )
}