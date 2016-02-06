import appDispatcher from '../appDispatcher';
import actionTypes from '../constants/actionTypes';

var preferenesActionCreator = {
  dispatch: function() {
    appDispatcher.dispatch({
      actionType: actionTypes.TOGGLE_PREFERENCES
    });
  }
};

export default preferenesActionCreator;
