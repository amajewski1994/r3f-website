import { CanvasSection } from "../../shared/canvasSection"
import { DummyGeometry } from "../../shared/dummyGeometry"

const Section2 = () => {
    return (
        <section id="section2" className="h-screen flex flex-row-reverse items-center bg-surface-alt">
            <div className="w-1/2 h-full">
                <CanvasSection>
                    <DummyGeometry rotationMultiplierX={0.3} rotationMultiplierY={0.5} color="#4ecdc4" />
                </CanvasSection>
            </div>
            <div className="w-1/2 px-20 flex flex-col justify-center">
                <h2 className="text-5xl font-bold mb-6">Section Two</h2>
                <p className="text-lg mb-4 text-text-soft">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <p className="text-text-muted">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>
    )
}

export default Section2