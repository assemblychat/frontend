import React from 'react'
import styled from 'styled-components'
import Icon, { IconSize, IconName } from '@assemblychat/icons'

// utils
import { fontColor } from 'utils/theme'

type IconButtonProps = {
  icon?: IconName
  className?: string
  size?: IconSize
}

function IconButton({ className, icon, size }: IconButtonProps) {
  return (
    <button className={className}>
      <Icon icon={icon} size={size} />
    </button>
  )
}

const StyledIconButton = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  height: 2rem;
  width: 2rem;
  font-size: 1rem;

  background-color: ${fontColor}00;
  transition: background-color 150ms ease-in-out;
  color: ${fontColor};

  &:hover {
    background-color: ${fontColor}15;
  }
`

export default StyledIconButton
