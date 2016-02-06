import appDispatcher from '../appDispatcher';
import actionTypes from '../constants/actionTypes';
import AbstractStore from './AbstractStore';

class EnrollStore extends AbstractStore {
  constructor() {
    super();
    this.isBasicInfoOpen = true;
  }

  toggleBasicInfo() {
    this.isBasicInfoOpen = !this.isBasicInfoOpen;
    this.emitEvent();
  }

  getIsBasicInfoOpen() {
    return this.isBasicInfoOpen;
  }
}

let enrollStore = new EnrollStore();

appDispatcher.register(function(payload) {
  if (payload.actionType == actionTypes.TOGGLE_BASIC_INFO) {
    enrollStore.toggleBasicInfo();
  }
});

export default enrollStore;
