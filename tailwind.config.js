module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.tsx",
    "./pages/**/*.ts",
    "./components/**/*.ts",
    "./components/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "md-one": "892px",
      // => @media (min-width: 892px) { ... }

      "md-two": "989px",
      // => @media (min-width: 989px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")],
};
