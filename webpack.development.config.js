const webpack = require('webpack');
const path = require('path');

 module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', //important for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './app/js/index.js'
  ],
  target: 'web', // bundle app the way web browsers can understand
  output: {
    path: __dirname + '/app', // Note: Physical files are only output by the production build task `npm run build`
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './app'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'app'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

