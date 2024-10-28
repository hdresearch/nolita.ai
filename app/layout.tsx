import type { Metadata } from "next";
import classNames from "classnames";
import "./style/font.css";
import "./globals.css";
import NavWrapper from "./components/Nav";


export const metadata: Metadata = {
  title: "Nolita, by High Dimensional Research",
  description: "Your next full-stack framework for agentic applications.",
  openGraph: {
    images: "https://content.hdr.is/nolita-card.png",
    title: "Nolita, by High Dimensional Research",
  },
  twitter: {
    card: "summary_large_image",
    images: "https://content.hdr.is/nolita-card.png",
    site: "@highdimrsch"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <main
          className="min-h-0 h-full w-full bg-deep-slate text-gray-300 relative no-scrollbar flex-1"
        >
          {children}
        </main>
    </body>
    </html>
  );
}
