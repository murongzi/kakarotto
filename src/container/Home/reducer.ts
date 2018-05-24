import { handleActions } from 'redux-actions'
import { HOME } from './action'

const initState = {
  test: {}
}

export default handleActions({
  [HOME.TEST]: (state, action) => {
    return Object.assign({}, state, { test: action.payload })
  },
  [`${HOME.LIST}_FULFILLED`]: (state, action) => {
    return Object.assign({}, state, { list: action.payload })
  }
}, initState)
