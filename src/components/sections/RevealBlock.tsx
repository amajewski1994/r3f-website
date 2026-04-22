import { useEffect, useRef, useState } from "react"

type RevealBlockProps = {
    eyebrow: string
    title: string
    description: string
    align?: "left" | "right"
}

const RevealBlock = ({
    eyebrow,
    title,
    description,
    align = "left",
}: RevealBlockProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.2,
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    const alignClass =
        align === "right" ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"

    const initialTransform =
        align === "right" ? "translate-x-10 opacity-0" : "-translate-x-10 opacity-0"

    return (
        <div
            ref={ref}
            className={`max-w-2xl rounded-[1.75rem] border border-border bg-surface p-8 shadow-md transition-all duration-700 ease-out md:p-10 ${alignClass} ${visible ? "translate-x-0 opacity-100" : initialTransform
                }`}
        >
            <p className="text-xs uppercase tracking-[0.18em] text-primary">
                {eyebrow}
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                {title}
            </h3>

            <p className="mt-5 text-base leading-8 text-text-soft md:text-lg">
                {description}
            </p>
        </div>
    )
}

export default RevealBlock