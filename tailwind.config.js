const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        body:'#111111',
        line:'#1e1e1e',
        item:'#181818',
        card:'#252527',
        brandGreen:'#e8fe4e',
        brandGray:'#737373',
        brandBlue:'#1a2cb8',
        brandOrange:'#cbbca6',
      }
    },
  },
  plugins: [],
})

