import { ActionMap } from 'context'

export enum UsersActions {
  fetchUsers = 'FETCH_USERS',
  fetchUser = 'FETCH_USER',
}

export type UsersPayload = {
  [UsersActions.fetchUser]: string
  [UsersActions.fetchUsers]: []
}

export type UsersState = {}

type Actions = ActionMap<UsersPayload>[keyof ActionMap<UsersPayload>]

export function usersReducer(state: UsersState, action: Actions) {
  switch (action.type) {
    default:
      return state
  }
}
