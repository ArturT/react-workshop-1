import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import EnrollReducer from './reducers/EnrollReducer';
import ParticipantsReducer from './reducers/ParticipantsReducer';

const reducers = combineReducers({
  enroll: EnrollReducer,
  participants: ParticipantsReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
