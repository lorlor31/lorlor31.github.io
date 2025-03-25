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
        'constr': "url('src/images/site_en_construction.png')",
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
      },
      colors : {
        bubbleBlue: '#4A00FF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui"),
  require('tailwindcss-animated')]

}

