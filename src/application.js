import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import history from './history.js'
import { Router } from 'react-router'

var app = document.getElementById('app');

ReactDOM.render(<Router history={history} routes={routes} />, app);
