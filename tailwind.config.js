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
      },
    },
  },
  plugins: [],
};
