import * as ACTIONS from './actions'
import { defaultTheme } from '../theme'

export const initialState = {
  backgroundColor: null,
  textColor: null,
  regularFont: null,
  boldFont: null
}

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: payload.background,
        textColor: payload.text
      }
    case ACTIONS.SET_BASE_FONT_FAMILY:
      return {
        ...state,
        regularFont: payload.regular,
        boldFont: payload.bold
      }
    default:
      return state
  }
}

const overrideKeyValue = (state, theme, key, value) => {
  if (state[value]) {
    theme[value] = state[value]
    for (let k of Object.keys(defaultTheme)) {
      for (let t of Object.keys(defaultTheme[k])) {
        if (Object.keys(defaultTheme[k][t]).includes(key)) {
          if (!theme.hasOwnProperty(k)) { theme[k] = {} }
          if (!theme[k].hasOwnProperty(t)) { theme[k][t] = {} }
          theme[k][t][key] = state[value]
        }
      }
    }
  }
}

export const getThemeOverrides = (state) => {
  if (!state.backgroundColor && !state.textColor) {
    return defaultTheme
  }

  const theme = { backgroundColor: state.backgroundColor, textColor: state.textColor,
    fonts: { regularFont: state.regularFont, boldFont: state.boldFont } }

  overrideKeyValue(state, theme, 'backgroundColor', 'backgroundColor')
  overrideKeyValue(state, theme, 'color', 'textColor')
  overrideKeyValue(state, theme, 'regular', 'regularFont')
  overrideKeyValue(state, theme, 'bold', 'boldFont')
  overrideKeyValue(state, theme, 'fontFamily', 'regularFont')

  return theme
}