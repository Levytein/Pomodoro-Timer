/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-red': 'rgb(220 38 38) 1px 6px 0px',
        'custom-green': 'rgb(22 163 74) 1px 6px 0px',
        'custom-grey': 'rgb(75 85 99) 1px 6px 0px',
        'custom-cyan': 'rgb(8 145 178) 1px 6px 0px',
      },
    },
  },
  plugins: [],
}
