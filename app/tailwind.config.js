/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Nunito',  'sans-serif'], // Alterar para a fonte escolhida
      },
      colors: {
        'silver': '#C0C0C0', // Prata
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
      },
    },
  },
  plugins: [],
}

