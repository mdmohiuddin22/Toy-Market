/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://i.ibb.co/kxXP2Jb/pexels-mart-production-7334328.jpg')",
        'footer-texture': "url('https://i.ibb.co/kxXP2Jb/pexels-mart-production-7334328.jpg')",
      },
      fontFamily: {
        primary: "",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

