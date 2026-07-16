/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: '#f7d9e3',
        rose: '#e6a4bc',
        rosedeep: '#be6e88',
        sage: '#c2d2bb',
        sky: '#d2e4f0',
        skydeep: '#7fa8cc',
        gold: '#c7a66b',
        'gold-light': '#ead7a8',
        'gold-deep': '#8f6c30',
        ivory: '#fbf7f2',
        ink: '#3a2c34',
        'ink-soft': '#6a5660',
      }
    },
  },
  plugins: [],
}
