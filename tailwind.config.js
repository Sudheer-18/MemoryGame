/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fadeOut': 'fadeOut 0.5s ease-out forwards',
        'flip': 'flip 0.5s ease-in-out',
        'appear': 'appear 0.3s ease-in',
        'pulse-subtle': 'pulseSubtle 2s infinite',
        'fadeIn': 'fadeIn 0.5s ease-out',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
};