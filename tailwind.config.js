/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          1: '#009174',
          2: '#F4F4F4',
          3: '#52BD94',
        },
        dark: {
          1: '#242328',
        },
        grey: {
          1: '#A6A6A6',
          2: '#4F4F4F',
          3: '#333333',
          4: '#8D8D8D',
          5: '#F9FAFB',
        },
      },
      keyframes: {
        heartBeat: {
          '0%, 100%, 40%': {
            transform: 'scale(1)',
          },
          '30%,50%': {
            transform: 'scale(1.2)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        heartBeat: 'heartBeat 1.5s infinite both',
        fadeIn: 'fadeIn 0.2s linear',
      },
      fontFamily: {
        dmSans: ["'DM Sans'", 'sans-serif'],
      },
      backgroundImage: {
        gradient: 'linear-gradient(101deg, #009174 20.94%, #52BD94 100%)',
      },
      boxShadow: {
        'inner-grey': '0px 4px 8px 0px rgba(0, 0, 0, 0.16) inset',
      },
    },
  },
  plugins: [],
};
