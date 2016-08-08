var path = require('path'),
    webpack = require('webpack');
    
module.exports = {
  // path to the javascript file that serves as the entry point to our
  // React application.
  entry: [
    './src/index.js'
  ],

  // path to output our bundled file.
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  // we're running babel loader, converting our ES6 & JSX to browser-compatible ES5
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },

  // allows us to shorten files when using require * require('fileName') instead of require('fileName.jsx')
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};