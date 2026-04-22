import { CanvasSection } from "../../shared/canvasSection"
import { DummyGeometry } from "../../shared/dummyGeometry"

const Section3 = () => {
    return (
        <section id="section3" className="h-screen flex items-center bg-surface">
            <div className="w-1/2 h-full">
                <CanvasSection>
                    <DummyGeometry rotationMultiplierX={0.4} rotationMultiplierY={0.2} color="#ffe66d" />
                </CanvasSection>
            </div>
            <div className="w-1/2 px-20 flex flex-col justify-center">
                <h2 className="text-5xl font-bold mb-6">Section Three</h2>
                <p className="text-lg mb-4 text-text-soft">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-text-muted">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </section>
    )
}

export default Section3