/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage:{
        'cs-logo':"url(assests/logo/ICSI_Logo.png)"
      },
      fontFamily:{
        'LogoFont':['Dancing Script','Griffy','Mukta'],
      }
    },
  },
  plugins: [],
}

