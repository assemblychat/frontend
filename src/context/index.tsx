import React, { createContext, useReducer, Dispatch } from 'react'
import { ThemeType, ThemeActions, themeReducer } from 'context/theme'

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

type InitialStateType = {
  theme: ThemeType
}

const initialState = {
  theme: {
    mode: 'dark',
  },
}

export const AppContext = createContext<{
  state: InitialStateType
  dispatch: Dispatch<ThemeActions>
}>({ state: initialState, dispatch: () => null })

const mainReducer = (state: InitialStateType, action: ThemeActions) => ({
  theme: themeReducer(state.theme, action),
})

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
