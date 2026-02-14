import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#FFF7F8",
          100: "#FFF0F3",
          200: "#FADADD",
          300: "#F9CDD7",
          400: "#F5B0C1",
          500: "#E8879B",
          600: "#D4697F",
          DEFAULT: "#FADADD",
        },
        rose: {
          soft: "#F9CDD7",
          DEFAULT: "#F5B0C1",
          deep: "#E8879B",
        },
        cream: {
          DEFAULT: "#FFFBF9",
          warm: "#FFF9F7",
        },
        brand: {
          text: "#4A3540",
          "text-light": "#8A7580",
          "text-muted": "#B8A5AE",
          gold: "#D4A574",
          "gold-light": "#F0DCC8",
        },
      },
      fontFamily: {
        display: ["'Baloo 2'", "cursive"],
        body: ["'Quicksand'", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
      boxShadow: {
        soft: "0 8px 32px rgba(245, 176, 193, 0.10)",
        "soft-lg": "0 16px 48px rgba(245, 176, 193, 0.18)",
        "soft-xl": "0 24px 64px rgba(245, 176, 193, 0.25)",
        glow: "0 8px 32px rgba(232, 135, 155, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
