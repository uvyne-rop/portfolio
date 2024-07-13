/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grundschrift: ['Playwrite Deutschland Grundschrift', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        glow: 'glow 3s linear infinite',
      },
    },
  },
  plugins: [],
};

