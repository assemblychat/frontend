import React from 'react'
import PropTypes from 'prop-types'

import { BACKEND_URL } from 'utils/apis'

const Authentication = ({ provider, height, width }) => {
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
    const left = window.innerWidth / 2 - width / 2
    const top = window.innerHeight / 2 - height / 2
    const url = getURL()

    return window.open(
      url,
      '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
    )
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

export default Authentication
