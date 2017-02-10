'use strict';

import React from 'react';
import TodoItem from './TodoItem';

import Dispatcher from '../../dispatcher';
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
			console.debug('changed and reacted !');
			this.setState(TodoStore.tasks);
		});
	}

	generateItems(list) {
		let result = [];

		console.debug('lista');
		list.map((listItem, index) => {
			result.push(<TodoItem index={index} key={index} text={listItem.taskText}/>);
		});

		return result;
	}

	render() {
		console.debug(this.props);
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
