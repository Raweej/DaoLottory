module.exports = {
  content: [
    "./views/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ball': "url('../public/static/images/bg-ball.png')",
      },
    },
  },
  plugins: [],
}
