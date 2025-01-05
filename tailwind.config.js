/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFF",
        "dark": "#070724",
        "semi_dark": "#38384F",
        "gray": "#838391",
        "cyan": "#419EBB",
        "yellow": "#EDA249",
        "purple": "#6f2ed6",
        "red_d14": "#D14C32",
        "red_d8": "#D83A34",
        "red_cd": "#CD5120",
        "green": "#1ec2a4",
        "blue": "#2d68f0"
      },
      screens: {
        mb: { min: "0", max: "767px" },
        tb: { min: "768px", max: "1023px" }
      },
      fontFamily: {
        "antonio": "'Antonio', sans-serif",
        "spartan": "'League Spartan', sans-serif"
      }
    },
  },
  plugins: [],
}

