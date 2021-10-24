module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'lelouch': "url('https://www.wallpaperflare.com/static/182/748/956/anime-code-geass-lamperouge-lelouch-lelouch-wallpaper.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
