/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      primary: ['Satoshi-Variable', 'sans-serif'],
      secondary: ['Archivo_SemiExpanded', 'sans-serif'],
    },
    backgroundImage: {
      navButtonRadialRight: 'radial-gradient(147.92% 147.92% at 171.88% 151.04%, #6C737B 0%, rgba(108, 115, 123, 0) 100%)',
      navButtonRadialLeft: 'radial-gradient(147.92% 147.92% at 171.88% 151.04%, #6C737B 0%, rgba(108, 115, 123, 0) 100%'
    }
  },
  plugins: []
};
