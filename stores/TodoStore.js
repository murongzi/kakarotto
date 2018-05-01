import { EventEmitter } from 'events';

const TodoStore = Object.assign({}, EventEmitter.prototype, {
    items: {
        todos: [
            {
                id: 0, name: 'Todo one', done: false
            },
            {
                id: 1, name: 'Todo two', done: false
            },
            {
                id: 2, name: 'Todo three', done: false
            }
        ]
    },

    nextId: 3,

    getAll() {
        return this.items;
    },

    emitChange() {
        this.emit('change');
    },

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    },

    addNewTodo(todo) {
        const todos = this.items.todos;

        if (!todos || typeof this.items.todos.length !== 'number') {
            this.items.todos = [];
        }

        todo.id = this.nextId++;
        todo.done = !!0;
        this.items.todos.push(todo);
    },

    toggleDone(id) {
        this.items.todos = this.items.todos.map(todo => {
            if (todo.id === id) {
                todo.done = !todo.done;
            }

            return todo;
        });
    },

    deleteTodo(id) {
        this.items.todos = this.items.todos.filter(todo => todo.id !== id);
    }
});

export default TodoStore;