const defaultVars = {
  '@primary-color': '#3668A9',
}

const agencyVars = {
  '@primary-color': '#239aac',
}

export const getTheme = agency => {
  const themes = {
    aes: defaultVars,
    uva: agencyVars,
  }
  if (!agency) {
    return defaultVars
  }
  const myTheme = themes[agency.toLowerCase()]
  return myTheme || defaultVars
}
