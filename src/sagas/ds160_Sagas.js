import {
 call, put, takeLatest, all, retry,
} from 'redux-saga/effects'
import { types } from 'actions'
import { ApiManager } from '../apis/apimanager'

const { DS160 } = types

function* getRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const res = yield call(ApiManager.GetDS160Application, headers, action.applicationId)
    const { data } = res
    yield put({ type: DS160.DS160_GET_SUCCESS, data, applicationId: action.applicationId })
  } catch (e) {
    const { status } = e.response

    yield put({ type: DS160.DS160_GET_FAILURE, status })
  }
}

function* saveRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const res = action.applicationId ? yield call(ApiManager.UpdateDS160Application, action.applicationId, action.payload) : yield call(ApiManager.SaveDS160Application, headers, action.payload)
    const { data } = res
    yield put({ type: DS160.DS160_SAVE_SUCCESS, data })
    if (action.cb) { action.cb(data) }
    // action.subscribe({
    //   EMAIL: action.user.email,
    //   NAME: action.user.fullname
    // });
  } catch (e) {
    const { status } = e.response

    yield put({ type: DS160.DS160_SAVE_FAILURE, status })
  }
}

const getNonceFromAuthorizeNet = secureData => new Promise((resolve, reject) => {
    Accept.dispatchData(secureData, (opaqueData, error) => {
      resolve(opaqueData)
    })
  })

function* checkoutRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const authData = {
      clientKey: process.env.AUTHORIZENET_CLIENTKEY,
      apiLoginID: process.env.AUTHORIZENET_LOGINID,
    }

    const billingData = action.payload.data

    const cardData = {
      cardNumber: billingData.ccNum,
      month: billingData.ccExp.substring(0, 2),
      year: billingData.ccExp.substring(2, 4),
      cardCode: billingData.cvv,
      zip: billingData.zip,
      fullName: `${billingData.surname} ${billingData.given_name}`,
    }

    const secureData = {
      authData,
      cardData,
    }

    const nonce = yield call(getNonceFromAuthorizeNet, secureData)

    const res = yield call(ApiManager.CheckoutDS160, headers, action.payload)
    const { data } = res
    yield put({ type: DS160.DS160_CHECKOUT_SUCCESS, data })
  } catch (e) {
    const { status } = e.response

    yield put({ type: DS160.DS160_CHECKOUT_FAILURE, status })
  }
}
function* sendLinkEmailRequest(action) {
  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const res = yield call(ApiManager.SendLinkEmail, headers, action.payload)
    const { data } = res
    yield put({ type: DS160.SEND_LINK_EMAIL_SUCCESS, data })
    if (action.cb) { action.cb(data) }
  } catch (e) {
    const { status } = e.response
    if (action.cb) { action.cb({ status: 'failed' }) }

    yield put({ type: DS160.SEND_LINK_EMAIL_FAILURE, status })
  }
}

function* ds160_saga() {
  yield all([takeLatest(DS160.DS160_GET_REQUEST, getRequest)])
  yield all([takeLatest(DS160.DS160_SAVE_REQUEST, saveRequest)])
  yield all([takeLatest(DS160.DS160_CHECKOUT_REQUEST, checkoutRequest)])
  yield all([takeLatest(DS160.SEND_LINK_EMAIL_REQUEST, sendLinkEmailRequest)])
}

export default ds160_saga
