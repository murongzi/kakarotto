
export const ADD_TODO = 'ADD_TODO';
export const GET_LIST = 'GET_LIST';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

export const getList = () => {
    return dispatch => fetch('/api/').then(res => res.json())
        .then(res => {
            dispatch(setList(res))
        })
}

export const setList = (data, type = 'GET_LIST') => {
    return {
        type,
        data:data
    }
}