import appDispatcher from '../appDispatcher';
import actionTypes from '../constants/actionTypes';
import EventEmitter from 'events';

const DEFAULT_EVENT = 'event';

class EnrollStore extends EventEmitter {
  constructor() {
    super();
    this.isBasicInfoOpen = true;
  }

  register(callback) {
    this.on(DEFAULT_EVENT, callback)
  }

  unregister(callback) {
    this.removeListener(DEFAULT_EVENT, callback)
  }

  emitEvent() {
    this.emit(DEFAULT_EVENT)
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
