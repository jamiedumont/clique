module.exports = {
  css: [ 
    'css/membership.css'
  ],
  content: [
    'layouts/*.html',
    'templates/**/*.html',
    'templates/*.html',
    'partials/**/*.html',
    'partials/*.html'
  ],
  extractors: [
    {
    extractor: class {
      static extract(content) {
        return content.match(/[A-z0-9-:\/]+/g) || [];
      }
    },
    extensions: ["html"]
    }
  ]
}
