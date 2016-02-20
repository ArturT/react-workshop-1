import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import EnrollReducer from './reducers/EnrollReducer';
import ParticipantsReducer from './reducers/ParticipantsReducer';
import thunk from 'redux-thunk';
import routes from './routes'
import { routerStateReducer } from 'redux-router'
import createHistory from 'history/lib/createMemoryHistory';

const reducers = combineReducers({
  enroll: EnrollReducer,
  router: routerStateReducer,
  participants: ParticipantsReducer
})

export function configureStore(reduxReactRouter, createBrowserHistory, initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk),
    reduxReactRouter({ routes, createHistory })
  )(createStore);

  return createStoreWithMiddleware(reducers, initialState);
}
