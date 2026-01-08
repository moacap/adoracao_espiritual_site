/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "site-terracotta": "#BC6F65",
        "site-beige": "#F1EDEA",
        "site-dark": "#303030",
        "site-blue": "#0052ab", // Keeping for legacy if needed
      },
      letterSpacing: {
        "tight-hero": "-1.5px",
        "tight-heading": "-0.75px",
      },
      fontFamily: {
        sans: ['"Red Hat Display"', "sans-serif"],
        serif: ['"Libre Caslon Display"', "serif"],
        script: ['"Dancing Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
