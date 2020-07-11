import { useContext } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

// context
import { AppContext } from 'context'

// utils
import { getColors } from 'utils/colors'

// components
import Sidebar from 'components/Sidebar'

type AppLayoutProps = {
  children: React.ReactNode
}

function AppLayout(props: AppLayoutProps) {
  const { children } = props
  const { state, dispatch } = useContext(AppContext)

  const background = getColors(state.theme.mode)?.background
  const globalStyleProps = { background }

  return (
    <Wrapper>
      <Sidebar />
      <GlobalStyle {...globalStyleProps} />
      {children}
    </Wrapper>
  )
}

export default AppLayout

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'sidebar content';
  grid-auto-columns: 4rem 1fr;
  gap: 16px;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.background};
  }
`
