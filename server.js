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

let indexHtml = (app) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Lunars School of Witchcraft and Wizardry</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href='https://fonts.googleapis.com/css?family=Dosis:400,300,700' rel='stylesheet' type='text/css'>
    <link rel="shortcut icon" type="image/png" href="/favicon.ico"/>
    <link href="/bundle.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div id="app">${app}</div>
    <script src="/bundle.js" type="text/javascript"></script>
  </body>
</html>`;
}

app.use((req, res) => {
  // Note that req.url here should be the full URL path from
  // the original request, including the query string.
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(indexHtml(renderToString(<RoutingContext {...renderProps} />)))
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
