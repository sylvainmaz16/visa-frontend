import { call, put, takeLatest, all } from "redux-saga/effects";
import { types } from "../actions";
import { ApiManager } from "../apis/apimanager";
const { DS160 } = types;

function* getRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };

  console.log(action);

  try {
    const res = yield call(ApiManager.GetDS160Application, headers, action.applicationId);
    const data = res.data;
    yield put({ type: DS160.DS160_GET_SUCCESS, data, applicationId: action.applicationId });
    console.log('in ds160_saga: ', data);
  } catch (e) {
    console.log(e);
    const status = e.response.status;

    yield put({ type: DS160.DS160_GET_FAILURE, status });
  }
}

function* saveRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };

  console.log(action);

  try {
    const res = action.applicationId ? yield call(ApiManager.UpdateDS160Application, action.applicationId, action.payload) : yield call(ApiManager.SaveDS160Application, headers, action.payload);
    const data = res.data;
    yield put({ type: DS160.DS160_SAVE_SUCCESS, data });
    console.log('in ds160_saga: ', data);
    // action.subscribe({
    //   EMAIL: action.user.email,
    //   NAME: action.user.fullname
    // });
  } catch (e) {
    console.log(e);
    const status = e.response.status;

    yield put({ type: DS160.DS160_SAVE_FAILURE, status });
  }
}

function* ds160_saga() {
  yield all([takeLatest(DS160.DS160_GET_REQUEST, getRequest)]);
  yield all([takeLatest(DS160.DS160_SAVE_REQUEST, saveRequest)]);
}

export default ds160_saga;
