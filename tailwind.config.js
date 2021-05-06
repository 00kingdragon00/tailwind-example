module.exports = {
  purge: [
    "./01-setting-up-tailwindcss/*.html",
    "./02-the-utility-first-workflow/*.html",
    "./03-responsive-design/*.html",
    "./04-hover-focus-and-other-states/*.html",
    "./05-composing-utilities-with-@apply/*.html",
    // "./01-setting-up-tailwindcss/*.html",
    "./07-customizing-your-design-systems/*.html",
    ".08-optimizing-for-production/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
      fontSize: {
        "3.5xl": ["2rem", "2.25rem"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      // fontSize: ["hover"]
    },
  },
  plugins: [],
};
