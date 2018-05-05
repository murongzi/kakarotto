export const GET_LIST = 'GET_LIST'
export const SET_LIST = 'SET_LIST'
import { IHello } from './interface';

const initState = {
    list: []
};

function getList() {
    return {
        type: GET_LIST
    }
}

function setList(list: number[]) {
    return {
        type: SET_LIST,
        list
    }
}

export {
    getList, setList
}