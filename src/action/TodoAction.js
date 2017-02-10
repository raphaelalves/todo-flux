import Dispatcher from '../dispatcher';

class TodoAction {
	constructor() {}

	createTask(task) {
		Dispatcher.dispatch({
			actionType : 'NEW_TASK',
			text : task.text
		});
	}

	deleteTask(task) {
		Dispatcher.dispatch({
			actionType : 'DELETE_TASK',
			index : task.index
		});
	}

}

export default new TodoAction;
