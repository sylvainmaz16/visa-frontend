import { ADMIN } from '../actions/types'
import objectAssignDeep from 'object-assign-deep'

const initialState = {
  data: [],
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
    case ADMIN.SHOW_MODAL: {
      console.log(action.modal)
      return {
        ...state,
        [action.modal]: true
      }
    }
    case ADMIN.HIDE_MODAL: {
      return {
        ...state,
        [action.modal]: false
      }
    }
    case ADMIN.GET_CUSTOMER_LIST_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case ADMIN.GET_CUSTOMER_LIST_SUCCESS: {
      console.log('reducer: ', action.data)
      return {
        ...state,
        data: [...action.data],
        loading: false
      };
    }
    case ADMIN.GET_CUSTOMER_LIST_FAILURE: {
      console.log('failed to get')
      return {
        ...state,
        loading: false
      };
    }
    case ADMIN.GET_MAIL_TEMPATES_LIST_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    case ADMIN.GET_MAIL_TEMPATES_LIST_SUCCESS: {
      console.log('reducer: ', action.data)
      return {
        ...state,
        mailTemplates: [...action.data.list],
        mailTotalCount: action.data.total,
        loading: false
      };
    }
    case ADMIN.GET_MAIL_TEMPATES_LIST_FAILURE: {
      console.log('failed to get')
      return {
        ...state,
        loading: false
      };
    }
    case ADMIN.CREATE_MAIL_TEMPLATE_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case ADMIN.CREATE_MAIL_TEMPLATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        visibleAdd: false
      }
    }
    case ADMIN.CREATE_MAIL_TEMPLATE_FAILURE: {
      return {
        ...state,
        loading: false,
        visibleAdd: false
      }
    }
    case ADMIN.DELETE_MAIL_TEMPLATE_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case ADMIN.DELETE_MAIL_TEMPLATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        visibleDel: false
      }
    }
    case ADMIN.DELETE_MAIL_TEMPLATE_FAILURE: {
      return {
        ...state,
        loading: false,
        visibleDel: false
      }
    }
    case ADMIN.UPDATE_MAIL_TEMPLATE_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case ADMIN.UPDATE_MAIL_TEMPLATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        visibleEdit: false
      }
    }
    case ADMIN.UPDATE_MAIL_TEMPLATE_FAILURE: {
      return {
        ...state,
        loading: false,
        visibleEdit: false
      }
    }
    default: {
      return state
    }
  }
}

export default adminReducer