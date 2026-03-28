/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f8fafc",
        },
        ink: {
          DEFAULT: "#0f172a",
          muted: "#64748b",
          subtle: "#94a3b8",
        },
        accent: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
          soft: "#38bdf8",
        },
        night: {
          base: "#0a0c10",
          raised: "#12161e",
          card: "#161c28",
          border: "rgba(148, 163, 184, 0.12)",
        },
        "background-color": "#242424",
        "background-perfil": "#38b6ff",
        "background-taghtml": "#FC8842",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 24px rgba(15, 23, 42, 0.06)",
        "card-hover":
          "0 4px 12px rgba(15, 23, 42, 0.08), 0 12px 40px rgba(15, 23, 42, 0.08)",
        "card-dark":
          "0 0 0 1px rgba(148, 163, 184, 0.08), 0 8px 40px rgba(0, 0, 0, 0.45)",
        "card-dark-hover":
          "0 0 0 1px rgba(148, 163, 184, 0.14), 0 14px 56px rgba(0, 0, 0, 0.55)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
