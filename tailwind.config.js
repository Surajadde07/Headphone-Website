/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'md': "1150px",
      'mx' : {'max' : '1150px'},
    },
    extend: {
      colors: {
        first_color: "hsl(23, 100%, 50%)",
        white_color: "hsl(0, 0%, 100%)",
        text_color: "hsl(23, 4%, 60%)",
        body_color: "hsl(23, 12%, 4%)",
        container_color: "hsl(23, 4%, 10%)",
      },
      backgroundImage: {
        gradient_color: "linear-gradient(90deg, hsl(23, 4%, 28%) 0%, hsl(23, 4%, 8%) 100%)",
      },
      fontFamily: {
        body_font: ["Poppins", "sans-serif"],
      },
      height:{
        header_height: "3.5rem",
      },
      fontSize: {
        biggest_font_size: "10rem",
        h1_font_size: "1.5rem",
        h2_font_size: "1.25rem",
        h3_font_size: "1rem",
        normal_font_size: ".938rem",
        small_font_size: ".813rem",
        smaller_font_size: ".75rem",

        //? for md = 1150px responsive variables
        md_biggest_font_size: "25rem",
        md_h1_font_size: "2.25rem",
        md_h2_font_size: "1.5rem",
        md_h3_font_size: "1.25rem",
        md_normal_font_size: "1rem",
        md_small_font_size: ".875rem",
        md_smaller_font_size: ".813rem",
      },
      fontWeight: {
        font_regular: 400,
        font_medium: 500,
        font_semi_bold: 600,
      },
      zIndex: {
        z_tooltip: 10,
        z_fixed: 100,
      }
    },
  },
  plugins: [],
}