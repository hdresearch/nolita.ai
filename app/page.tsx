import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden z-0 screen-fadein">
      <div className="absolute top-0 left-0 h-screen w-screen bg-cover z-10 screen" style={{ backgroundImage: "url('/gfx.gif')", backgroundRepeat: "no-repeat", imageRendering: "pixelated"}}/>
      {/* <p className="absolute top-0 left-0 z-20 text-terminal-gray font-ui">{"//A NEW RELEASE BY HIGH DIMENSIONAL RESEARCH"}</p> */}
      <div className="z-20 relative px-8 text-white text-center space-y-4">
      <p className="text-4xl font-light tracking-tight z-20">Get started building web-enabled, agentic applications in <span className="text-terminal-magenta">minutes</span>.</p>
        <Link href="/start" legacyBehavior>
          <a className="text-base inline-block font-mono font-light text-terminal-magenta border-transparent hover:text-black hover:bg-terminal-magenta p-2 z-20">{"//get started"}</a>
        </Link>
      </div>
    </div>
  );
}
