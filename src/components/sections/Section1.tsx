import { CanvasSection } from "../../shared/canvasSection"
import { DummyGeometry } from "../../shared/dummyGeometry"

const Section1 = () => {
    return (
        <section id="section1" className="h-screen flex items-center bg-surface">
            <div className="w-1/2 h-full">
                <CanvasSection>
                    <DummyGeometry rotationMultiplierX={0.5} rotationMultiplierY={0.3} color="#ff6b6b" />
                </CanvasSection>
            </div>
            <div className="w-1/2 px-20 flex flex-col justify-center">
                <h2 className="text-5xl font-bold mb-6">Section One</h2>
                <p className="text-lg mb-4 text-text-soft">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </section>
    )
}

export default Section1