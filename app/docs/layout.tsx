export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
return (
    <article className="min-h-screen py-24 px-8">
        {children}
    </article>
)
}