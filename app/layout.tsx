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
  className,
  style,
  paddingWide = true,
  paddingTop = true,
  flex = true,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  paddingWide?: boolean;
  paddingTop?: boolean;
  flex?: boolean;
}>) {
  return (
    <html lang="en">
      <body>
        <NavWrapper>
          <main
          className={classNames(
            "min-h-0 h-full w-full bg-deep-slate text-gray-300 relative no-scrollbar flex-1",
            className,
            {
              "px-8": paddingWide,
              "pt-32 pb-16": paddingTop,
              "flex flex-col": flex,
            },
          )}
          style={{ ...style }}
        >
          {children}
        </main>
      </NavWrapper>
    </body>
    </html>
  );
}
