import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poynter: ["var(--poynter)"],
        cervo: ["var(--cervo)"],
        brandon: ["var(--brandon)"],
        sentinel: ["var(--sentinel)"],
        signature: ["var(--signature)"],
      },
      colors: {
        "brand-pink": {
          200: "#F9EDE5",
          500: "rgba(254,172,160,0.85)",
          600: "#D0BCA8",
          700: "#FEACA0",
          300: "#FBF6F1",
          800: "rgba(234,103,89,1)",
        },
        "brand-black": {
          500: "rgba(0,0,0,1)",
        },
        "brand-yellow": {
          500: "#FFCA49",
          700: "#EF761D",
        },
        "brand-white": {
          500: "rgba(255,255,255,1)",
        },
        "brand-blue": {
          500: "#6B9ABE",
        },
      },
    },
  },
  plugins: [],
};
export default config;
