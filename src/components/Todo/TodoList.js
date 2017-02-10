'use strict';

import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items : this.props.items
		}
	}

	generateItems(list) {
		let result = [];

		list.map((listItem, index) => {
			result.push(<TodoItem key={index} text={listItem.taskText}/>);
		});

		return result;
	}

	render() {

		return (
			<div>
				<ul>
					{ this.generateItems(this.state.items) }
				</ul>
			</div>
		);
	}
}

export default TodoList;
