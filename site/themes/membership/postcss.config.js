module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer'),
    require('csswring')
  ]
}
