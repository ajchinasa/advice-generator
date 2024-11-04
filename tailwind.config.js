/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 40px 0 rgba(82, 255, 169, 1)',
      },
      colors: {
        'advise-id': 'hsl(150, 100%, 63%)',
      },
    },
  },
  
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}


