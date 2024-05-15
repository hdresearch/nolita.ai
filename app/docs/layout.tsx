export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
return (
    <section className="min-h-screen relative py-24 px-8 flex gap-8 justify-center">
        <nav className="fixed top-24 left-8 min-h-screen">
            <ul className="text-3xl tracking-tight font-light">
                <li><a href="/docs">Get Started</a></li>
                <li><a href="/docs/faq">FAQ</a></li>
                <li><a href="/docs/api">API Reference</a></li>
            </ul>
        </nav>
    <article className="markdown">
        {children}
    </article>
    </section>
)
}