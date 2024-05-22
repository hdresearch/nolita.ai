"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import cn from "classnames";
import { useIntersectionObserver } from "@uidotdev/usehooks";

export default function NavWrapper({ children }: {
    children: React.ReactNode;
}) {
  const [refFooter, entryFooter] = useIntersectionObserver({
    threshold: 0.1,
    root: null,
    rootMargin: "0px",
  });
  const pathname = usePathname;
  return (
    <Fragment key="key">
      <nav
        className={cn(
          "w-full bg-deep-slate border-b border-gray-600 pb-2 lg:pb-0 lg:border-none lg:bg-transparent lg:mix-blend-difference shrink-0 z-30 fixed top-0 flex flex-col lg:flex-row lg:justify-between lg:items-center screen-fadein",
          {
            hidden: entryFooter?.isIntersecting,
          },
        )}
      >
        <Link href="/">
          <div className="p-2 lg:p-8 flex text-white items-center space-x-2 text-xl lg:text-4xl font-medium tracking-tighter select-none shrink-0 transition-all">
            <p className="hover:text-terminal-magenta font-sans font-medium">
              Nolita
            </p>
          </div>
        </Link>
        <div className="flex items-center uppercase px-2 lg:p-8 space-x-8 min-w-0 min-h-0 overflow-x-auto overflow-y-visible no-scrollbar">
          <Link href="/start">
            <li
              className={cn("font-mono px-2 py-1 list-none border hover:text-terminal-magenta hover:bg-transparent border-terminal-magenta bg-terminal-magenta text-black")}
            >
              GET STARTED
            </li>
          </Link>
          <Link href="https://docs.nolita.ai">
            <li
              className={cn("font-mono list-none text-white hover:text-terminal-magenta")}
            >
              DOCUMENTATION
            </li>
          </Link>
          <Link href="https://github.com/hdresearch/nolita">
            <li
              className="font-mono list-none text-white hover:text-terminal-magenta"
            >
              SOURCE
            </li>
          </Link>
        </div>
      </nav>
      <div className="grow h-full w-full bg-deep-slate relative">
        {children}
      </div>
      <footer
        className="bg-gray-50 p-8 pb-16 w-full font-mono z-40 absolute"
        ref={refFooter}
      >
        <div className="w-full border-t-4 border-double border-deep-slate pt-8">
          <div className="flex flex-col w-full text-deep-slate items-start space-y-1 text-xl lg:text-4xl font-medium tracking-tighter cursor-default select-none shrink-0 mb-8 lg:mb-0">
            <p className="font-sans font-medium">
              Nolita
            </p>
            <p className="text-sm tracking-tight">A product of <Link className="border-b border-black" href="https://hdr.is">High Dimensional Research</Link>.</p>
          </div>
          <div className="pt-8 flex flex-col text-3xl font-sans tracking-tight font-light">
            <Link href="/start">
              Get Started
            </Link>
            <Link href="https://docs.nolita.ai">
              Documentation
            </Link>
            <Link href="https://github.com/hdresearch/nolita">
              Source
            </Link>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
