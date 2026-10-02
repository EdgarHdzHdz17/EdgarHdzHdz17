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
          50: "#f4f8fb",
          100: "#e7eef4",
          200: "#d3e1eb",
        },
        ink: {
          DEFAULT: "#152433",
          muted: "#5c6e80",
          subtle: "#8aa0b3",
        },
        accent: {
          DEFAULT: "#0e7490",
          hover: "#155e75",
          soft: "#67e8f9",
        },
        night: {
          base: "#07131c",
          raised: "#0c1c2a",
          card: "#102536",
          border: "rgba(103, 232, 249, 0.14)",
        },
        "background-color": "#242424",
        "background-perfil": "#38b6ff",
        "background-taghtml": "#FC8842",
      },
      boxShadow: {
        card: "0 1px 2px rgba(21, 36, 51, 0.04), 0 10px 32px rgba(21, 50, 72, 0.06)",
        "card-hover":
          "0 4px 16px rgba(21, 36, 51, 0.06), 0 16px 44px rgba(14, 116, 144, 0.1)",
        "card-dark":
          "0 0 0 1px rgba(103, 232, 249, 0.08), 0 12px 40px rgba(0, 0, 0, 0.38)",
        "card-dark-hover":
          "0 0 0 1px rgba(103, 232, 249, 0.32), 0 0 28px rgba(34, 211, 238, 0.14), 0 16px 48px rgba(0, 0, 0, 0.45)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
