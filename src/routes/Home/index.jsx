import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

// utils
import { getUserSession, logout, providerLogin } from 'utils/auth'

// ducks
import { setUser, unsetUser } from 'ducks/user'

const Home = ({ setUser, unsetUser }) => {
  const user = useSelector(state => state.user)

  useEffect(() => {
    getUserSession()
      .then(res => (res?.data ? setUser(res?.data) : null))
      .catch(err => console.warning(err))
  }, [setUser])

  const handleLogout = () => {
    return logout()
      .then(() => unsetUser())
      .catch(err => console.error(err))
  }

  const handleAuth = () => {
    return providerLogin('google')
      .then(user => setUser(user))
      .catch(err => console.log(err))
  }

  if (user?.isLoggedIn) return <button onClick={handleLogout}>logout</button>
  return (
    <div>
      <button onClick={handleAuth}>click</button>
    </div>
  )
}

export default connect(undefined, { setUser, unsetUser })(Home)
