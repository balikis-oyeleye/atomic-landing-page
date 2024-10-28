/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4k": "2560px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "100%",
        sm: "100%",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
    extend: {
      boxShadow: {
        "custom-shadow": "0 20px 35px 0 rgba(221, 255, 0, 0.2)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(200deg, #FFFFF7 9%, #727267 100%)",
      },
      backdropBlur: {
        10: "10px",
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontStyle: {
        normal: "normal",
        italic: "italic",
      },
      colors: {
        main: "#0d0d0d",
        border: "#262626",
        primary: "#ccc",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
