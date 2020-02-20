import popupTools from 'popup-tools'

import { BACKEND_URL } from 'utils/apis'

import { setUser } from 'ducks/user'

async function useAuth(provider, opts = {}) {
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

  return popupTools.popup(url, `${provider} Connect`, opts, (err, user) => {
    if (err) return console.error('Error with user authentication', err)
    return user
  })
}

export default useAuth
