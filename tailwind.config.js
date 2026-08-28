/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15221e',
        forest: '#143f35',
        pine: '#0b3028',
        copper: '#c56c3a',
        sand: '#f3efe8',
        mist: '#eef1ed',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui'],
        display: ['Barlow Condensed', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        lift: '0 18px 50px rgba(14, 36, 29, 0.12)',
      },
    },
  },
  plugins: [],
}
