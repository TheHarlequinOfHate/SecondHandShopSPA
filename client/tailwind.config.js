/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'cool-blue': '#61A3BA',
        'blue-light': '#7FBCD2',
        'coral':'#fab4b2',
        'light-coral': '#f69a99',
        'mustard': '#fdb73e',
        'light-green': '#dfe2cf',
        'smooth-grey': '#eee2df',
        'dark-green': '#84a59d',
        'sky-blue': '#bde0fe'
      },
    },
  },
  plugins: [],
}

