import React from 'react'
import styled from 'styled-components'

// utils
import { sidebarColor, sidebarBorderColor } from 'utils/theme'

// components
import Icon from 'components/Shared/Icon'
import IconButton from 'components/Shared/IconButton'
import UserCommunities from 'components/UserCommunities'

function Sidebar(props) {
  return (
    <Wrapper>
      <Icon name="assembly" />
      <UserCommunities />
      <IconButton name="user-circle" size="xl" />
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
  position: relative;
  background-color: ${sidebarColor};
  border-right: 1px solid ${sidebarBorderColor};
  height: calc(100vh - 2rem);
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: grid;
  grid-auto-flow: row;
  align-content: space-between;
  justify-items: center;
`
