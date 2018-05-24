
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import promiseMiddleware from 'redux-promise-middleware'

import HomeReducers from '../container/Home/reducer'

const Reducers = combineReducers({
    routing: routerReducer,
    HomeReducers
})


export const history = createHistory()
let middleware = applyMiddleware(routerMiddleware(history), promiseMiddleware())


if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose
    middleware = composeEnhancers(middleware)
  }
  
  export default createStore(
    Reducers,
    middleware
  )