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
      animation: {
        heightExpand: 'heightExpand 1s ease-out forwards',
        heightCollapse: 'heightCollapse 1s ease-out forwards'
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
      },
      maxHeight: {
        '0': '0',
        'full': '100%',
        // Add custom values as needed
      },
      keyframes: {
        heightExpand: {
          '0%': { height: '400px' }, /* Initial height */
          '100%': { height: 'calc(1000px - 200px)' } /* Expanded height */
        },
        heightCollapse: {
          '0%': { height: 'calc(100vh - 200px)' }, /* Expanded height */
          '100%': { height: '400px' } /* Initial height */
        }
      },
    },
  },
  plugins: [],
};