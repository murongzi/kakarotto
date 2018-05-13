import { ADD_TODO, GET_LIST } from './action';

const initialState = {
    text: { count: 0 },
    list: []
};

function todoApp(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                text: action.text
            });
        case GET_LIST:
            return Object.assign({}, state, {
                list: action.data
            });
        default:
            return state;

    }
}


export default todoApp;