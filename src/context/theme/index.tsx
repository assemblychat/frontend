import { ActionMap } from 'context'

export enum Types {
  ToggleTheme = 'TOGGLE_THEME',
}

export type ThemeType = {
  mode: 'light' | 'dark' | string
}

// actions
type ThemePayload = {
  [Types.ToggleTheme]: string
}

export type ThemeActions = ActionMap<ThemePayload>[keyof ActionMap<
  ThemePayload
>]

// reducer
export function themeReducer(state: ThemeType, action: ThemeActions) {
  switch (action.type) {
    case Types.ToggleTheme:
      return { ...state, mode: action.payload }
    default:
      return state
  }
}

// actions
export const toggleTheme = state => {
  const { mode } = state.theme
  switch (mode) {
    case 'light':
      return { type: Types.ToggleTheme, payload: 'dark' }
    case 'dark':
      return { type: Types.ToggleTheme, payload: 'light' }
  }
}
