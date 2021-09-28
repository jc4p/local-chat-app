import * as ACTIONS from './actions'
import { defaultTheme } from '../theme'

export const initialState = {
  backgroundColor: null,
  textColor: null
}

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: payload.background,
        textColor: payload.text
      }
    default:
      return state
  }
}

export const getThemeOverrides = (state) => {
  if (!state.backgroundColor && !state.textColor) {
    return defaultTheme
  }

  const theme = {}

  if (state.backgroundColor) {
    theme.backgroundColor = state.backgroundColor
    for (let k of Object.keys(defaultTheme)) {
      for (let t of Object.keys(defaultTheme[k])) {
        if (Object.keys(defaultTheme[k][t]).includes('backgroundColor')) {
          if (!theme.hasOwnProperty(k)) { theme[k] = {} }
          if (!theme[k].hasOwnProperty(t)) { theme[k][t] = {} }
          theme[k][t].backgroundColor = state.backgroundColor
        }
      }
    }
  }

  if (state.textColor) {
    theme.textColor = state.textColor
    for (let k of Object.keys(defaultTheme)) {
      for (let t of Object.keys(defaultTheme[k])) {
        if (Object.keys(defaultTheme[k][t]).includes('color')) {
          if (!theme.hasOwnProperty(k)) { theme[k] = {} }
          if (!theme[k].hasOwnProperty(t)) { theme[k][t] = {} }
          theme[k][t].color = state.textColor
        }
      }
    }
  }

  return theme
}