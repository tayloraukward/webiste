import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /** Matte foundations */
        void: "#050505",
        ink: "#0a0a0c",
        graphite: "#101012",
        panel: "#141416",
        lift: "#1c1c20",
        /** Warm neutrals */
        parchment: "#e8e4dc",
        "parchment-dim": "#c9c4ba",
        silver: "#b0aca5",
        "silver-dim": "#6e6c68",
        /** Accents — use sparingly */
        amber: "#c4a574",
        "amber-soft": "#9a7b4f",
        walnut: "#2a2118",
        /** Legacy alias for gradual tailwind @apply cleanup */
        mist: "#7a7873",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "noise-soft":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        "warm-haze":
          "radial-gradient(900px 520px at 15% -5%, rgba(196,165,116,0.14), transparent 55%), radial-gradient(700px 420px at 95% 0%, rgba(232,228,220,0.06), transparent 45%), radial-gradient(600px 500px at 50% 110%, rgba(42,33,24,0.45), transparent 50%)",
        "vinyl-groove":
          "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.045) 0 1px, transparent 1px 3px)",
        "brushed-h":
          "linear-gradient(105deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 38%, rgba(255,255,255,0.05) 52%, rgba(255,255,255,0.015) 100%)",
      },
      boxShadow: {
        glow: "0 0 72px rgba(196,165,116,0.14)",
        lift: "0 28px 90px rgba(0,0,0,0.62)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        eq: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-1.5%, -0.8%, 0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-warm": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        eq: "eq 1.05s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite alternate",
        "spin-slow": "spin-slow 10s linear infinite",
        "pulse-warm": "pulse-warm 4.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
