import axios from 'axios'
import * as constants from 'utils/constants'

// const apiUrl = "http://localhost:4040/api/"
const apiUrl = constants.apiURL

const handleErrors = err => {
  throw err
}

const responseData = res => res

const requests = {
  get: (url, headers, site) => axios({ url: `${apiUrl[site || 'default']}${url}`, method: 'get', headers: { ...headers, Authorization: `Bearer ${localStorage.getItem('immigration4us_token')}` } })
    .then(responseData)
    .catch(handleErrors),
  post: (url, headers, data, site) => axios({
    url: `${apiUrl[site || 'default']}${url}`, method: 'post', headers: { ...headers, Authorization: `Bearer ${localStorage.getItem('immigration4us_token')}` }, data,
  }).then(responseData)
    .catch(handleErrors),
  //   getAddress: data =>
  //     axios
  //       .get(`${addressApiUrl}${data}?api-key=${addressApiKey}&expand=true`)
  //       .then(responseData)
  //       .catch(handleErrors),
  put: (url, data, site) => axios.put(`${apiUrl[site || 'default']}${url}`, data, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('immigration4us_token')}` } })
    .then(responseData)
    .catch(handleErrors),
  patch: (url, data, site) => axios.patch(`${apiUrl[site || 'default']}${url}`, data)
    .then(responseData)
    .catch(handleErrors),
  del: (url, site) => axios.delete(`${apiUrl[site || 'default']}${url}`)
    .then(responseData)
    .catch(handleErrors),
}

export const ApiManager = {
  SaveDS160Application: (headers, data, site = 'default') => requests.post('ds-160', headers, data, site),
  UpdateDS160Application: (applicationId, data, site = 'default') => requests.put(`ds-160/${applicationId}`, data, site),
  GetDS160Application: (headers, applicationId, site = 'default') => requests.get(`ds-160/${applicationId}`, headers, site),
  DeleteDS160Application: (applicationId, site = 'default') => requests.del(`ds-160/${applicationId}`, site),
  CheckoutDS160: (headers, data, site = 'default') => requests.post(`ds-160/checkout/${data.applicationId}`, headers, data, site),
  GetCustomersList: (headers, options, site = 'default') => requests.get(`ds-160/smlist?limit=${options.limit}&skip=${options.skip}${options.search ? `&search=${options.search}` : ''}${options.filters}`, headers, site),
  GetMailTemplatesList: (headers, options, site = 'default') => requests.get(`mail?limit=${options.limit}&skip=${options.skip}`, headers, site),
  CreateMailTemplate: (headers, data, site = 'default') => requests.post('mail', headers, data, site),
  DeleteMailTemplate: (country, site = 'default') => requests.del(`mail/${country}`, site),
  UpdateMailTemplate: (mail, site = 'default') => requests.put(`mail/${mail.country}`, mail, site),
  AuthLogin: (headers, data, site = 'default') => requests.post('users/authenticate', headers, data, site),
  // AuthLogout: (headers, data, site = 'default') => requests.post(`users/logout`, headers, data, site),
  UserRegister: (headers, data, site = 'default') => requests.post('users/register', headers, data, site),
  GetUsersList: (headers, options, site = 'default') => requests.get(`users/?limit=${options.limit}&skip=${options.skip}${options.search ? `&search=${options.search}` : ''}${options.filters}`, headers, site),
  DeleteUser: (_id, site = 'default') => requests.del(`users/${_id}`, site),
  ApproveUser: (_id, approved, site = 'default') => (approved ? requests.put(`users/approve/${_id}`, site) : requests.put(`users/suspend/${_id}`, site)),
  ResendEmail: (headers, applicationId, site = 'default') => requests.get(`ds-160/sendEmail/${applicationId}`, headers, site),
  Automate: (headers, applicationId, site = 'default') => requests.get(`ds-160/automate/${applicationId}`, headers, site),
  SendLinkEmail: (headers, data, site = 'default') => requests.post(`ds-160/sendEmail/sendLink/${data.applicationId}`, headers, data, site),
  GetKdmidStatus: (headers, applicationId, site = 'default') => requests.get(`ds-160/kdmid-status/${applicationId}`, headers, site),
  GetETAStatus: (headers, applicationId, site = 'default') => requests.get(`ds-160/eta-status/${applicationId}`, headers, site),
}

export default ApiManager
