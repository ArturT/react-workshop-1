import ActionTypes from '../constants/ActionTypes';

const initialState = {
  basicInfoOpen: true,
  preferencesOpen: false
}

function enrollReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_BASIC_INFO:
      return Object.assign({}, state, {
        basicInfoOpen: !state.basicInfoOpen
      })
    case ActionTypes.TOGGLE_PREFERENCES:
      return Object.assign({}, state, {
        preferencesOpen: !state.preferencesOpen
      })
    default:
      return state
  }
}

export default enrollReducer
