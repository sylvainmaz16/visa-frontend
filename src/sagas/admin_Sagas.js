import { call, put, takeLatest, all } from "redux-saga/effects";
import { types } from "../actions";
import { ApiManager } from "../apis/apimanager";
const { ADMIN } = types;

function* getRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };

  try {
    let users = []
    if(action.isAdmin) {
      const resUsers = yield call(ApiManager.GetUsersList, headers, action.options);
      users = resUsers.data;
    }
    
    const res = yield call(ApiManager.GetCustomersList, headers, action.options);
    const data = res.data;
    yield put({ type: ADMIN.GET_CUSTOMER_LIST_SUCCESS, data, users });
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.GET_CUSTOMER_LIST_FAILURE, status });
  }
}

function* getUsersRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };

  try {
    const res = yield call(ApiManager.GetUsersList, headers, action.options);
    const data = res.data;
    yield put({ type: ADMIN.GET_USERS_LIST_SUCCESS, data });
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.GET_USERS_LIST_FAILURE, status });
  }
}

function* deleteUserRequest(action) {
  try {
    const res = yield call(ApiManager.DeleteUser, action._id);
    const data = res.data;
    yield put({ type: ADMIN.DELETE_USER_SUCCESS, data });
    yield put({ type: ADMIN.GET_USERS_LIST_REQUEST, options: action.options })
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.DELETE_USER_FAILURE, status });
  }
}

function* approveUserRequest(action) {
  try {
    const res = yield call(ApiManager.ApproveUser, action._id, action.approved);
    const data = res.data;
    yield put({ type: ADMIN.APPROVE_USER_SUCCESS, data });
    yield put({ type: ADMIN.GET_USERS_LIST_REQUEST, options: action.options })
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.APPROVE_USER_FAILURE, status });
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
    action.cb( { error: null, token: data.token, user: data } )
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.LOGIN_FAILURE, status });
    action.cb( { error: e.response.data.message })
  }
}

function* logoutRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };
  try {
    // const res = yield call(ApiManager.AuthLogout, headers, action.data);
    // const data = res.data;
    yield put({ type: ADMIN.LOGOUT_SUCCESS, data });
    // action.cb( { error: null } )
  } catch (e) {
    // const status = e.response.status;

    // yield put({ type: ADMIN.LOGOUT_FAILURE, status });
    // action.cb( { error: status })
  }
}

function* signupRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };
  try {
    const res = yield call(ApiManager.UserRegister, headers, action.data);
    const data = res.data;
    yield put({ type: ADMIN.SIGNUP_SUCCESS, data });
    action.cb( { error: null, token: data.token } )
  } catch (e) {
    const status = e.response.status;

    yield put({ type: ADMIN.SIGNUP_FAILURE, status });
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
  yield all([takeLatest(ADMIN.LOGOUT_REQUEST, logoutRequest)]);
  yield all([takeLatest(ADMIN.SIGNUP_REQUEST, signupRequest)]);

  yield all([takeLatest(ADMIN.GET_USERS_LIST_REQUEST, getUsersRequest)]);
  yield all([takeLatest(ADMIN.DELETE_USER_REQUEST, deleteUserRequest)]);
  yield all([takeLatest(ADMIN.APPROVE_USER_REQUEST, approveUserRequest)]);

  yield all([takeLatest(ADMIN.RESEND_EMAIL_REQUEST, resendEmailRequest)]);
}

export default admin_saga;
