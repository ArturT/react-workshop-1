import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import history from './history.js'

var app = document.getElementById('app');

ReactDOM.render((
  <Router history={history}>
    {routes}
  </Router>
), app);
