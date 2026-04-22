import { CanvasSection } from "../../shared/canvasSection"
import { Object } from "../../shared/objectLoader"

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden bg-background"
        >
            <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-12">
                {/* Tekst jako warstwa nad canvasem */}
                <div className="pointer-events-none absolute inset-0 z-20 flex items-center">
                    <div className="max-w-xl">
                        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">
                            Interactive concept
                        </p>

                        <h1 className="max-w-[10ch] text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                            A modern web experience shaped by motion
                        </h1>

                        <p className="mt-6 max-w-md text-base leading-8 text-text-soft md:text-lg">
                            Built around depth, movement and visual clarity. A concept page
                            designed to feel immersive, responsive and carefully composed.
                        </p>

                        <div className="pointer-events-auto mt-10 flex flex-wrap gap-4">
                            <a
                                href="#cards"
                                className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-transform duration-200 ease-out hover:scale-[1.02] hover:bg-primary-hover"
                            >
                                Explore
                            </a>

                            <a
                                href="#motion"
                                className="rounded-xl border border-border bg-surface px-6 py-3 text-sm font-medium text-text transition-colors duration-200 ease-out hover:border-border-strong hover:bg-surface-alt"
                            >
                                View motion
                            </a>
                        </div>
                    </div>
                </div>

                {/* Canvas jako tło/obiekt po prawej */}
                <div className="absolute inset-0 z-10">
                    <CanvasSection>
                        <Object
                            rotationMultiplierX={0.12}
                            rotationMultiplierY={0.18}
                            interactive={true}
                        />
                    </CanvasSection>
                </div>
            </div>
        </section>
    )
}

export default Hero