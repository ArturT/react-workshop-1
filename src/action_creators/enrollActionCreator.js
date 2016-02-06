import appDispatcher from '../appDispatcher';

var enrollActionCreator = {
  dispatch: function() {
    appDispatcher.dispatch({
      actionType: 'TOGGLE_BASIC_INFO'
    });
  }
};

export default enrollActionCreator;
