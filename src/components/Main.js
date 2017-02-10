import React from 'react';

import TodoList from './Todo/TodoList';

class App extends React.Component {
	render() {
		return (
            <TodoList items={ [ { taskText: 'First things first'} , {taskText: 'it works!' } ] }/>
		)
	}
}

export default App;
