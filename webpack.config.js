const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
var extractSCSS = new ExtractTextPlugin('../css/style.css');

module.exports = {
  entry: './resources/scripts/js/main.js',
  output: {
    filename: 'bundle.js',
    path: './public/assets/js/'
  },
  module: {
    loaders: [
      {
      	test: /\.scss$/i,
      	exclude: /(node_modules|style\.scss$)/,
      	loader: 'style!css!sass'
      },
      {
      	test: /style\.scss$/i,
      	loader: extractSCSS.extract(['css','sass'])
      }
    ]
  },
  plugins: [
  	extractSCSS
  ],
  watch: true
};