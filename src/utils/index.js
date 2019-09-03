export const createActionTypes = (base, actions = []) =>
  actions.reduce((acc, type) => {
    acc[type] = `${base}_${type}`

    return acc
  }, {})
export default createActionTypes

export const getInitialValue = (value) => {
  return value != null ? value : undefined
}