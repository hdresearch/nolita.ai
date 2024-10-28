'use client';
import VectorField from "../components/VectorField";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

interface StateStep {
    success: boolean;
    state: string;
    action: string;
}

export default function Memory() {
    const [stateLog, setStateLog] = useState<StateStep[]>([]);
    const [stage, setStage] = useState(1);
    redirect("/404");

    useEffect(() => {
        const state = [
            "<html> loaded",
            "Page: 'Home'",
            "Page: 'About'",
            "Page: 'Contact'",
            "Page: 'Nolita'",
            "Page: 'API'",
            "Page: 'Memory'",
            "Page: 'Privacy Policy'",
            "Page: 'Log in'"
        ]
        const actions = ["Click: 'Submit'", "Wait: 5s", "Type: 'Hello, World!'", "Scroll: 100px", "Hover: 'Menu'"]
        const randomState = () => ({
            success: Math.random() > 0.5,
            state: state[Math.floor(Math.random() * state.length)],
            action: actions[Math.floor(Math.random() * actions.length)]
        });
        const log = setInterval(() => {
            setStateLog(s => [...s, randomState()]);
            setStage(s => s + 1);
        }, 500);
        return () => clearInterval(log);
    }, []);

    return <>
        <section className="flex flex-col justify-between pt-24 min-h-screen relative">
            <VectorField stage={stage} />
            <div className='px-8'>
                <div className="screen-fadein opacity-0 pt-4 font-light space-y-4" style={{ animationDelay: '1s' }}>
                    <p className="text-2xl lg:text-6xl tracking-tight">Keep the steps that work.</p>
                    <p className="text-2xl lg:text-6xl tracking-tight">Skip the ones that don&apos;t.</p>
                    <p className="screen-fadein opacity-0 lg:text-6xl text-2xl pt-8 text-terminal-magenta font-medium tracking-tight" style={{ animationDelay: '1.5s' }}>That&apos;s the Collective Memory Index.</p>
                </div>
            </div>
            <div className='px-8'>
                <p className="max-w-prose text-sm lg:text-xl screen-fadein opacity-0 pt-8" style={{ animationDelay: "2s" }}>Agents shouldn&apos;t have to solve problems from scratch each time.</p>
                <p className="max-w-prose text-sm lg:text-xl screen-fadein opacity-0 pt-8" style={{ animationDelay: "2.5s" }}>Replay steps from similar tasks, and you don&apos;t need a large action model or to wait for the next foundational models.<br /><br />You can get started building web-enabled, agentic workflows, on-device. Your model steps in when necessary.</p>
            </div>
            <div className="hidden lg:flex absolute bottom-0 min-h-screen right-0 flex-col justify-end text-right font-ui uppercase text-sm">
                {stateLog.map((state, i) => <p key={i} className={classNames({
                    "text-terminal-lime": state.success,
                    "text-terminal-red wait-to-fade": !state.success
                })}>
                    {state.state}, {state.action}</p>
                )}
            </div>
            <section className="flex flex-col mt-8 pt-8 pb-12 px-8 min-h-screen bg-terminal-blue space-y-8 text-white max-w-prose z-20 shadow-[8px_8px_0px_0px_#000]">
            <h2 className='text-2xl lg:text-6xl tracking-tight'>USAGE</h2>
            <p>The Collective Memory Index is a core Nolita feature. You can integrate Index steps by completing the authentication process and entering your High Dimensional Research API key.</p>
            <p>Just run <code className="bg-white text-terminal-blue p-1">npx nolita auth</code> and get started.</p>
            <h3 className="text-2xl lg:text-4xl tracking-tight">SESSION REPLAY AND STORAGE</h3>
            <p>By default, Nolita will inject appropriate steps from the index when providing an API key. If you want to replay a previous session in entirety, as opposed to steps from the global memory pool, you can replay the session.</p>
            <p>Nolita stores completed sessions by their <Link className="bg-white text-terminal-blue p-1 hover:bg-transparent hover:text-white" href="https://docs.nolita.ai/reference/classes/Page.html#pageid">page identifier</Link>. You can replay a session and its memory sequence by providing the same page identifier when using <Link className="bg-white text-terminal-blue p-1 hover:bg-transparent hover:text-white" href="https://docs.nolita.ai/reference/classes/Page.html#followroute">page.followRoute()</Link>.</p>
        </section>
        </section>
    </>
}