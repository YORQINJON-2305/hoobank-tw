/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins" : ["Poppins", "Arial", "sans-serif"],
      },
      backgroundColor:{
        "body-bg" : "#00040F"
      },
      backgroundImage:{
        "burger" : 'url("../images/burger.svg")',
        "close" : 'url("../images/close.svg")',
        "hero" : 'url("../images/hero-bg.png")',
        "hero-desktop" : 'url("../images/hero-bg-all.png")',
        "hero-shadow" : 'url("../images/hero-bg-shadow.png")',
        "hero-linear" : "linear-gradient(125.17deg, #272727 0%, #11101D 100%);",
        "hero-before" : "../images/foiz-before.svg",
        "btn-linear" : "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)"
      },

      colors:{
        subtitle: " rgba(255, 255, 255, 0.7)"
      },

      backgroundSize:{
        "100%" : "100%",
        "50%" : "50%"
      },
      maxWidth:{
        "sitenav" : "375px",
        "hero" : "670px",
        "hero-text" : "483px",
        "features-text" : "622px",
        "features-item" : "490px",
        "control-text" : "470px",
        "control-text-end" : "570px",
        "about-info" : "450px"
      },
      lineHeight:{
        "title-lg" : "101px",
        "features-title" : "76px"
      },
      borderRadius:{
        "10" : "10px",
        "20" : "20px"
      }
    },
  },
  plugins: [],
}
