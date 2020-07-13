import { useContext } from 'react'

// context
import { AppContext } from 'context'

// components
import Button from 'components/Shared/Button'

function Home() {
  const { state } = useContext(AppContext)
  const { mode } = state.theme

  return (
    <div>
      <p>Current Theme: {mode}</p>
      <Button icon="user">Primary</Button>
      <Button icon="plus" color="secondary">
        Secondary
      </Button>
    </div>
  )
}

export default Home
