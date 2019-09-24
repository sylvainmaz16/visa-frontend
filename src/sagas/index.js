import { all, fork } from 'redux-saga/effects'
import ds160_Sagas from './ds160_Sagas'
import admin_Sagas from './admin_Sagas'

export default function* rootSaga() {
  yield all([fork(ds160_Sagas)])
  yield all([fork(admin_Sagas)])
}
