export const SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR'

export const setBackgroundColor = (newColors) => {
  return {
    type: SET_BACKGROUND_COLOR,
    payload: newColors
  }
} 