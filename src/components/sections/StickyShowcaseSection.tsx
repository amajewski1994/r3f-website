const showcaseItems = [
    {
        number: "01",
        title: "Motion with intention",
        description:
            "Interaction is used to guide focus, not distract from it. Every shift in layout and movement is designed to feel measured and precise.",
    },
    {
        number: "02",
        title: "Clarity through structure",
        description:
            "A strong visual hierarchy keeps the experience readable and calm, even as the page introduces depth and animated transitions.",
    },
    {
        number: "03",
        title: "Detail in every layer",
        description:
            "Spacing, contrast, rhythm and feedback are treated as part of the design language, creating a more polished and tactile interface.",
    },
]

const StickyShowcaseSection = () => {
    return (
        <section
            id="showcase"
            className="relative bg-background py-24 md:py-32"
        >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 md:px-12 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="lg:sticky lg:top-28 lg:self-start">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">
                        Showcase
                    </p>

                    <h2 className="mt-4 max-w-[12ch] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                        Built to feel refined at every step
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-8 text-text-soft md:text-lg">
                        This section uses a sticky layout to create a calmer, more editorial
                        flow. Content moves forward while the message stays grounded.
                    </p>
                </div>

                <div className="space-y-8 md:space-y-10">
                    {showcaseItems.map((item) => (
                        <article
                            key={item.number}
                            className="rounded-[1.75rem] border border-border bg-surface p-8 shadow-md transition-colors duration-200 hover:border-border-strong hover:bg-surface-alt md:p-10"
                        >
                            <p className="text-sm font-medium text-primary">{item.number}</p>

                            <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                                {item.title}
                            </h3>

                            <p className="mt-5 max-w-[44ch] text-base leading-8 text-text-soft">
                                {item.description}
                            </p>

                            <div className="mt-8 h-px w-full bg-border" />

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full border border-border px-4 py-2 text-sm text-text-soft">
                                    Responsive
                                </span>
                                <span className="rounded-full border border-border px-4 py-2 text-sm text-text-soft">
                                    Interactive
                                </span>
                                <span className="rounded-full border border-border px-4 py-2 text-sm text-text-soft">
                                    Minimal
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StickyShowcaseSection