import { combineReducers } from 'redux'
import mainReducer from './mainReducer'
import adminReducer from './adminReducer'

const appReducer = asyncReducers =>
  combineReducers({
    mainData: mainReducer,
    adminData: adminReducer,
    ...asyncReducers,
  })

function rootReducer(asyncReducers) {
  return appReducer(asyncReducers)
}

export default rootReducer
