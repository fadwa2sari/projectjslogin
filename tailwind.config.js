/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
       colors: {
        'black-dark' : '#00000050',
        'dull-white' : '#FFFFFFB3',
        'white-light': '#ffffff30',
        'white-medium': '#ffffff40',
        'neon-yellow' : '#fa0',

       
       }
    },
  },
  plugins: [],
}

