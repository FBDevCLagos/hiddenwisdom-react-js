const express = require('express');
const open = require('open');
const compression = require('compression');

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static('./build'));

app.get('*', function (req, res) {
  res.sendFile('index.html', {
    root: 'build/'
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log(`Server running on port: ${port}`)
  }
});