/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        "background-color": "#242424",
        "background-perfil": "#38b6ff",
        "background-taghtml": "#FC8842",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
