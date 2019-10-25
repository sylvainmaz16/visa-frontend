import { call, put, takeLatest, all, retry } from "redux-saga/effects";
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
    if(action.cb)
      action.cb(data)
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

let getNonceFromAuthorizeNet = (secureData) => {
  return new Promise((resolve, reject) => {
    Accept.dispatchData(secureData, function(opaqueData, error) {
      console.log(opaqueData, error)
      resolve(opaqueData)
    })
  })
}

function* checkoutRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };

  try {

    let authData = {
      clientKey: process.env.AUTHORIZENET_CLIENTKEY,
      apiLoginID: process.env.AUTHORIZENET_LOGINID
    }

    console.log(action.payload)

    const billingData = action.payload.data

    let cardData = {
      cardNumber: billingData.ccNum,
      month: billingData.ccExp.substring(0, 2),
      year: billingData.ccExp.substring(2, 4),
      cardCode: billingData.cvv,
      zip: billingData.zip,
      fullName: billingData.surname + ' ' + billingData.given_name
    }

    let secureData = {
      authData: authData,
      cardData: cardData
    }

    const nonce = yield call(getNonceFromAuthorizeNet, secureData)

    console.log(nonce)

    const res = yield call(ApiManager.CheckoutDS160, headers, action.payload);
    const data = res.data;
    yield put({ type: DS160.DS160_CHECKOUT_SUCCESS, data });
    console.log('in ds160_saga: ', data);
  } catch (e) {
    console.log(e);
    const status = e.response.status;

    yield put({ type: DS160.DS160_CHECKOUT_FAILURE, status });
  }
}
function* sendLinkEmailRequest(action) {
  let headers = {
    "Content-Type": "application/json"
  };

  console.log(action);

  try {
    const res = yield call(ApiManager.SendLinkEmail, headers, action.payload);
    const data = res.data;
    yield put({ type: DS160.SEND_LINK_EMAIL_SUCCESS, data });
    console.log('in ds160_saga: ', data);
    if(action.cb)
      action.cb(data)
  } catch (e) {
    console.log(e);
    const status = e.response.status;
    if(action.cb)
      action.cb({ status: 'failed' })

    yield put({ type: DS160.SEND_LINK_EMAIL_FAILURE, status });
  }
}

function* ds160_saga() {
  yield all([takeLatest(DS160.DS160_GET_REQUEST, getRequest)]);
  yield all([takeLatest(DS160.DS160_SAVE_REQUEST, saveRequest)]);
  yield all([takeLatest(DS160.DS160_CHECKOUT_REQUEST, checkoutRequest)]);
  yield all([takeLatest(DS160.SEND_LINK_EMAIL_REQUEST, sendLinkEmailRequest)]);
  
}

export default ds160_saga;
