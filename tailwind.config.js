import tailwindAnimatePlugin from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue-night-to-sunset': 'linear-gradient(to bottom, #000000 0%, #000011 50%, #000030 100%)', // Azul noche a azul atardecer
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

