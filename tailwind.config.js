/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ecomama: {
          cream: '#F4F1EE',
          sage: '#78926E',
          taupe: '#B19C7E',
          charcoal: '#1A1A1A',
          forest: '#233123',
          deepSage: '#3A4F37',
          linen: '#FAF7F2',
          sand: '#E8E0D5',
          terracotta: '#9E6B52'
        }
      },
      fontFamily: {
        goudy: ['"Sorts Mill Goudy"', 'Georgia', 'serif'],
        kumbh: ['"Kumbh Sans"', 'system-ui', 'sans-serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
