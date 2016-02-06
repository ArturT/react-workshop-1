import appDispatcher from '../appDispatcher';
import actionTypes from '../constants/actionTypes';
import AbstractStore from './AbstractStore';

class ParticipantsStore extends AbstractStore {
  constructor() {
    super();
    this.students = [];
  }

  setStudents(students) {
    this.students = students;
    this.emitEvent();
  }

  getStudents() {
    return this.students;
  }
}

let participantsStore = new ParticipantsStore();

appDispatcher.register(function(payload) {
  if (payload.actionType == actionTypes.LOAD_STUDENTS) {
    participantsStore.setStudents(payload.students);
  }
});

export default participantsStore;
