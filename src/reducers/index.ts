import { combineReducers } from 'redux'
import HomeReducer from '../container/Home/reducer';
import HelloReducer from '../container/Hello/reducer';

const RootReducers = combineReducers({
    HomeReducer,
    HelloReducer
});

export default RootReducers;