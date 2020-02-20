import axios from 'axios'
import popupTools from 'popup-tools'

import { BACKEND_URL } from 'utils/apis'
import { capitalize } from 'utils/strings'

export const getUserSession = async () => {
  return axios
    .get('/auth/session')
    .then(user => user)
    .catch(err => new Error('Error getting user session', err))
}

export const login = async (email, password) => {
  return axios
    .post('/auth/login', { email, password })
    .then(user => user)
    .catch(err => new Error('Error logging user in', err))
}

export const logout = async () => {
  return axios
    .get('/auth/logout')
    .then(res => res)
    .catch(err => new Error('Error logging user out', err))
}

export const providerLogin = async (provider, opts = {}) => {
  const getURL = () => {
    switch (provider) {
      case 'twitter':
      case 'facebook':
      case 'google':
        return `${BACKEND_URL}/auth/${provider}`
      default:
        return null
    }
  }

  const url = getURL()

  return new Promise((resolve, reject) => {
    popupTools.popup(
      url,
      `${capitalize(provider)} Connect`,
      opts,
      (err, user) => {
        if (err) return reject(err)
        return resolve(user)
      }
    )
  })
}
