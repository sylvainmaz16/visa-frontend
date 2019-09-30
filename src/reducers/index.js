import { combineReducers } from 'redux'
import adminReducer from './adminReducer'
import mainReducer from './mainReducer'
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
    key: `root`,
    storage: storage,
    blacklist: ['admin']
};
const mainPersistConfig = {
    key: `main`,
    storage: storage,
    whitelist: []
};

const appReducer = asyncReducers => persistReducer(persistConfig, combineReducers({
    admin: adminReducer,
    main: persistReducer(mainPersistConfig, mainReducer),
    ...asyncReducers
}))

function rootReducer(asyncReducers) {
  return appReducer(asyncReducers)
}

export default rootReducer
