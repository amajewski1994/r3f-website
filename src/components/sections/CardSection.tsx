import TiltCard from "./TiltCard"

const cards = [
    {
        label: "Motion",
        title: "Responsive interaction",
        description:
            "Subtle movement and layered transitions create an interface that feels tactile, fluid and alive.",
    },
    {
        label: "Depth",
        title: "Spatial composition",
        description:
            "A clean visual structure enhanced by dimension, rhythm and carefully balanced contrast.",
    },
    {
        label: "Flow",
        title: "Designed for scroll",
        description:
            "Each section unfolds with intention, guiding attention through motion, pacing and layout.",
    },
]

const CardsSection = () => {
    return (
        <section id="cards" className="relative bg-background py-24 md:py-32">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
                <div className="max-w-2xl">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">
                        Interactive cards
                    </p>

                    <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                        A layered interface with subtle three-dimensional feedback
                    </h2>

                    <p className="mt-6 text-base leading-8 text-text-soft md:text-lg">
                        Hover introduces perspective, depth and motion while keeping the
                        layout calm, readable and visually balanced.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {cards.map((card) => (
                        <TiltCard
                            key={card.title}
                            label={card.label}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CardsSection