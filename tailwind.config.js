/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        backgroundImage:{
          'bgHero':"url('~assets/back.png')"
        },
        dropShadow: {
          'my': '0 35px 35px rgba(0, 0, 0, 0.25)',
        }
      },
    },
    plugins: [],
  }