import { CanvasSection } from "../../shared/canvasSection"
import { DummyGeometry } from "../../shared/dummyGeometry"

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden bg-background"
        >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-16 px-6 py-32 md:px-12 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">
                        Interactive concept
                    </p>

                    <h1 className="max-w-[11ch] text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                        A modern web experience shaped by motion
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-text-soft md:text-lg">
                        Built around depth, movement and visual clarity. A concept page
                        designed to feel immersive, responsive and carefully composed.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
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

                <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-lg md:h-[520px] lg:h-[640px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
                    <CanvasSection>
                        <DummyGeometry
                            rotationMultiplierX={0.12}
                            rotationMultiplierY={0.18}
                            color="#5b8cff"
                            interactive
                        />
                    </CanvasSection>
                </div>
            </div>
        </section>
    )
}

export default Hero