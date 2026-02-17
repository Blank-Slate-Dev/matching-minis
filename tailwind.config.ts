// tailwind.config.ts
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
          50: "#FDF8F9",
          100: "#FAF0F2",
          200: "#F5E1E5",
          300: "#EDCDD4",
          400: "#E4B3BE",
          500: "#D4909F",
          DEFAULT: "#F5E1E5",
        },
        rose: {
          soft: "#EDCDD4",
          DEFAULT: "#D4909F",
          deep: "#C4707F",
        },
        cream: {
          DEFAULT: "#FDFBFA",
          warm: "#FAF7F5",
        },
        brand: {
          text: "#2C2426",
          "text-light": "#6B5A5E",
          "text-muted": "#9E8F92",
          gold: "#C9A87C",
          "gold-light": "#EDE3D5",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
      borderRadius: {
        "2xl": "12px",
        "3xl": "16px",
        "4xl": "20px",
      },
      boxShadow: {
        soft: "0 2px 16px rgba(44, 36, 38, 0.04)",
        "soft-md": "0 4px 24px rgba(44, 36, 38, 0.06)",
        "soft-lg": "0 8px 40px rgba(44, 36, 38, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
