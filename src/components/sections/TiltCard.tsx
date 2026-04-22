import { useRef, useState } from "react"

type TiltCardProps = {
    title: string
    description: string
    label: string
}

const TiltCard = ({ title, description, label }: TiltCardProps) => {
    const cardRef = useRef<HTMLDivElement | null>(null)
    const [transform, setTransform] = useState(
        "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    )

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current
        if (!card) return

        const rect = card.getBoundingClientRect()
        const x = event.clientX - rect.left
        const y = event.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateY = ((x - centerX) / centerX) * 7
        const rotateX = -((y - centerY) / centerY) * 7

        setTransform(
            `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        )
    }

    const handleMouseLeave = () => {
        setTransform(
            "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
        )
    }

    return (
        <div
            className="group [perspective:1200px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={cardRef}
                style={{ transform }}
                className="relative min-h-[320px] rounded-[1.75rem] border border-border bg-surface p-8 shadow-md transition-[transform,border-color,background-color] duration-200 ease-out will-change-transform group-hover:border-border-strong group-hover:bg-surface-alt"
            >
                <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <p className="relative z-10 mb-6 text-xs uppercase tracking-[0.18em] text-primary">
                    {label}
                </p>

                <h3 className="relative z-10 text-2xl font-semibold text-text">
                    {title}
                </h3>

                <p className="relative z-10 mt-4 max-w-[34ch] text-sm leading-7 text-text-soft md:text-base">
                    {description}
                </p>

                <div className="relative z-10 mt-10 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    <span className="text-sm text-text-muted transition-colors duration-200 group-hover:text-text-soft">
                        Interactive layer
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TiltCard