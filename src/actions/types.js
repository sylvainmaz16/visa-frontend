import { createActionTypes } from '../utils'

export const REST_API = createActionTypes('REST_API', [
  'GET',
  'GET_ONE',
  'SAVE',
  'PUT',
  'PATCH',
  'DELETE',
  'SUCCESS',
  'FAILURE',
])
export const API_GITHUB = createActionTypes('API_GITHUB', [
  'PROFILE_GET_REQUEST',
  'PROFILE_GET_SUCCESS',
  'PROFILE_GET_FAILURE',
])
export const DS160 = createActionTypes('DS160', [
  'DS160_NEXT_STEP',
  'DS160_PREV_STEP',
])

export default {
  REST_API,
  API_GITHUB,
  DS160
}
