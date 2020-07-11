import { useContext } from 'react'
import styled from 'styled-components'

// context
import { AppContext } from 'context'
import { Types } from 'context/theme'

// utils
import { getColors } from 'utils/colors'

interface SidebarProps {}

function Sidebar(props: SidebarProps) {
  const { state, dispatch } = useContext(AppContext)

  const handleToggle = () => {
    const { mode } = state.theme
    switch (mode) {
      case 'light':
        return dispatch({ type: Types.ToggleTheme, payload: 'dark' })
      case 'dark':
        return dispatch({ type: Types.ToggleTheme, payload: 'light' })
    }
  }

  const sidebar = getColors(state.theme.mode)?.sidebar
  const wrapperProps = { sidebar }

  return (
    <Wrapper {...wrapperProps}>
      <button onClick={handleToggle}>Toggle Theme</button>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  background-color: ${props => props.sidebar};
  height: 100vh;
`
