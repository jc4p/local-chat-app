export const SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR'
export const SET_BASE_FONT_FAMILY = 'SET_BASE_FONT_FAMILY'

export const setBackgroundColor = (newColors) => {
  return {
    type: SET_BACKGROUND_COLOR,
    payload: newColors
  }
}

export const setBaseFontFamily = (newFontFamily) => {
  return {
    type: SET_BASE_FONT_FAMILY,
    payload: newFontFamily
  }
}