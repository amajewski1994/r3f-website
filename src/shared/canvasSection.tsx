import { Canvas } from "@react-three/fiber"
import type { ReactNode } from "react"

type CanvasSectionProps = {
    children: ReactNode
}

export const CanvasSection = ({ children }: CanvasSectionProps) => {
    return (
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
            <ambientLight intensity={0.75} />
            <directionalLight position={[3, 3, 4]} intensity={1.4} />
            <directionalLight position={[-3, -2, 2]} intensity={0.5} />
            <pointLight position={[0, 0, 3]} intensity={0.4} />
            {children}
        </Canvas>
    )
}