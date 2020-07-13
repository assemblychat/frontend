import React from 'react'
import styled from 'styled-components'

import { primaryColor, secondaryColor, fontColor } from 'utils/theme'

// components
import Icon from 'components/Shared/Icon'

type ButtonProps = {
  children?: React.ReactChild
  className?: string
  icon?: string
  outlined?: boolean
  color?: 'primary' | 'secondary'
  onClick?: () => null
}

function Button(props: ButtonProps) {
  const { children, className, icon, ...rest } = props

  return (
    <button className={className} {...rest}>
      {icon && <Icon name={icon} />}
      {children}
    </button>
  )
}

const handleColor = props => {
  const { color } = props

  switch (color) {
    case 'primary':
      return primaryColor
    case 'secondary':
      return secondaryColor
    default:
      return primaryColor
  }
}

const handleBackgroundColor = props => {
  return handleColor(props)
}

const handleBorderColor = props => {
  const { outlined } = props

  if (!outlined) return 'none'
  return handleColor(props)
}

const handleFontColor = props => {
  const { outlined } = props

  if (outlined) return fontColor
  return '#FFFFFF'
}

const StyledButton = styled(Button)`
  display: inline-grid;
  grid-auto-flow: column;
  gap: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;

  background-color: ${props => handleBackgroundColor(props)};
  border: ${props => handleBorderColor(props)};
  color: ${props => handleFontColor(props)};
`

export default StyledButton
