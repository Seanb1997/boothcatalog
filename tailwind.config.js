/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'jnj-red': '#cc0000',
        'jnj-red-dark': '#a00000',
        'jnj-red-hover': '#e60000',
        'jnj-gray': '#58585a',
      },
    },
  },
  plugins: [],
}
