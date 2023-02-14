/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        typing: "typing 5s steps(34)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0",
          },
          "80%": {
            width: "50ch",
          },
          "100%": {
            width: "50ch",
          },
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
