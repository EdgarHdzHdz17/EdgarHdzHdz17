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
          muted: "#f4f8fb",
        },
        mist: {
          50: "#f4f1ec",
          100: "#e8e2d9",
          200: "#d9d0c4",
        },
        ink: {
          DEFAULT: "#1a1612",
          muted: "#6b6258",
          subtle: "#8f857a",
        },
        accent: {
          DEFAULT: "#6f5840",
          hover: "#5c4834",
          soft: "#e4d5c0",
        },
        night: {
          base: "#090807",
          raised: "#141210",
          card: "#1c1916",
          border: "rgba(228, 213, 192, 0.14)",
        },
        "background-color": "#242424",
        "background-perfil": "#38b6ff",
        "background-taghtml": "#FC8842",
      },
      boxShadow: {
        card: "0 1px 2px rgba(26, 22, 18, 0.05), 0 10px 32px rgba(26, 22, 18, 0.07)",
        "card-hover":
          "0 4px 16px rgba(26, 22, 18, 0.08), 0 16px 44px rgba(111, 88, 64, 0.12)",
        "card-dark":
          "0 0 0 1px rgba(228, 213, 192, 0.08), 0 12px 40px rgba(0, 0, 0, 0.55)",
        "card-dark-hover":
          "0 0 0 1px rgba(228, 213, 192, 0.28), 0 0 28px rgba(196, 164, 112, 0.12), 0 16px 48px rgba(0, 0, 0, 0.55)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
