import React from 'react';

import TodoList from './Todo/TodoList';
import TodoStore from '../store/TodoStore';
import TodoAction from '../action/TodoAction';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.allTasks = TodoStore.getAllTasks();
	}

	render() {
		return (
			<TodoList>
				<input ref="newTaskInput" type="text"/>
				<button onClick={() => TodoAction.createTask({ text: this.refs.newTaskInput.value })}> + </button>
			</TodoList>
		)
	}
}

export default App;
