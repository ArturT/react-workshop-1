import { createStore } from 'redux'
import { combineReducers } from 'redux'
import enrollReducer from './reducers/enrollReducer'
import participantsReducer from './reducers/participantsReducer'

const reducers = combineReducers({
  enroll: enrollReducer,
  participants: participantsReducer
})

let store = createStore(reducers)

export default store
