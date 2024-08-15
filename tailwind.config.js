import tailwindAnimatePlugin from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue-night-to-sunset': 'linear-gradient(to bottom, #000000 0%, #000011 50%, #000030 100%)', 
        'hover-image': "url('src/assets/perfilimagen4.png')",
        'moon-gradient': 'radial-gradient(circle at 30% 30%, #f5f5f5, #ccc, #999, #666), radial-gradient(circle at 70% 70%, #ddd, #aaa, #888, #444)',
        'crater-gradient': 'radial-gradient(circle, rgba(100, 100, 100, 0.3) 20%, rgba(100, 100, 100, 0.15) 70%, transparent 80%)',
        'texture-gradient': 'radial-gradient(circle, rgba(150, 150, 150, 0.2), transparent)',
      },
      boxShadow: {
        'moon-inner': 'inset -20px -20px 40px rgba(0, 0, 0, 0.5), inset 20px 20px 40px rgba(255, 255, 255, 0.1), 10px 10px 20px rgba(0, 0, 0, 0.5), 0 0 50px rgba(255, 255, 255, 0.2)',
        'crater-inner': 'inset -5px -5px 10px rgba(50, 50, 50, 0.2), inset 5px 5px 10px rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        'crater-shape': '40% 60% 50% 50%',
      },
      keyframes: {
        'slow-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shooting-star': {
          '0%': { transform: 'translate(0, 0)', opacity: 1 },
          '80%': { opacity: 1 },
          '100%': { transform: 'translate(50vw, 50vh)', opacity: 0 },
        },
      },
      animation: {
        'slow-rotate': 'slow-rotate 20s infinite linear',
        'shooting-star': 'shooting-star 1s ease-in-out forwards',
      },
      width: {
        'crater-1': '45px',
        'crater-2': '35px',
        'crater-3': '40px',
        'crater-4': '25px',
        'crater-5': '35px',
        'crater-6': '30px',
        'crater-7': '25px',
        'crater-8': '30px',
      },
      height: {
        'crater-1': '40px',
        'crater-2': '30px',
        'crater-3': '35px',
        'crater-4': '20px',
        'crater-5': '30px',
        'crater-6': '25px',
        'crater-7': '20px',
        'crater-8': '25px',
      },
      rotate: {
        'crater-1': '15deg',
        'crater-2': '-10deg',
        'crater-3': '5deg',
        'crater-4': '20deg',
        'crater-5': '-15deg',
        'crater-6': '10deg',
        'crater-7': '-5deg',
        'crater-8': '25deg',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Puedes definir los temas de DaisyUI que quieres usar
  },
}