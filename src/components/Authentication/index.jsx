import React from 'react'
import PropTypes from 'prop-types'
import popupTools from 'popup-tools'
import { connect } from 'react-redux'

import { BACKEND_URL } from 'utils/apis'

import { setUser } from 'ducks/user'

const Authentication = ({ provider, height, width, setUser }) => {
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

  const openPopup = () => {
    const url = getURL()

    if (!url) return null
    return popupTools.popup(url, `${provider} Connect`, {}, (err, user) => {
      if (err) return console.error('Error with provider login', err)
      return setUser(user)
    })
  }

  return <button onClick={openPopup}>Authenticate</button>
}

Authentication.propTypes = {
  provider: PropTypes.oneOf(['twitter', 'facebook', 'google']).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
}

Authentication.defaultProps = {
  height: 600,
  width: 600,
}

export default connect(undefined, { setUser })(Authentication)
