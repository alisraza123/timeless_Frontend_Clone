module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
         timelessBg: "#BEAB9A", 
         iconBg:"#A1806E",
         secondPageBg:"#EFEAE5",
         cardBg:"#F8F6F4",
         lightText:"#574F48",
         buttonBg:"#EFEAE5",
         buttonBg2:"#D7CDC4",
         buttonText2:"#877366",
         labelBadgeSecond:"#AC7045",
         faqButtonBg:"#F8F6F4",

      },
      objectPosition: {
        'right-center': 'right center',
        'right-40': '40% center', // agar aapko 40% chahiye right side se
      },
      screens: {
      'xl-custom': '1200px',
      'max810': '810px',
      'max900': '900px',
      'xs': '400px'
    } ,
    keyframes: {
        spinWheel: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        counterSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      },
      animation: {
        spinWheel: 'spinWheel 20s linear infinite',
        counterSpin: 'counterSpin 20s linear infinite',
      },
    
    },
  },
  plugins: [],
}
