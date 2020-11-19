const defaultVars = {
  '@primary-color': '#3668A9',
}

const uvaVars = {
  '@primary-color': '#239aac',
}

const aesVars = {
  '@primary-color': '#1B3454',
}

export const getTheme = agency => {
  const themes = {
    aes: aesVars,
    uva: uvaVars,
  }
  if (!agency) {
    return defaultVars
  }
  const myTheme = themes[agency.toLowerCase()]
  return myTheme || defaultVars
}
