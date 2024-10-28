/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small devices (mobile phones)
        sm: "640px", // Small devices (landscape phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra large devices (large desktops)
        "2xl": "1536px", // 2X large devices (larger desktops)
        "3xl": "1920px", // Custom 3X large (full HD screens)
        "4k": "2560px", // Custom 4K large screens
      },
    },
  },
  plugins: [],
};
