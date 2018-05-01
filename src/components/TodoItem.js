import React from 'react';
import TodoStore from '../../stores/TodoStore';

export default class Todo extends React.Component {
    constructor(props) {super(props);}

    toggleDone(e) {
        e.preventDefault();
        TodoStore.toggleDone(this.props.todo.id);

        TodoStore.emitChange();
    }

    deleteTodo(e) {
        e.preventDefault();
        TodoStore.deleteTodo(this.props.todo.id);
        TodoStore.emitChange();
    }

    render() {
        const todo = this.props.todo;

        return (
            <li key={todo.id}>
                <span className={`todo-text ${todo.done ? 'todo-done' : ''}`} onClick={this.toggleDone.bind(this)}>{todo.name}</span>
                <button className="delete" onClick={this.deleteTodo.bind(this)}>X</button>
            </li>
        );
    }
}
