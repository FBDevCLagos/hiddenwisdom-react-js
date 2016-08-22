const fs = require('fs');
const cheerio = require('cheerio');
const colors = require('colors');

/*eslint-disable no-console */

fs.readFile('app/index.html', 'utf-8', function (err, markup) {
  if (err) {
    return console.log(err);
  }
  const $ = cheerio.load(markup);

  fs.writeFile('build/index.html', $.html(), 'utf-8', function(err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /build'.green)
  })
})