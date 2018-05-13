import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Reducers from '../reducers';

let middleware = [thunkMiddleware];

const perInitState = {};

const store = createStore(Reducers, perInitState, applyMiddleware(...middleware));

export default store;