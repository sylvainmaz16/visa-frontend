import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import adminReducer from './adminReducer'
import mainReducer from './mainReducer'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['admin'],
}
const mainPersistConfig = {
    key: 'main',
    storage,
    whitelist: [],
}

const appReducer = asyncReducers => persistReducer(persistConfig, combineReducers({
    admin: adminReducer,
    main: persistReducer(mainPersistConfig, mainReducer),
    ...asyncReducers,
}))

function rootReducer(asyncReducers) {
  return appReducer(asyncReducers)
}

export default rootReducer
