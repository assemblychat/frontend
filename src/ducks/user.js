import { update } from 'immutability-helper'

const SET_USER = Symbol('SET_USER')
const UNSET_USER = Symbol('UNSET_USER')

const initialState = {
  loggedIn: false,
  token: null,
  profile: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const { payload } = action

      return update(state, {
        loggedIn: { $set: true },
        profile: { $merge: { payload } },
      })
    }
    case UNSET_USER:
      return update(state, {
        loggedIn: { $set: false },
        profile: { $set: {} },
      })
    default:
      return state
  }
}
