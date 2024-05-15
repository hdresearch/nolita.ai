'use client';
import { Page } from "@/lib/fetch";
import { useState } from "react";
export default function DocsNavigation({ files }: Readonly<{ files: Page[] }>) {
    return (
        <nav className="xl:fixed top-24 left-8 xl:min-h-screen">
            <ul>
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
    return (
        <li className={className}>
            <button className="text-3xl tracking-tight font-light text-left hover:text-terminal-gray" onClick={() => setIsOpen(!isOpen)}>{file.title}</button>
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
        <li className={className + " hover:text-terminal-magenta cursor-pointer"}>
            <a href={`/docs${file.path}`}>{file.title}</a>
        </li>
    );
}