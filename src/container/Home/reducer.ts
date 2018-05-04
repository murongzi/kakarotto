import { ADD_TODO } from './action';

const initialState = {
    text: {count: 0}
};

function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                text: action.text
            });
        default:
            return state;

    }
}

export default todoApp;