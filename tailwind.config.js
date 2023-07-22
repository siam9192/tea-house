/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
            'tea-1': "url('images/tea1.png')",
            'tea-2': "url('images/tea-2.png)",
            'tea-3': "url('images/tea-3.png)",
            'tea-4': "url('images/tea-4.png)",
       }
      }, 
    },
    plugins: [],
  }