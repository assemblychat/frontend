import axios from 'axios'

export const getUserSession = async () => {
  return axios
    .get('/auth/session')
    .then(user => user)
    .catch(err => new Error('Error getting user session', err))
}

export const logout = async () => {
  return axios
    .get('/auth/logout')
    .then(res => res)
    .catch(err => new Error('Error logging user out', err))
}
