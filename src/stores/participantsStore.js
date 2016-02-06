import appDispatcher from '../appDispatcher';
import actionTypes from '../constants/actionTypes';
import EventEmitter from 'events';

const DEFAULT_EVENT = 'event';

class ParticipantsStore extends EventEmitter {
  constructor() {
    super();
    this.students = [];
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
