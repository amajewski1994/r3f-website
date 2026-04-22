const Header = () => {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-overlay backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-12">
                <h1 className="text-4xl font-bold">R3F Website</h1>

                <nav className="flex gap-8">
                    <a href="#section1" className="text-text transition hover:text-primary">Section 1</a>
                    <a href="#section2" className="text-text transition hover:text-primary">Section 2</a>
                    <a href="#section3" className="text-text transition hover:text-primary">Section 3</a>
                </nav>
            </div>
        </header>
    )
}

export default Header