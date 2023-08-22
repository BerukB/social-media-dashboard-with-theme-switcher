/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      letterSpacing: {
        extraWide: ".5em",
      },
      colors: {
        limeGreen: "hsl(163, 72%, 41%)",
        brightRed: "hsl(356, 69%, 56%)",

        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        instagram: {
          from: "hsl(37, 97%, 70%)",
          to: "hsl(329, 70%, 58%)",
        },
        youTube: "hsl(348, 97%, 39%)",

        //Dark Theme
        toggleDark: {
          from: "hsl(210, 78%, 56%)",
          to: "hsl(146, 68%, 55%)",
        },
        veryDarkBlue: "hsl(230, 17%, 14%)",
        veryDarkBlueTop: "hsl(232, 19%, 15%)",
        darkDesaturatedBlue: "hsl(228, 28%, 20%)",
        desaturatedBlue: "hsl(228, 34%, 66%)",
        white: "hsl(0, 0%, 100%)",

        //Light Theme
        togglelight: "hsl(230, 22%, 74%)",
        white: "hsl(0, 0%, 100%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        lightGrayishBlue: "hsl(227, 47%, 96%)",
        darkGrayishBlue: "hsl(228, 12%, 44%)",
        veryDarkBlue: "hsl(230, 17%, 14%)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
