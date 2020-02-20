import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

// utils
import { getUserSession, logout, providerLogin } from 'utils/auth'

// ducks
import { setUser, unsetUser } from 'ducks/user'

// components
import { Avatar } from 'components/Shared'

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

  const handleAuth = provider => {
    return providerLogin(provider)
      .then(user => setUser(user))
      .catch(err => console.error(err))
  }

  if (user?.isLoggedIn) {
    const { profile } = user
    return (
      <div>
        <Avatar
          src={profile.photo}
          alt={profile?.firstName}
          onClick={handleLogout}
          height={48}
          width={48}
        />
        <button onClick={handleLogout}>logout</button>
      </div>
    )
  }
  return (
    <div>
      <button onClick={() => handleAuth('twitter')}>twitter</button>
      <button onClick={() => handleAuth('facebook')}>facebook</button>
      <button onClick={() => handleAuth('google')}>google</button>
    </div>
  )
}

export default connect(undefined, { setUser, unsetUser })(Home)
