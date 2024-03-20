/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#86868b",
        primary: "#afafaf",
        blue: "#2997ff",
        zinc: "#101010",
        graycolor: {
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
      },
      fontFamily: {
        headerBold: ["Rowdies", "sans-serif"],
      },
    },
  },
  plugins: [],
};
