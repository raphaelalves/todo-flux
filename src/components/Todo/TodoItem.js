'use strict';

import React from 'react';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<li> {this.props.text} </li>
		);
	}
}

export default TodoItem;
