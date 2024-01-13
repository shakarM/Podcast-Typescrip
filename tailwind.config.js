/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'gold-30': '#FFC60B',  // Starting color
        'gold-35': '#FFC200',  // Slightly darker
        'gold-25': '#FFCA3E',  // Lighter
        'gold-40': '#FFBB00',  // Darker
        'gold-20': '#FFD550',  // Lighter
        'gold-45': '#FFAC00',  // Darker
        'black-10': '#434343',  // Slightly lighter
        'black-20': '#272829',  // Darker
        'black-30': '#61677A',  // Lighter
       ' blue-10':' #BEDCFD',
        'blue-20':' #8EB8EA',
        'blue-30': '#5E91D8',
        'blue-40': '#3A74C8',
        'blue-50':' #1E5AB9',
        'blue-60': '#0C449F',
        '10': '#B2DFC1',
  '20': '#80C89B',
  '30': '#4FAE76',
  '40': '#32935D',
  '50': '#1F7D4A',
  '60': '#13653B',
  "back": "#FFF9E6",
  "bb": "#f0e8ce"
      },
      screens: {
        xs:"480px",
        sm:"768px",
        md:"1060px"
      }
    },
  },
  plugins: [],
};
