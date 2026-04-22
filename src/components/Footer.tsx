const Footer = () => {
    return (
        <footer className="relative border-t border-border bg-footer">
            <div className="mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-24">
                <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">
                        Closing frame
                    </p>

                    <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                        A digital experience shaped through motion, structure and detail
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-text-soft md:text-lg">
                        Designed as a concept page that brings together interaction, depth
                        and visual clarity in a clean, modern layout.
                    </p>
                </div>

                <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 md:mt-20 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-medium text-text">R3F Website</p>
                        <p className="mt-2 text-sm text-text-muted">
                            Concept interface for immersive web presentation
                        </p>
                    </div>

                    <p className="text-sm text-text-muted">
                        2026 - Built as an interactive front-end concept
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer