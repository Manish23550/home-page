import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D1B69",
        secondary: "#6A4C93",
        accent: "#F8A94A",
        highlight: "#FFD27D",
        background: "#0F172A",
        foreground: "#FFFFFF",
        muted: "#CBD5E1",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        brand: "16px",
      },
      boxShadow: {
        soft: "0 20px 60px -15px rgba(45, 27, 105, 0.45)",
        glow: "0 0 40px rgba(248, 169, 74, 0.35)",
      },
      backgroundImage: {
        "sunset-gradient":
          "linear-gradient(180deg, #2D1B69 0%, #6A4C93 35%, #F8A94A 70%, #FFD27D 100%)",
        "dusk-gradient": "linear-gradient(180deg, #0F172A 0%, #2D1B69 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        driftSlow: {
          "0%": { transform: "translateX(-6%)" },
          "100%": { transform: "translateX(6%)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        flyAcross: {
          "0%": { transform: "translate(-10vw, 10px)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translate(110vw, -60px)", opacity: "0" },
        },
        fogDrift: {
          "0%": { transform: "translateX(-4%)" },
          "50%": { transform: "translateX(4%)" },
          "100%": { transform: "translateX(-4%)" },
        },
        idle: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-3px) rotate(0.6deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        driftSlow: "driftSlow 24s ease-in-out infinite alternate",
        sway: "sway 4s ease-in-out infinite",
        flyAcross: "flyAcross 18s linear infinite",
        fogDrift: "fogDrift 20s ease-in-out infinite",
        idle: "idle 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
