/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
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
      },
    },
    extend: {
      boxShadow: {
        "custom-shadow": "0 20px 35px 0 rgba(221, 255, 0, 0.2)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(200deg, #FFFFF7 9%, #727267 100%)",
        "custom-gradient-text":
          "linear-gradient(145deg, #FFFFF7 0%, rgba(255, 255, 247, 0.34) 100%)",
        "dark-shadow":
          "linear-gradient(180deg, rgba(13, 13, 13, 0) 75%, rgba(13, 13, 13, 1) 95%)",
        "custom-box-gradient":
          "linear-gradient(to bottom, #1E1E1E 0%, #141414 100%)",
        "cta-gradient":
          "linear-gradient(140.06451559643327deg, #1a1a1a 0%, #0d0d0d 100%)",
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
        yellow: "#DDFF00",
        silver: "#C0C0C0",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
