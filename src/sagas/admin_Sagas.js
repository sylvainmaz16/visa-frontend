import {
 call, put, takeLatest, all,
} from 'redux-saga/effects'
import { types } from 'actions'
import { ApiManager } from '../apis/apimanager'

const { ADMIN } = types

function* getRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    let users = []
    if (action.isAdmin) {
      const resUsers = yield call(ApiManager.GetUsersList, headers, action.options, action.site)
      users = resUsers.data
    }

    const res = yield call(ApiManager.GetCustomersList, headers, action.options, action.site)
    const { data } = res
    yield put({ type: ADMIN.GET_CUSTOMER_LIST_SUCCESS, data, users })
  } catch (e) {
    const { status } = e.response

    yield put({ type: ADMIN.GET_CUSTOMER_LIST_FAILURE, status })
  }
}

function* getUsersRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const res = yield call(ApiManager.GetUsersList, headers, action.options)
    const { data } = res
    yield put({ type: ADMIN.GET_USERS_LIST_SUCCESS, data })
  } catch (e) {
    const { status } = e.response

    yield put({ type: ADMIN.GET_USERS_LIST_FAILURE, status })
  }
}

function* deleteUserRequest(action) {
  try {
    const res = yield call(ApiManager.DeleteUser, action._id)
    const { data } = res
    yield put({ type: ADMIN.DELETE_USER_SUCCESS, data })
    yield put({ type: ADMIN.GET_USERS_LIST_REQUEST, options: action.options })
  } catch (e) {
    const { status } = e.response

    yield put({ type: ADMIN.DELETE_USER_FAILURE, status })
  }
}

function* approveUserRequest(action) {
  try {
    const res = yield call(ApiManager.ApproveUser, action._id, action.approved)
    const { data } = res
    yield put({ type: ADMIN.APPROVE_USER_SUCCESS, data })
    yield put({ type: ADMIN.GET_USERS_LIST_REQUEST, options: action.options })
  } catch (e) {
    const { status } = e.response

    yield put({ type: ADMIN.APPROVE_USER_FAILURE, status })
  }
}

function* getMailTemplatesRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const res = yield call(ApiManager.GetMailTemplatesList, headers, action.options)
    const { data } = res
    yield put({ type: ADMIN.GET_MAIL_TEMPATES_LIST_SUCCESS, data })
  } catch (e) {
    const { status } = e.response

    yield put({ type: ADMIN.GET_MAIL_TEMPATES_LIST_FAILURE, status })
  }
}

function* createMailTemplateRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const res = yield call(ApiManager.CreateMailTemplate, headers, action.data)
    const { data } = res
    yield put({ type: ADMIN.CREATE_MAIL_TEMPLATE_SUCCESS, data })
    yield put({ type: ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST, options: action.options })
  } catch (e) {
    const { status } = e.response

    yield put({ type: ADMIN.CREATE_MAIL_TEMPLATE_FAILURE, status })
  }
}

function* deleteMailTemplateRequest(action) {
  try {
    const res = yield call(ApiManager.DeleteMailTemplate, action.country)
    const { data } = res
    yield put({ type: ADMIN.DELETE_MAIL_TEMPLATE_SUCCESS, data })
    yield put({ type: ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST, options: action.options })
  } catch (e) {
    const { status } = e.response

    yield put({ type: ADMIN.DELETE_MAIL_TEMPLATE_FAILURE, status })
  }
}

function* updateMailTemplateRequest(action) {
  try {
    const res = yield call(ApiManager.UpdateMailTemplate, action.mail)
    const { data } = res
    yield put({ type: ADMIN.UPDATE_MAIL_TEMPLATE_SUCCESS, data })
    yield put({ type: ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST, options: action.options })
  } catch (e) {
    const { status } = e.response

    yield put({ type: ADMIN.UPDATE_MAIL_TEMPLATE_FAILURE, status })
  }
}

function* loginRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }
  try {
    const res = yield call(ApiManager.AuthLogin, headers, action.data)
    const { data } = res
    yield put({ type: ADMIN.LOGIN_SUCCESS, data })
    action.cb({ error: null, token: data.token, user: data })
  } catch (e) {
    const { status } = e.response

    yield put({ type: ADMIN.LOGIN_FAILURE, status })
    action.cb({ error: e.response.data.message })
  }
}

function* logoutRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }
  try {
    // const res = yield call(ApiManager.AuthLogout, headers, action.data);
    // const data = res.data;
    yield put({ type: ADMIN.LOGOUT_SUCCESS, data })
    // action.cb( { error: null } )
  } catch (e) {
    // const status = e.response.status;

    // yield put({ type: ADMIN.LOGOUT_FAILURE, status });
    // action.cb( { error: status })
  }
}

function* signupRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }
  try {
    const res = yield call(ApiManager.UserRegister, headers, action.data)
    const { data } = res
    yield put({ type: ADMIN.SIGNUP_SUCCESS, data })
    action.cb({ error: null, token: data.token })
  } catch (e) {
    const { status } = e.response

    yield put({ type: ADMIN.SIGNUP_FAILURE, status })
    action.cb({ error: status })
  }
}

function* resendEmailRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }
  try {
    const res = yield call(ApiManager.ResendEmail, headers, action._id)
    const { data } = res
    yield put({ type: ADMIN.RESEND_EMAIL_SUCCESS, data })
    action.cb({ error: null, data })
  } catch (e) {
    yield put({ type: ADMIN.RESEND_EMAIL_FAILURE })
    action.cb({ error: 'error' })
  }
}

function* automateRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }
  try {
    const res = yield call(ApiManager.Automate, headers, action._id, action.site)
    const { data } = res
    yield put({ type: ADMIN.AUTOMATE_SUCCESS, data })
    action.cb({ error: null, data })
  } catch (e) {
    yield put({ type: ADMIN.AUTOMATE_FAILURE })
    action.cb({ error: 'error' })
  }
}

function* getETAStatusRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }
  try {
    const res = yield call(ApiManager.GetETAStatus, headers, action._id, action.site)
    const { data } = res
    yield put({ type: ADMIN.GET_ETA_STATUS_SUCCESS, data })
    action.cb({ error: null, data })
  } catch (e) {
    yield put({ type: ADMIN.GET_ETA_STATUS_FAILURE })
    action.cb({ error: 'error' })
  }
}

function* getKdmidStatusRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }
  try {
    const res = yield call(ApiManager.GetKdmidStatus, headers, action._id, action.site)
    const { data } = res
    yield put({ type: ADMIN.GET_KDMID_STATUS_SUCCESS, data })
    action.cb({ error: null, data })
  } catch (e) {
    yield put({ type: ADMIN.GET_KDMID_STATUS_FAILURE })
    action.cb({ error: 'error' })
  }
}

function* deleteApplicationRequest(action) {
  try {
    const res = yield call(ApiManager.DeleteDS160Application, action._id, action.data)
    const { data } = res    
    action.cb({ success: true, data })
    yield put({ type: ADMIN.DS160_DELETE_SUCCESS, data })
  } catch (e) {
    const { status } = e.response
    action.cb({ success: false })
    yield put({ type: ADMIN.DS160_DELETE_FAILURE, status })
  }
}

function* deleteCaEtaApplicationRequest(action) {
  try {
    const res = yield call(ApiManager.DeleteCaEtaApplication, action._id)    
    const { data } = res    
    action.cb({ success: true, data })
    yield put({ type: ADMIN.CAETA_DELETE_SUCCESS, data })
  } catch (e) {
    const { status } = e.response
    action.cb({ success: false })
    yield put({ type: ADMIN.CAETA_DELETE_FAILURE, status })
  }
}

function* admin_saga() {
  yield all([takeLatest(ADMIN.GET_CUSTOMER_LIST_REQUEST, getRequest)])
  yield all([takeLatest(ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST, getMailTemplatesRequest)])

  yield all([takeLatest(ADMIN.CREATE_MAIL_TEMPLATE_REQUEST, createMailTemplateRequest)])
  yield all([takeLatest(ADMIN.DELETE_MAIL_TEMPLATE_REQUEST, deleteMailTemplateRequest)])
  yield all([takeLatest(ADMIN.UPDATE_MAIL_TEMPLATE_REQUEST, updateMailTemplateRequest)])

  yield all([takeLatest(ADMIN.LOGIN_REQUEST, loginRequest)])
  yield all([takeLatest(ADMIN.LOGOUT_REQUEST, logoutRequest)])
  yield all([takeLatest(ADMIN.SIGNUP_REQUEST, signupRequest)])

  yield all([takeLatest(ADMIN.GET_USERS_LIST_REQUEST, getUsersRequest)])
  yield all([takeLatest(ADMIN.DELETE_USER_REQUEST, deleteUserRequest)])
  yield all([takeLatest(ADMIN.APPROVE_USER_REQUEST, approveUserRequest)])

  yield all([takeLatest(ADMIN.RESEND_EMAIL_REQUEST, resendEmailRequest)])
  yield all([takeLatest(ADMIN.AUTOMATE_REQUEST, automateRequest)])
  yield all([takeLatest(ADMIN.GET_KDMID_STATUS_REQUEST, getKdmidStatusRequest)])
  yield all([takeLatest(ADMIN.GET_ETA_STATUS_REQUEST, getETAStatusRequest)])
  yield all([takeLatest(ADMIN.DS160_DELETE_REQUEST, deleteApplicationRequest)])
  yield all([takeLatest(ADMIN.CAETA_DELETE_REQUEST, deleteCaEtaApplicationRequest)])
}

export default admin_saga
