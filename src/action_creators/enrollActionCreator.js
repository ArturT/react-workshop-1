import appDispatcher from '../appDispatcher';
import actionTypes from '../constants/actionTypes';

var enrollActionCreator = {
  dispatch: function() {
    appDispatcher.dispatch({
      actionType: actionTypes.TOGGLE_BASIC_INFO
    });
  }
};

export default enrollActionCreator;
