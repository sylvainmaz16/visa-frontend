import { ADMIN } from 'actions/types'
import objectAssignDeep from 'object-assign-deep'

const initialState = {

  data: [],
  users: [],
  totalCount: 0,
  totalUserCnt: 0,
  mailTemplates: [],
  mailTotalCount: 0,
  loading: false,
  visibleAdd: false,
  visibleDel: false,
  visibleEdit: false,
}
function adminReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN.RESET: {
      return initialState
    }
    case ADMIN.RESEND_EMAIL_REQUEST:
      return {
        ...state,
      }
    case ADMIN.RESEND_EMAIL_SUCCESS:
      return {
        ...state,
      }
    case ADMIN.RESEND_EMAIL_FAILURE:
      return {
        ...state,
      }
    case ADMIN.LOGOUT_REQUEST:
      localStorage.removeItem('user')

return {
        ...state,
      }
    case ADMIN.LOGOUT_SUCCESS:
      return {
        ...state,
      }
    case ADMIN.LOGOUT_FAILURE:
      return {
        ...state,
      }
    case ADMIN.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ADMIN.LOGIN_SUCCESS:

      return {
        ...state,
        loading: false,
      }
    case ADMIN.LOGIN_FAILURE:

      return {
        ...state,
        loading: false,
      }
    case ADMIN.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ADMIN.SIGNUP_SUCCESS:

      return {
        ...state,
        loading: false,
      }
    case ADMIN.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
      }
    case ADMIN.SHOW_MODAL: {
      return {
        ...state,
        [action.modal]: true,
      }
    }
    case ADMIN.HIDE_MODAL: {
      return {
        ...state,
        [action.modal]: false,
      }
    }
    case ADMIN.DELETE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADMIN.DELETE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case ADMIN.DELETE_USER_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }
    case ADMIN.APPROVE_USER_REQUEST: { return { ...state, loading: true } }
    case ADMIN.APPROVE_USER_SUCCESS: { return { ...state, loading: false } }
    case ADMIN.APPROVE_USER_FAILURE: { return { ...state, loading: false } }
    case ADMIN.GET_USERS_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADMIN.GET_USERS_LIST_SUCCESS: {
      return {
        ...state,
        users: [...action.data],
        totalUserCnt: action.data.length,
        loading: false,
      }
    }
    case ADMIN.GET_USERS_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }
    case ADMIN.GET_CUSTOMER_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADMIN.GET_CUSTOMER_LIST_SUCCESS: {
      return {
        ...state,
        data: [...action.data.list],
        totalCount: action.data.total,
        users: action.users.length ? [...action.users] : [...state.users],
        totalUserCnt: action.users.length ? action.users.length : state.totalUserCnt,
        loading: false,
      }
    }
    case ADMIN.GET_CUSTOMER_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }
    case ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADMIN.GET_MAIL_TEMPATES_LIST_SUCCESS: {
      return {
        ...state,
        mailTemplates: [...action.data.list],
        mailTotalCount: action.data.total,
        loading: false,
      }
    }
    case ADMIN.GET_MAIL_TEMPATES_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }
    case ADMIN.CREATE_MAIL_TEMPLATE_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADMIN.CREATE_MAIL_TEMPLATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        visibleAdd: false,
      }
    }
    case ADMIN.CREATE_MAIL_TEMPLATE_FAILURE: {
      return {
        ...state,
        loading: false,
        visibleAdd: false,
      }
    }
    case ADMIN.DELETE_MAIL_TEMPLATE_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADMIN.DELETE_MAIL_TEMPLATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        visibleDel: false,
      }
    }
    case ADMIN.DELETE_MAIL_TEMPLATE_FAILURE: {
      return {
        ...state,
        loading: false,
        visibleDel: false,
      }
    }
    case ADMIN.UPDATE_MAIL_TEMPLATE_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADMIN.UPDATE_MAIL_TEMPLATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        visibleEdit: false,
      }
    }
    case ADMIN.UPDATE_MAIL_TEMPLATE_FAILURE: {
      return {
        ...state,
        loading: false,
        visibleEdit: false,
      }
    }
    case ADMIN.DS160_DELETE_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADMIN.DS160_DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case ADMIN.DS160_DELETE_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }
    case ADMIN.CAETA_DELETE_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case ADMIN.CAETA_DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
      }
    }
    case ADMIN.CAETA_DELETE_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}

export default adminReducer
