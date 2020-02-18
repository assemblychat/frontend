import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

// utils
import { getUserSession, logout } from 'utils/auth'

// ducks
import { setUser, unsetUser } from 'ducks/user'

// components
import Authentication from 'components/Authentication'

const Home = ({ setUser, unsetUser }) => {
  const user = useSelector(state => state.user)

  useEffect(() => {
    getUserSession()
      .then(res => (res?.data ? setUser(res?.data) : null))
      .catch(err => console.warning(err))
  }, [])

  const handleLogout = () => {
    return logout()
      .then(() => unsetUser())
      .catch(err => console.error(err))
  }

  if (user?.isLoggedIn) return <button onClick={handleLogout}>logout</button>
  return (
    <div>
      <button onClick={getUserSession}>click</button>
      <Authentication provider="twitter" />
    </div>
  )
}

export default connect(undefined, { setUser, unsetUser })(Home)
