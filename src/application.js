import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match } from 'react-router';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { configureStore } from './store';
import { Provider } from 'react-redux';
import { reduxReactRouter, ReduxRouter } from 'redux-router'

const history = createBrowserHistory();

const app = document.getElementById('app');
const initialState = window.__INITIAL_STATE__
const store = configureStore(reduxReactRouter, createBrowserHistory, initialState)

ReactDOM.render(
  <Provider store={store}>
    <ReduxRouter routes={routes} />
  </Provider>,
app);
