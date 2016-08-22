/**
 * Bare-bones Express server that will serve up the static assets in our build directory
 *
 * For Heorku purposes, we are telling our app to use the given environment variable PORT
 * which Heroku provides.
 * If not use port 8080
 */

const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.development.config');
const open = require('open');

/* eslint-disable no-console */

const port = process.env.PORT || 9000; // Or your other favorite port
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('/app'));

app.get('*', function (req, res) {
  res.sendFile('index.html', {
    root: 'app/'
  });
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.info('==> <img draggable="false" class="emoji" alt="🌎" src="https://s.w.org/images/core/emoji/72x72/1f30e.png"> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
  }
});