module.exports = {
  content: ["./templates/**/*.{html,js}"],
  theme: {
    extend: {
      scale: {
        '-1': '-1'
      },
      spacing: {
        '100': '15rem',
        '120': '30rem',
        '144': '36rem',
        '100': '50rem',
        '288': '72rem',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),

  ],

}