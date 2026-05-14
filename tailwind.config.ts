import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        /** Spotify-adjacent app shell */
        void: "#000000",
        ink: "#121212",
        graphite: "#181818",
        panel: "#181818",
        lift: "#282828",
        "lift-bright": "#333333",
        /** Typography */
        parchment: "#ffffff",
        "parchment-dim": "#b3b3b3",
        silver: "#a7a7a7",
        "silver-dim": "#6a6a6a",
        /** Spotify brand accent — use intentionally */
        spotify: "#1DB954",
        "spotify-bright": "#1ed760",
        "spotify-dim": "#169c46",
        /** Wrapped-inspired accents (very subtle UI use) */
        "wrap-pink": "#e879f9",
        "wrap-violet": "#a78bfa",
        "wrap-cyan": "#22d3ee",
        /** Legacy tokens mapped for gradual cleanup */
        amber: "#1DB954",
        "amber-soft": "#169c46",
        walnut: "#1a1a1a",
        mist: "#6a6a6a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "noise-soft":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        "ambient-app":
          "radial-gradient(1050px 620px at 88% -8%, rgba(29,185,84,0.14), transparent 58%), radial-gradient(800px 520px at -5% 105%, rgba(167,139,250,0.07), transparent 55%), radial-gradient(700px 480px at 50% 50%, rgba(34,211,238,0.04), transparent 60%)",
        "ambient-depth": "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 28%, transparent 72%, rgba(0,0,0,0.55) 100%)",
        "vinyl-groove":
          "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)",
        "brushed-h":
          "linear-gradient(105deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 38%, rgba(255,255,255,0.04) 52%, rgba(255,255,255,0.015) 100%)",
        "warm-haze":
          "radial-gradient(900px 520px at 15% -5%, rgba(29,185,84,0.08), transparent 55%), radial-gradient(700px 420px at 95% 0%, rgba(255,255,255,0.04), transparent 45%)",
      },
      boxShadow: {
        "glow-spotify": "0 0 72px rgba(29, 185, 84, 0.28)",
        glow: "0 0 72px rgba(29, 185, 84, 0.2)",
        lift: "0 24px 64px rgba(0, 0, 0, 0.55)",
        card: "0 12px 40px rgba(0, 0, 0, 0.45)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.06)",
        "inset-deep": "inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.35)",
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
        "pulse-spotify": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.02)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        eq: "eq 1.05s ease-in-out infinite",
        drift: "drift 22s ease-in-out infinite alternate",
        "spin-slow": "spin-slow 10s linear infinite",
        "pulse-spotify": "pulse-spotify 4s ease-in-out infinite",
        shimmer: "shimmer 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
