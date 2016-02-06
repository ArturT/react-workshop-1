import appDispatcher from '../appDispatcher';
import actionTypes from '../constants/actionTypes';
import AbstractStore from './AbstractStore';

class PreferencesStore extends AbstractStore {
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

let preferencesStore = new PreferencesStore();

appDispatcher.register(function(payload) {
  if (payload.actionType == actionTypes.TOGGLE_PREFERENCES) {
    preferencesStore.toggleBasicInfo();
  }
});

export default preferencesStore;
