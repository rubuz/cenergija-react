import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "light-yellow": "#fbe8a6",
        primary: "#f4976c",
        "dark-blue": "#303c6c",
        "light-blue": "#b4dfe5",
        "ligheter-blue": "#d2fdff",
        "table-red": "#f63e02",
        "table-green": "#76c045",
        "table-yellow": "#ffc444",
        "table-cream": "#f0d5a0",
        "table-greeny": "#c9da85",
        "table-grey-dark": "#E5E5DD",
      },
    },
  },
  plugins: [daisyui],
};
