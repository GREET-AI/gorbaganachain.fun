/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gorbagana-gradient': 'linear-gradient(90deg, var(--color-gorbagana-purple) 0%, var(--color-gorbagana-turquoise) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}; 