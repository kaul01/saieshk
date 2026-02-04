/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // These match the values from your original file
        primary: "#2563eb",
        neutral: "#94a3b8",
        white: "#e2e8f0", // Custom off-white
        black: "#0e141b", // Custom dark background
      },
      fontFamily: {
        // "Be Vietnam Pro" is imported in your Layout file
        sans: ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans],
        serif: ["Gabarito Variable", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        "slide-in": "slide-in 600ms ease both",
      },
      keyframes: {
        "slide-in": {
          "10%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};