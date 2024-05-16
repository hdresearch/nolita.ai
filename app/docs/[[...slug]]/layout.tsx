import DocsNavigation from "../navigation";
import path from 'path';
import { buildPageTree } from "@/lib/fetch";

export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const docsDirectory = path.join(process.cwd(), 'content/docs');
    const files = buildPageTree(docsDirectory);
return (
    <section className="min-h-screen relative py-24 px-2 lg:px-8 flex flex-col lg:flex-row gap-8 xl:justify-center">
        <DocsNavigation files={files}/>
    <article className="markdown">
        {children}
    </article>
    </section>
)
}