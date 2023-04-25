/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
        },
      },
      colors: {
        accentColor: "#5CD3A8",
        mainTextColor: "#EBD8FF",
        mainColor: "#4B2A99",
      },
      width: {
        380: "380px",
        62: "62px",
      },
      height: {
        460: "460px",
        62: "62px",
      },
      translate: {
        50: "-50%",
      },
    },
  },
  plugins: [],
};
