import { useFrame, useLoader } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import { TextureLoader, Group } from "three"
import * as THREE from "three"
import { FBXLoader } from "three/addons/loaders/FBXLoader.js"

type ObjectProps = {
    rotationMultiplierX: number
    rotationMultiplierY: number
    interactive?: boolean
}

export const Object = ({
    rotationMultiplierX,
    rotationMultiplierY,
    interactive = false,
}: ObjectProps) => {
    const groupRef = useRef<Group>(null!)

    const fbx = useLoader(FBXLoader, "public/models/S_Thinkpad.fbx")
    const albedo = useLoader(TextureLoader, "public/textures/T_thinkpad_a.png")
    const normal = useLoader(TextureLoader, "public/textures/T_thinkpad_n.png")
    const roughness = useLoader(TextureLoader, "public/textures/T_thinkpad_r.png")
    const emissive = useLoader(TextureLoader, "public/textures/T_thinkpad_e.png")

    const model = useMemo(() => {
        const clonedModel = fbx.clone(true)

        const configuredAlbedoTexture = albedo.clone()
        configuredAlbedoTexture.flipY = true
        configuredAlbedoTexture.colorSpace = THREE.SRGBColorSpace
        configuredAlbedoTexture.needsUpdate = true

        const configuredNormalTexture = normal.clone()
        configuredNormalTexture.flipY = true
        configuredNormalTexture.colorSpace = THREE.SRGBColorSpace
        configuredNormalTexture.needsUpdate = true

        const configuredRoughnessTexture = roughness.clone()
        configuredRoughnessTexture.flipY = true
        configuredRoughnessTexture.colorSpace = THREE.SRGBColorSpace
        configuredRoughnessTexture.needsUpdate = true

        const configuredEmissiveTexture = emissive.clone()
        configuredEmissiveTexture.flipY = true
        configuredEmissiveTexture.colorSpace = THREE.SRGBColorSpace
        configuredEmissiveTexture.needsUpdate = true

        clonedModel.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true
                child.receiveShadow = true

                child.material = new THREE.MeshStandardMaterial({
                    map: configuredAlbedoTexture,
                    normalMap: configuredNormalTexture,
                    roughnessMap: configuredRoughnessTexture,
                    metalness: 0.25,
                    emissiveMap: configuredEmissiveTexture,
                    emissive: new THREE.Color("#ffffff"),
                    emissiveIntensity: 1,
                })
            }
        })

        return clonedModel
    }, [fbx, albedo, normal, roughness, emissive])

    useFrame((state, delta) => {
        const group = groupRef.current

        const baseX = group.rotation.x + delta * rotationMultiplierX
        const baseY = group.rotation.y + delta * rotationMultiplierY

        if (interactive) {
            const pointerX = state.pointer.x * 0.35
            const pointerY = state.pointer.y * 0.25

            group.rotation.x += (pointerY - group.rotation.x) * 0.06
            group.rotation.y += (pointerX - group.rotation.y) * 0.06

            group.position.x += (state.pointer.x * 0.25 - group.position.x) * 0.04
            group.position.y += (state.pointer.y * 0.15 - group.position.y) * 0.04
        } else {
            group.rotation.x = baseX
            group.rotation.y = baseY
        }

        group.rotation.x += delta * rotationMultiplierX * 0.35
        group.rotation.y += delta * rotationMultiplierY * 0.45
    })

    return (
        <group ref={groupRef}>
            <primitive
                object={model}
                scale={0.07}
                position={[0.5, -1, 0]}
                rotation={[0, -0.15, 0]}
            />
        </group>
    )
}