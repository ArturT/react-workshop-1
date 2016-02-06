import appDispatcher from '../appDispatcher';
import consts from '../constants/actionTypes';

var enrollActionCreator = {
  dispatch: function() {
    appDispatcher.dispatch({
      actionType: consts.TOGGLE_BASIC_INFO
    });
  }
};

export default enrollActionCreator;
