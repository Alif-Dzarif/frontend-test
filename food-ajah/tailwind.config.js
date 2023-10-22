/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scale-in': 'scaleIn 0.5s',
        'scale-out': 'scaleOut 0.5s',
        'appear': 'appear 0.5s',
        'disappear': 'disappear 0.5s',
        'rounds': 'transition { transform 0.5s ease }'
      },
    },
  },
  plugins: [],
}