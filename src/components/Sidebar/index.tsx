import { useContext } from 'react'
import styled from 'styled-components'

// utils
import { sidebarColor, sidebarBorderColor } from 'utils/theme'

// context
import { AppContext } from 'context'

// components
import Icon from 'components/Shared/Icon'

interface SidebarProps {}

function Sidebar(props: SidebarProps) {
  const { state, dispatch } = useContext(AppContext)

  return (
    <Wrapper>
      <Icon name="assembly" />
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  background-color: ${sidebarColor};
  border-right: 1px solid ${sidebarBorderColor};
  height: 100vh;
`
