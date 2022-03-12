module.exports = {
  content: ["./src/**/*.{jsx, css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
          bg: {
            450: "#F6EFE8"
          },
          purple: {
            450: "#4A154B"
          },
          blue: { 
            450:"#1B72E8"
          },
          black: {
            450: "##000000"
          },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
