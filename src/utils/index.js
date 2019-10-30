export const createActionTypes = (base, actions = []) =>
  actions.reduce((acc, type) => {
    acc[type] = `${base}_${type}`

    return acc
  }, {})
export default createActionTypes

export const getInitialValue = (value) => {
  return value != null ? value : undefined
}

export const getFilterString = (filters) => {
  let filterString = ''
  for(let key in filters) {
    
    let fval = filters[key]

    if(!fval) continue;
    if(Array.isArray(fval) && fval.length == 0) continue;

    filterString += `&${key}=`
    if(Array.isArray(fval)) {
      fval.map((value, index) => {
        filterString += value
        if(index < fval.length - 1)
          filterString += ','
      })
    } else {
      filterString += fval
    }
  }
  return filterString
}