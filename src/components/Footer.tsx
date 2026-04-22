const Footer = () => {
    return (
        <footer className="border-t border-border bg-footer py-12">
            <div className="max-w-7xl mx-auto px-12">
                <div className="grid grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About</h3>
                        <p className="text-text-muted">Built with React Three Fiber for interactive 3D web experiences.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-text-muted hover:text-primary">Documentation</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary">GitHub</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Social</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-text-muted hover:text-primary">Twitter</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary">LinkedIn</a></li>
                            <li><a href="#" className="text-text-muted hover:text-primary">Discord</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border pt-8 text-center text-text-muted">
                    <p>&copy; 2026 R3F Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer