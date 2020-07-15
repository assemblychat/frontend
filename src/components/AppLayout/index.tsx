import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

// utils
import { backgroundColor, fontColor } from 'utils/theme'

// components
import Sidebar from 'components/Sidebar'

type AppLayoutProps = {
  children: React.ReactNode
}

function AppLayout(props: AppLayoutProps) {
  const { children } = props

  return (
    <ThemeProvider theme={{ mode: 'dark' }}>
      <Wrapper>
        <Sidebar />
        <GlobalStyle />
        {children}
      </Wrapper>
    </ThemeProvider>
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
  html, body {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
  }
  body {
    background-color: ${backgroundColor};
    color: ${fontColor};
  }
`
