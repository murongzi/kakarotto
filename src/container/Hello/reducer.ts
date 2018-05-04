import { GET_LIST, SET_LIST } from './action';

const initialState = {
    list: []
};

function todoApp(state = initialState, action) {
    switch (action.type) {
        case GET_LIST:
            return Object.assign({}, state, {
                list: [1, 2, 3, 4, 5]
            });
        case SET_LIST:
            return Object.assign({}, state, {
                list: action.list
            });
        default:
            return state;

    }
}

export default todoApp;