/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
      },
      colors: {
        ink: {
          DEFAULT: "#0c0f14",
          muted: "#6b7280",
        },
        surface: {
          DEFAULT: "#141a24",
          elevated: "#1c2433",
        },
        accent: {
          DEFAULT: "#7c3aed",
          soft: "#a78bfa",
          glow: "rgba(124, 58, 237, 0.35)",
        },
        coral: "#fb7185",
        lime: "#bef264",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0c0f14), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};
