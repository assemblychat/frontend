const parseToken = token => {
  try {
    const pieces = token.split('.')
    const body = JSON.parse(atob(pieces[1]))

    const { exp } = body
    const now = new Date().getTime() / 1000

    if (!exp || exp - now >= 12 * 60 * 60) return body
  } catch (err) {
    console.error('Error parsing token', err)
  }

  return null
}

export const getAuthToken = () => {
  if (window.localStorage) {
    const token = window.localStorage.getItem('assemblySession')

    if (token) {
      try {
        if (parseToken(token)) return token
      } catch (err) {
        console.log(err)
      }
    }
  }
}
