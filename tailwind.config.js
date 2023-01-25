/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body: ['Nunito'],
      },
      backgroundImage:{
        hero: "url('img/astronaut(2).jpg')",
      },
    },
  },
  plugins: [],
}