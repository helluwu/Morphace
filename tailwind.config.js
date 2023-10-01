const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    colors: {
      'beige' :'#ffedd5',
      'grey' : '#52525b',
      'black' : '#030712',
      'white':'#f8fafc',
      'nav'  : '#AEC3AE',
      'hover' : '#EDC6B1'

    },
    extend: {
      backgroundImage: {
      },


    },
  },
  plugins: [],
})
