export const GET_LIST = 'GET_LIST'
export const SET_LIST = 'SET_LIST'

const initState = {
    list: []
};

function getList() {
    return {
        type: GET_LIST
    }
}

function setList(list) {
    return {
        type: SET_LIST,
        list
    }
}

export {
    getList, setList
}