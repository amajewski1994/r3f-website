import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

export function CanvasSection({ children }: { children: React.ReactNode }) {
    return (
        <Canvas camera={{ position: [0, 0, 5] }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            {children}
        </Canvas>
    )
}