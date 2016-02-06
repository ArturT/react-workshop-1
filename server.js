import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import Express from 'express';
import http from 'http';
import path from 'path';
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import React from 'react';

import routes from './src/routes'
import config from './webpack/development.config.js';
import defaultConfig from './webpack/default.config.js';

const port = 1337;
const ip = '127.0.0.1';

var app = Express();

var compiler = webpack(config);
app.use(Express.static(defaultConfig.Public));

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: { chunks: false }
}));

app.use(WebpackHotMiddleware(compiler, {
  path: '/__webpack_hmr'
}));

//app.get('*', (req,res) => {
  //res.sendFile(path.join(__dirname + '/views/index.html'));
//});
app.use('*', (req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(renderToString(<RoutingContext {...renderProps} />))
    } else {
      res.status(404).send('Not found')
    }
  })
})

http.createServer(app).listen(port, ip, (err) => {
  if(err) {
    return console.log(err);
  }
  console.log('Listening at ' + ip + ':' + port);
});
