'use client';
import { Page } from "@/lib/fetch";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function DocsNavigation({ files }: Readonly<{ files: Page[] }>) {
    return (
        <nav className="xl:fixed top-24 left-8 xl:min-h-screen border lg:border-0 border-terminal-magenta">
            <div className="font-mono uppercase p-1 w-full bg-terminal-magenta text-black lg:hidden">NAV</div>
            <ul className="p-2 lg:px-0 max-h-[500px] overflow-y-auto lg:max-h-full">
                {files.map((file) => {
                    if (file.children.length > 0) {
                        return <NavDirectory key={file.path} file={file} />;
                    } else {
                        return <NavPage key={file.path} file={file} />;
                    }
                })}
            </ul>
        </nav>
    );
}

function NavDirectory ({ file, className = "" }: Readonly<{ file: Page, className?: string }>) {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        if (pathName.startsWith(`/docs${file.path}`)) {
            setIsOpen(true);
        }
    }, [file.path, pathName]);

    return (
        <li className={className}>
            <button className="text-lg tracking-tight text-left hover:text-terminal-gray" onClick={() => setIsOpen(!isOpen)}>{file.title}</button>
            {isOpen && (
                <ul>
                    {file.children.map((child) => {
                        if (child.children.length > 0) {
                            return <NavDirectory key={child.path} file={child} className="pl-2" />;
                        } else {
                            return <NavPage key={child.path} file={child} className="pl-2" />;
                        }
                    })}
                </ul>
            )}
        </li>
    );
}

function NavPage ({ file, className = "" }: Readonly<{ file: Page, className?: string }>) {
    return (
        <li className={className + " hover:text-terminal-magenta font-light cursor-pointer text-lg"}>
            <Link href={`/docs${file.path}`}>{file.title}</Link>
        </li>
    );
}