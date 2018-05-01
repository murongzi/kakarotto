import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class AppMain extends React.Component {
    constructor(props){super(props);}

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <TodoList />
                <AddTodo />
            </div>
        );
    }
}