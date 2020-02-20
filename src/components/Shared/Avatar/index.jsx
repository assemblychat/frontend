import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import placeholder from './avatar.jpg'

const Avatar = ({ src, alt, className, onClick }) => {
  const Element = onClick ? 'button' : 'div'

  return (
    <Element className={className} onClick={onClick}>
      <img src={src} alt={alt} />
    </Element>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
}

Avatar.defaultProps = {
  src: placeholder,
}

const StyledAvatar = styled(Avatar)`
  position: relative;
  padding: unset;
  background-color: transparent;
  z-index: 1;

  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border-radius: ${({ borderRadius }) => borderRadius};
  border: unset;
  overflow: hidden;

  ${({ onClick }) => (onClick ? `cursor: pointer;` : null)}

  img {
    height: 100%;
    width: 100%;
  }
`

StyledAvatar.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  borderRadius: PropTypes.string,
}

StyledAvatar.defaultProps = {
  height: 48,
  width: 48,
  borderRadius: '50%',
}

export default StyledAvatar
