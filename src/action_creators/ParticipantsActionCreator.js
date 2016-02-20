import ActionTypes from '../constants/ActionTypes';
import API from '../lib/API';

function _receiveStudents(students) {
  return {
    type: ActionTypes.REQUEST_STUDENTS,
    students: students
  }
}

const PaticipantsActionCreator = {
  fetchStudents() {
    return (dispatch) => {
      new API().getStudents().then((students) => {
        dispatch(_receiveStudents(students))
      })
    }
  },

}

export default PaticipantsActionCreator;
