import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Iosevka Aile", "sans-serif"],
      mono: ["Berkeley Mono", "monospace"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
        "fade-to-black":
          "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
      },
      colors: {
        "deep-slate": "#1a1d1f",
        // 16 color terminal
        "terminal-black": "#000000",
        "terminal-white": "#ffffff",
        "terminal-red": "#ff0000",
        "terminal-green": "#00751b",
        "terminal-lime": "#00ff00",
        "terminal-olive": "#77741d",
        "terminal-yellow": "#ffff00",
        "terminal-blue": "#0000ff",
        "terminal-navy": "#000771",
        "terminal-purple": "#750071",
        "terminal-magenta": "#ff00ff",
        "terminal-cyan": "#00ffff",
        "terminal-gray": "#757575",
        "terminal-silver": "#b8b8b8",
        "terminal-teal": "#007674",
        "terminal-maroon": "#780003",
      },
    },
  },
  plugins: [],
};
export default config;
