/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html", "./dist/**/*.js"],
  theme: {
    screens: {
      md: "560px",
      lg: "768px",
      xl: "1025px",
      "2xl": "1600px",
      "3xl": "2200px",
      container: "1440px",
      "md-max": {
        max: "559px",
      },
      "lg-max": {
        max: "767px",
      },
      "xl-max": {
        max: "1024px",
      },
      "2xl-max": {
        max: "1599px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      burntOrange: "#FF4900",
    },
    spacing: {
      auto: "auto",
      0: "0px",
      1: "1px",
      5: "5px",
      10: "10px",
      15: "15px",
      20: "20px",
      25: "25px",
      30: "30px",
      35: "35px",
      40: "40px",
      45: "45px",
      50: "50px",
      55: "55px",
      60: "60px",
      65: "65px",
      70: "70px",
      75: "75px",
      80: "80px",
      85: "85px",
      90: "90px",
      95: "95px",
      100: "100px",
      105: "105px",
      110: "110px",
      115: "115px",
      120: "120px",
      125: "125px",
      130: "130px",
      135: "135px",
      140: "140px",
      145: "145px",
      150: "150px",
      "1/12": "8.33333333%",
      "2/12": "16.66666667%",
      "3/12": "25%",
      "4/12": "33.33333333%",
      "5/12": "41.66666667%",
      "6/12": "50%",
      "7/12": "58.33333333%",
      "8/12": "66.66666667%",
      "9/12": "75%",
      "10/12": "83.33333333%",
      "11/12": "91.66666667%",
      full: "100%",
      "16/9": "56.25%",
      halfScreen: "50vh",
      screen: "100vh",
    },
    maxWidth: (theme) => ({
      ...theme("spacing"),
    }),
    minWidth: (theme) => ({
      ...theme("spacing"),
    }),
    minHeight: (theme) => ({
      ...theme("spacing"),
    }),
    fontFamily: {
      ppAgrandir: [
        "PP Agrandir Grand",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
        "-apple-system",
        "sans-serif",
      ],
      ppMigra: [
        "PP Migra",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
        "-apple-system",
        "sans-serif",
      ],
    },
    extend: {
      zIndex: {
        negative: -1,
      },
      width: {
        "out-1/12": "calc(50vw - 500%)",
        "out-2/12": "calc(50vw - 200%)",
        "out-3/12": "calc(50vw - 100%)",
        "out-4/12": "calc(50vw - 50%)",
        "out-5/12": "calc(50vw - 20%)",
        "out-6/12": "50vw",
        "out-7/12": "calc(50vw + (1/7 * 100%))",
        "out-8/12": "calc(50vw + 25%)",
        "out-9/12": "calc(50vw + (1/3 * 100%))",
        "out-10/12": "calc(50vw + 40%)",
        "out-11/12": "calc(50vw + (5/11 * 100%))",
        "out-full": "calc(50vw + 50%)",
      },
    },
  },
  plugins: [],
};
