import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import Express from 'express';
import http from 'http';

import config from './webpack/development.config.js';
import defaultConfig from './webpack/default.config.js';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Routes from './src/routes';
import { configureStore } from './src/store'
import { Provider } from 'react-redux'
import createHistory from 'history/lib/createMemoryHistory';
import { ReduxRouter } from 'redux-router';
import { reduxReactRouter, match } from 'redux-router/server';

const port = 1337;
const ip = '127.0.0.1';

const app = Express();

const compiler = webpack(config);
app.use(Express.static(defaultConfig.Public));

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: { chunks: false }
}));

app.use(WebpackHotMiddleware(compiler, {
  path: '/__webpack_hmr'
}));

const indexHtml = (store, initialState) => {
  const app = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ReduxRouter />
    </Provider>);
  return `
  <!DOCTYPE html>
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
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <div id="app">${app}</div>
      <script src="/bundle.js" type="text/javascript"></script>
    </body>
  </html>
  `;
}

app.use((req, res) => {
  const store = configureStore(reduxReactRouter, createHistory, {})

  store.dispatch(match(req.originalUrl,
                      (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      render(store, res, renderProps)
    } else {
      res.status(404).send('Not found');
    }
  }))
});

function render(store, res, renderProps) {
  Promise.all(fetchAll(store, renderProps)).then(() => {
    const initialState = store.getState()
    const html = indexHtml(store, initialState);
    res.send(html);
  })
}

function fetchAll(store, renderProps) {
  return renderProps.components.map((componentClass) => {
    if (componentClass.fetchData) {
      return componentClass.fetchData(store.dispatch, renderProps.params)
    }
  });
}

http.createServer(app).listen(port, ip, (err) => {
  if(err) {
    return console.log(err);
  }
  console.log('Listening at ' + ip + ':' + port);
});
