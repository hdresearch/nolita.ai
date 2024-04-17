import type { Metadata } from "next";
import classNames from "classnames";
import "./style/font.css";
import "./globals.css";
import NavWrapper from "./components/Nav";


export const metadata: Metadata = {
  title: "Nolita, by High Dimensional Research",
  description: "Your next full-stack framework for agentic applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavWrapper>
          <main
          className="min-h-0 h-full w-full bg-deep-slate text-gray-300 relative no-scrollbar flex-1"
        >
          {children}
        </main>
      </NavWrapper>
    </body>
    </html>
  );
}
