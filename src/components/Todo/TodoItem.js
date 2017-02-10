'use strict';

import React from 'react';
import TodoAction from '../../action/TodoAction'

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li>
				{this.props.text}
				<button onClick={() => TodoAction.deleteTask(this)}> - </button>
			</li>
		);
	}
}

export default TodoItem;
