import { call, put, takeLatest, all } from "redux-saga/effects";
import { types } from "../actions";
import { ApiManager } from "../apis/apimanager";
const { ADMIN } = types;

function* getRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };

  try {
    const res = yield call(ApiManager.GetCustomersList, headers, action.options);
    const data = res.data;
    yield put({ type: ADMIN.GET_CUSTOMER_LIST_SUCCESS, data });
    console.log('in ds160_saga: ', data);
  } catch (e) {
    console.log(e);
    const status = e.response.status;

    yield put({ type: ADMIN.GET_CUSTOMER_LIST_FAILURE, status });
  }
}

function* admin_saga() {
  yield all([takeLatest(ADMIN.GET_CUSTOMER_LIST_REQUEST, getRequest)]);
}

export default admin_saga;
