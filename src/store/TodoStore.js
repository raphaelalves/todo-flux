import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher';


class TodoStore extends EventEmitter {
	constructor() {
		super();
		this.tasks = [
			{ taskText: 'First things first' },
			{ taskText: 'it works!' }
		]
	}

	_createTask(task) {
		this.tasks.push(task);
	}

	_deleteTask(taskIndex) {
		this.tasks.splice(taskIndex, 1);
	}

	getAllTasks() {
		return this.tasks;
	}

	handler(payload) {
		switch (payload.actionType) {
			case 'NEW_TASK' : {
				this._createTask({ taskText: payload.text });
				this.emit('change');
				break;
			}
			case 'DELETE_TASK' : {
				this._deleteTask(payload.index);
				this.emit('change');
				break;
			}

		}
	}

}

let store = new TodoStore;
Dispatcher.register(store.handler.bind(store));

export default store;
