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
      }

    },
  },
  plugins: [require("daisyui"),
  require('tailwindcss-animated')]

}

