import { API_GITHUB, DS160 } from '../actions/types'

const initialState = {
  profile: {},
  is_loading: false,

  step_index: 1
}
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case API_GITHUB.PROFILE_GET_REQUEST: {
      return {
        ...state,
        is_loading: true,
      }
    }
    case API_GITHUB.PROFILE_GET_SUCCESS: {
      return Object.assign({}, state, {
        profile: { ...action.data },
        is_loading: false,
      })
    }
    case API_GITHUB.PROFILE_GET_FAILURE: {
      return {
        ...state,
        is_loading: false,
      }
    }
    case DS160.DS160_NEXT_STEP: {
      return {
        ...state,
        step_index: state.step_index + 1
      }
    }
    case DS160.DS160_PREV_STEP: {
      return {
        ...state,
        step_index: state.step_index - 1
      }
    }
    default: {
      return state
    }
  }
}

export default mainReducer
