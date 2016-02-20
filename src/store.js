import { createStore } from 'redux'
import enrollReducer from './reducers/enrollReducer'

let store = createStore(enrollReducer)

export default store
