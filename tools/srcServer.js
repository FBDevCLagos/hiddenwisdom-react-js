const express = require('express');
const webpack = require('webpack');
const config = require('../webpack.development.config');
const path = require('path');

/* eslint-disable no-console */

const port = process.env.PORT || 9000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(path.join(__dirname, '../src')));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  } else {
    console.info('Listening "🌎" on port %s. Open up http://127.0.0.0:%s/ in your browser.', port, port);
  }
});
