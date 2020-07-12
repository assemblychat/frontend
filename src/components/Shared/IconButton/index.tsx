import styled from 'styled-components'

// components
import Icon from 'components/shared/Icon'

// utils
import { fontColor } from 'utils/theme'

type IconButtonProps = {
  name?: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'inherit'
}

function IconButton(props: IconButtonProps) {
  const { className, name, size } = props

  return (
    <button className={className}>
      <Icon name={name} size={size} />
    </button>
  )
}

IconButton.defaultProps = {
  size: 'inherit',
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
