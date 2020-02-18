const SET_USER = Symbol('SET_USER')
const UNSET_USER = Symbol('UNSET_USER')

const initialState = {
  isLoggedIn: false,
  profile: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const { payload } = action

      return {
        ...state,
        isLoggedIn: true,
        profile: { ...state.profile, ...payload },
      }
    }
    case UNSET_USER:
      return initialState
    default:
      return state
  }
}

// ACTIONS
export const setUser = payload => ({ type: SET_USER, payload })
export const unsetUser = () => ({ type: UNSET_USER })
