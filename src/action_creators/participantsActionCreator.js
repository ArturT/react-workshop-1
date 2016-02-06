import appDispatcher from '../appDispatcher';
import actionTypes from '../constants/actionTypes';
import API from '../lib/API';

var participantsActionCreator = {
  requestStudents: function() {
    var students = new API().getStudents();

    appDispatcher.dispatch({
      actionType: actionTypes.LOAD_STUDENTS,
      students: students
    });
  }
};

export default participantsActionCreator;
