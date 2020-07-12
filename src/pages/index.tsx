import { useContext } from 'react'

// context
import { AppContext } from 'context'
import { toggleTheme } from 'context/theme'

// components
import Button from 'components/shared/Button'

function Home() {
  const { state, dispatch } = useContext(AppContext)
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
