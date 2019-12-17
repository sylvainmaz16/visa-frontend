//import AuthStore from './stores/AuthStore'
import axios from "axios";
import * as constants from 'utils/constants'

//const apiUrl = "http://localhost:4040/api/";
const apiUrl = constants.apiURL;

const handleErrors = err => {
  throw err;
};

const responseData = res => res;

const requests = {
  get: (url, headers) =>
    axios({ url: `${apiUrl}${url}`, method: "get", headers: {...headers, 'Authorization': 'Bearer ' + localStorage.getItem('immigration4us_token')} })
      .then(responseData)
      .catch(handleErrors),
  post: (url, headers, data) => 
    axios({ url: `${apiUrl}${url}`, method: "post", headers: {...headers, 'Authorization': 'Bearer ' + localStorage.getItem('immigration4us_token')}, data })
      .then(responseData)
      .catch(handleErrors),
  //   getAddress: data =>
  //     axios
  //       .get(`${addressApiUrl}${data}?api-key=${addressApiKey}&expand=true`)
  //       .then(responseData)
  //       .catch(handleErrors),
  put: (url, data) =>
    axios
      .put(`${apiUrl}${url}`, data, {headers: {"Content-Type": "application/json", 'Authorization': 'Bearer ' + localStorage.getItem('immigration4us_token')}})
      .then(responseData)
      .catch(handleErrors),
  patch: (url, data) =>
    axios
      .patch(`${apiUrl}${url}`, data)
      .then(responseData)
      .catch(handleErrors),
  del: url =>
    axios
      .delete(`${apiUrl}${url}`)
      .then(responseData)
      .catch(handleErrors)
};

export const ApiManager = {
  SaveDS160Application: (headers, data) => requests.post(`ds-160`, headers, data),
  UpdateDS160Application: (applicationId, data) => requests.put(`ds-160/${applicationId}`, data),
  GetDS160Application: (headers, applicationId) => requests.get(`ds-160/${applicationId}`, headers),
  CheckoutDS160: (headers, data) => requests.post(`ds-160/checkout/${data.applicationId}`, headers, data),
  GetCustomersList: (headers, options) => requests.get(`ds-160/smlist?limit=${options.limit}&skip=${options.skip}${options.search ? `&search=${options.search}` : ""}${options.filters}`, headers),
  GetMailTemplatesList: (headers, options) => requests.get(`mail?limit=${options.limit}&skip=${options.skip}`, headers),
  CreateMailTemplate: (headers, data) => requests.post(`mail`, headers, data),
  DeleteMailTemplate: (country) => requests.del(`mail/${country}`),
  UpdateMailTemplate: (mail) => requests.put(`mail/${mail.country}`, mail),
  AuthLogin: (headers, data) => requests.post(`users/authenticate`, headers, data),
  // AuthLogout: (headers, data) => requests.post(`users/logout`, headers, data),
  UserRegister: (headers, data) => requests.post(`users/register`, headers, data),
  GetUsersList: (headers, options) => requests.get(`users/?limit=${options.limit}&skip=${options.skip}${options.search ? `&search=${options.search}` : ""}${options.filters}`, headers),
  DeleteUser: (_id) => requests.del(`users/${_id}`),
  ApproveUser: (_id, approved) => approved ? requests.put(`users/approve/${_id}`) : requests.put(`users/suspend/${_id}`),
  ResendEmail: (headers, applicationId) => requests.get(`ds-160/sendEmail/${applicationId}`, headers),
  Automate: (headers, applicationId) => requests.get(`ds-160/automate/${applicationId}`, headers),
  SendLinkEmail: (headers, data) => requests.post(`ds-160/sendEmail/sendLink/${data.applicationId}`, headers, data),
};
