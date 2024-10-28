import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start space-y-8 p-4 relative overflow-hidden z-0 screen-fadein bg-terminal-blue crt font-mono text-4xl">
        <p>nolita was a framework by <Link href="https://hdr.is" className="border-b">high dimensional research</Link> for autonomous web navigation</p>
        <p>it is no longer maintained.</p>
        <p>you can still use it <Link href="https://github.com/hdresearch/nolita" className="border-b">on github</Link> and see its documentation on <Link href="https://docs.nolita.ai" className="border-b">docs.nolita.ai</Link></p>
    </div>
  );
}
