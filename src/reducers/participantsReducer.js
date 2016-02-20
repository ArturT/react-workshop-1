import ActionTypes from '../constants/ActionTypes';

const initialState = {
  students: []
}

function participantsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_STUDENTS:
      return Object.assign({}, state, {
        students: action.students
      })
    default:
      return state
  }
}

export default participantsReducer
