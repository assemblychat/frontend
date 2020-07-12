import styled from 'styled-components'

// components
import CommunityIcon from 'components/shared/CommunityIcon'
import IconButton from 'components/shared/IconButton'

function UserCommunities(props) {
  const communities = ['1', '2', '3']

  return (
    <Wrapper>
      {communities.map(community => (
        <CommunityIcon key={community} />
      ))}
      <IconButton name="plus" />
    </Wrapper>
  )
}

export default UserCommunities

const Wrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-auto-rows: max-content;
  grid-auto-columns: max-content;
`
