import ActionTypes from '../constants/ActionTypes';

const initialState = {
  basicInfoOpen: true
}

function enrollReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.TOGGLE_BASIC_INFO:
      return Object.assign({}, state, {
        basicInfoOpen: !state.basicInfoOpen
      })
    default:
      return state
  }
}

export default enrollReducer
