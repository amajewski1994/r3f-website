import RevealBlock from "./RevealBlock"

const items = [
    {
        eyebrow: "Transition",
        title: "Motion that feels deliberate",
        description:
            "Each section enters with controlled pacing, giving the page a rhythm that feels calm, modern and easy to follow.",
        align: "left" as const,
    },
    {
        eyebrow: "Composition",
        title: "Layout built around flow",
        description:
            "Content is revealed in sequence, using spacing, contrast and movement to guide attention without overwhelming the interface.",
        align: "right" as const,
    },
    {
        eyebrow: "Presence",
        title: "A scroll experience with depth",
        description:
            "Subtle transitions and layered structure make the page feel more immersive, while still staying clean, readable and refined.",
        align: "left" as const,
    },
]

const ScrollSection = () => {
    return (
        <section
            id="motion"
            className="relative bg-background-soft py-24 md:py-32"
        >
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                <div className="max-w-2xl">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">
                        Scroll experience
                    </p>

                    <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                        Designed to unfold with clarity and rhythm
                    </h2>

                    <p className="mt-6 text-base leading-8 text-text-soft md:text-lg">
                        This section uses reveal-based transitions to create a smoother,
                        more intentional scrolling experience across the page.
                    </p>
                </div>

                <div className="mt-16 space-y-10 md:mt-20 md:space-y-14">
                    {items.map((item) => (
                        <RevealBlock
                            key={item.title}
                            eyebrow={item.eyebrow}
                            title={item.title}
                            description={item.description}
                            align={item.align}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ScrollSection