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

export const DS160 = createActionTypes('DS160', [
  'DS160_INIT_STATE',
  'DS160_NEXT_STEP',
  'DS160_PREV_STEP',
  'DS160_UPDATE_VALUES',
  'DS160_SAVE_REQUEST',
  'DS160_SAVE_SUCCESS',
  'DS160_SAVE_FAILURE',
  'DS160_GET_REQUEST',
  'DS160_GET_SUCCESS',
  'DS160_GET_FAILURE',
])

export default {
  REST_API,
  DS160
}
