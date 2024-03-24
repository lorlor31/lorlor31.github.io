/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'roues': "url('src/images/roues.svg')",
        'x': "url('/img/')",
      },
      animation: {
        'translateX-slow': 'translateX 3s linear infinite',
      },
      keyframes: {
        translateX: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }

    },
  },
  plugins: [require("daisyui"),
  require('tailwindcss-animated')]

}

