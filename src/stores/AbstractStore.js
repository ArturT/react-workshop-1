import EventEmitter from 'events';

const DEFAULT_EVENT = 'event';

class AbstractStore extends EventEmitter {
  register(callback) {
    this.on(DEFAULT_EVENT, callback)
  }

  unregister(callback) {
    this.removeListener(DEFAULT_EVENT, callback)
  }

  emitEvent() {
    this.emit(DEFAULT_EVENT)
  }
}

export default AbstractStore;
