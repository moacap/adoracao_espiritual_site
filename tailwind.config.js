/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'site-blue': '#0052ab', // Exact brand blue from report
        'site-red': '#f0443c',  // Precise vibrant red from screenshot
        'site-gray': '#4b5563', // Correct gray from report
      },
      letterSpacing: {
        'tight-hero': '-1.5px',
        'tight-heading': '-0.75px',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'script': ['"Dancing Script"', 'cursive'],
      }
    },
  },
  plugins: [],
}

