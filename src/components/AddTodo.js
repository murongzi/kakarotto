import React from 'react';
import TodoStore from '../../stores/TodoStore';

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    addTodo = () => {
        const newTodoName = this.refs.todoTitle.value;
        if (newTodoName) {
            TodoStore.addNewTodo({
                name: newTodoName
            });

            TodoStore.emitChange();
            this.refs.todoTitle.value = '';
        }
    }

    render() {
        return (
            <div className="add-todo">
                <input type="text" placeholder="Todo add" ref="todoTitle"/>
                <button className="add-button" onClick={this.addTodo}>Add Todo</button>
            </div>
        );
    }
}