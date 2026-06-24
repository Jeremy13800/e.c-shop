import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A96E",
          light:   "#E8D5A3",
          dark:    "#9A7A45",
        },
        cream: {
          DEFAULT: "#FAF7F2",
          dark:    "#F0EAE0",
        },
        velvet: {
          DEFAULT: "#111111",
          soft:    "#1E1E1E",
        },
        "rose-powder": "#F2D5D5",
        "rose-deep":   "#C8768A",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        lato:      ["var(--font-lato)", "system-ui", "sans-serif"],
        // keep legacy aliases
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans:  ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra:  "0.35em",
      },
      transitionDuration: {
        "400": "400ms",
      },
    },
  },
  plugins: [],
};
export default config;
