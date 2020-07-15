import React from 'react'
import styled from 'styled-components'

type Props = {
  className: string
}

function OrganizationIcon(props: Props) {
  const { className } = props
  return <div className={className} />
}

const StyledOrganizationIcon = styled(OrganizationIcon)`
  height: 2rem;
  width: 2rem;
  border-radius: 0.5rem;
  background-color: #c4c4c4;
`

export default StyledOrganizationIcon
