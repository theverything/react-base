var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var fs = require('fs');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  fs.readFile('./public/index.html', function (err, data) {
    if (err) {
      res.writeHeader(500, {'Content-Type': 'text/html'});
      res.write(err);
      res.end();
    } else {
      res.writeHeader(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    }
  });
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log('App Error:', err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});

process.on('uncaughtException', function (err) {
  console.log('Uncaught Exception:', err.stack);
});
