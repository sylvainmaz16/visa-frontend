import { ADMIN } from '../actions/types'
import objectAssignDeep from 'object-assign-deep'

const initialState = {
  data: [],
  pagination: {
    skip: 0,
    limit: 10
  },
  loading: false,
}
function adminReducer(state = initialState, action) {
  switch (action.type) {
    case ADMIN.SET_PAGINATION: {
      return {
        ...state,
        pagination: {
          ...action.pagination
        }
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
    default: {
      return state
    }
  }
}

export default adminReducer
