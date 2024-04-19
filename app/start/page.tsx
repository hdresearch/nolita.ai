import Link from "next/link";

export default function Start() {
    return (
    <div className="min-h-screen bg-deep-slate pt-24 pb-8">
        <div className="border-t-0 lg:border-t border-gray-700 h-full w-full grid grid-cols-3">
            <div className="col-span-full lg:col-span-1 lg:col-start-2 px-8 lg:px-0 space-y-4 text-justify">
                <h2 className="font-mono text-gray-400 pt-4 text-4xl tracking-tight">{"//get started"}</h2>
                <p>If you just want to get started using Nolita, you can run it using <code>npx</code>:</p>
                <code className="block border-y border-gray-700 py-2 text-xs">npx nolita</code>
                <p>If you want to find out more about how it works, continue below.</p>
                <h3 className="font-mono text-xl text-gray-500 tracking-tight">To start building a project</h3>
                <p>If you want to use Nolita to quickly bootstrap a full-stack agentic application, you can run the <code>create</code> command:</p>
                <code className="block border-y border-gray-700 py-2 text-xs">npx nolita create</code>
                <p>After taking a name in, Nolita will create a sample project complete with information on tweaking each aspect of an agentic project.</p>
                <h3 className="font-mono text-xl text-gray-500 tracking-tight">For quick tasks</h3>
                <p>You can run Nolita straight from the terminal to quickly accomplish an objective using a local sandboxed Chrome instance:</p>
                <code className="block border-y border-gray-700 py-2 text-xs">npx nolita [flags | config]</code>
                <p>For the full configuration, see <Link className="border-b hover:text-terminal-magenta" href="https://github.com/hdresearch/nolita?tab=readme-ov-file#running-quick-tasks">our README</Link>.</p>
                <h3 className="font-mono text-xl text-gray-500 tracking-tight">As a server for other projects</h3>
                <p>If you want to run Nolita as an objective-oriented browser automation engine -- that is, taking in a model, constructing an agent for you, and accomplishing a task on the internet -- you can do so by running Nolita as a server.</p>
                <code className="block border-y border-gray-700 py-2 text-xs">npx nolita serve [--port]</code>
                <p>Basic documentation for the server is mounted at <code>http://localhost:port/doc</code>.</p>
                <h2 className="font-mono text-gray-400 pt-4 text-4xl tracking-tight border-t border-gray-700 !mt-16">{"//about nolita"}</h2>
                <p>
                    Nolita is a full-stack agentic application framework intended for rapidly building projects from experiments to production.
                </p>
                <p>
                    At its core is a state-driven agentic architecture in concert with a browser automation engine. This allows for the creation of complex, dynamic, and interactive applications that can be run in a headless or headful mode in various contexts.
                </p>
                <p>We provide the tools to bootstrap a complete full-stack agentic product that can navigate the web, get information and perform chains of tasks.</p>
                <p>Nolita is written in TypeScript, but can serve as an objective-oriented browser automation framework for projects in other languages by running it as a server (see above).</p>
                <p>When used to bootstrap a project, we include React and Express for the front-end and back-end logic. We leverage <Link className="border-b hover:text-terminal-magenta" href="https://github.com/colinhacks/zod">Zod</Link> to coerce typed LLM output, which can be extended to enforce arbitrary typed responses as needed.</p>
                <p>We wrote Nolita to be used best with our collective memory, which allows anyone to constrain the probability of agents and remember successful actions taken on similarly-structured sites in an abstracted format. By leveraging collective memory, powerful models aren&apos;t necessary to accomplish even complex and multi-step objectives across the web.</p>
                <p>Using collective memory is not required to use Nolita, but Nolita works best when used together with our collective memory.</p>
            </div>

        </div>
        
        </div>
    )
}