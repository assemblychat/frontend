import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faUser, faUserCircle } from '@fortawesome/pro-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

// build library
library.add(fab, faPlus, faUser, faUserCircle)

// custom svg icons
import { Assembly as AssemblyIcon } from './js'

// utils
import { fontColor } from 'utils/theme'

type IconProps = {
  name?: any
  fill?: string
  height?: number
  width?: number
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'inherit'
}

function Icon(props: IconProps) {
  const { name, className } = props

  switch (name) {
    case 'assembly':
      return <AssemblyIcon className={className} />
    default:
      return <FontAwesomeIcon className={className} icon={name} />
  }
}

const handleFontSize = props => {
  const { size } = props

  switch (size) {
    case 'sm':
      return '0.75rem'
    case 'md':
      return '0.875rem'
    case 'lg':
      return '1rem'
    case 'xl':
      return '1.5rem'
    case 'inherit':
      return size
  }
}

const StyledIcon = styled(Icon)`
  font-size: ${props => handleFontSize(props)};
  color: ${props => props.fill || fontColor};

  &svg {
    fill: ${props => props.fill || fontColor};
  }
`

export default StyledIcon
