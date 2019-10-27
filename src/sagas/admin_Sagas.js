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
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.GET_CUSTOMER_LIST_FAILURE, status });
  }
}

function* getMailTemplatesRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };

  try {
    const res = yield call(ApiManager.GetMailTemplatesList, headers, action.options);
    const data = res.data;
    yield put({ type: ADMIN.GET_MAIL_TEMPATES_LIST_SUCCESS, data });
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.GET_MAIL_TEMPATES_LIST_FAILURE, status });
  }
}

function* createMailTemplateRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };

  try {
    const res = yield call(ApiManager.CreateMailTemplate, headers, action.data);
    const data = res.data;
    yield put({ type: ADMIN.CREATE_MAIL_TEMPLATE_SUCCESS, data });
    yield put({ type: ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST, options: action.options })
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.CREATE_MAIL_TEMPLATE_FAILURE, status });
  }
}

function* deleteMailTemplateRequest(action) {
  try {
    const res = yield call(ApiManager.DeleteMailTemplate, action.country);
    const data = res.data;
    yield put({ type: ADMIN.DELETE_MAIL_TEMPLATE_SUCCESS, data });
    yield put({ type: ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST, options: action.options })
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.DELETE_MAIL_TEMPLATE_FAILURE, status });
  }
}

function* updateMailTemplateRequest(action) {
  try {
    const res = yield call(ApiManager.UpdateMailTemplate, action.mail);
    const data = res.data;
    yield put({ type: ADMIN.UPDATE_MAIL_TEMPLATE_SUCCESS, data });
    yield put({ type: ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST, options: action.options })
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.UPDATE_MAIL_TEMPLATE_FAILURE, status });
  }
}

function* loginRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };
  try {
    const res = yield call(ApiManager.AuthLogin, headers, action.data);
    const data = res.data;
    yield put({ type: ADMIN.LOGIN_SUCCESS, data });
    action.cb( { error: null, token: data.token } )
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.LOGIN_FAILURE, status });
    action.cb( { error: status })
  }
}

function* resendEmailRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };
  try {
    const res = yield call(ApiManager.ResendEmail, headers, action._id);
    const data = res.data;
    yield put({ type: ADMIN.RESEND_EMAIL_SUCCESS, data });
    action.cb( { error: null, data: data } )
  } catch (e) {
    yield put({ type: ADMIN.RESEND_EMAIL_FAILURE });
    action.cb( { error: 'error' })
  }
}

function* admin_saga() {
  yield all([takeLatest(ADMIN.GET_CUSTOMER_LIST_REQUEST, getRequest)]);
  yield all([takeLatest(ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST, getMailTemplatesRequest)]);
  yield all([takeLatest(ADMIN.CREATE_MAIL_TEMPLATE_REQUEST, createMailTemplateRequest)]);
  yield all([takeLatest(ADMIN.DELETE_MAIL_TEMPLATE_REQUEST, deleteMailTemplateRequest)]);
  yield all([takeLatest(ADMIN.UPDATE_MAIL_TEMPLATE_REQUEST, updateMailTemplateRequest)]);
  yield all([takeLatest(ADMIN.LOGIN_REQUEST, loginRequest)]);
  yield all([takeLatest(ADMIN.RESEND_EMAIL_REQUEST, resendEmailRequest)]);
}

export default admin_saga;
