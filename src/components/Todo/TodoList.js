'use strict';

import React from 'react';
import TodoItem from './TodoItem';

import TodoStore from '../../store/TodoStore';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items : TodoStore.tasks
		}
	}

	componentWillMount() {
		TodoStore.on('change', () => {
			this.setState(TodoStore.tasks);
		});
	}

	generateItems(list) {
		let result = [];

		list.map((listItem, index) => {
			result.push(<TodoItem index={index} key={index} text={listItem.taskText}/>);
		});

		return result;
	}

	render() {
		return (
			<div>
				<ul>
					{ this.generateItems(this.state.items) }
				</ul>

				{ this.props.children }

			</div>
		);
	}
}

export default TodoList;
