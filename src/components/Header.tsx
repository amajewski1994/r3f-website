const Header = () => {
    return (
        <header className="fixed w-full top-0 z-50 border-b border-border bg-overlay/90 backdrop-blur-md">
            <div className="mx-auto flex h-[var(--nav-height)] w-full max-w-7xl items-center justify-between px-6 md:px-12">
                <a
                    href="#hero"
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-text transition-colors duration-200 hover:text-primary"
                >
                    R3F Website
                </a>

                <nav className="hidden items-center gap-8 md:flex">
                    <a
                        href="#hero"
                        className="text-sm text-text-soft transition-colors duration-200 hover:text-text"
                    >
                        Overview
                    </a>
                    <a
                        href="#cards"
                        className="text-sm text-text-soft transition-colors duration-200 hover:text-text"
                    >
                        Cards
                    </a>
                    <a
                        href="#motion"
                        className="text-sm text-text-soft transition-colors duration-200 hover:text-text"
                    >
                        Motion
                    </a>
                    <a
                        href="#showcase"
                        className="text-sm text-text-soft transition-colors duration-200 hover:text-text"
                    >
                        Showcase
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header