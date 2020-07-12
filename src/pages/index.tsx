import { useContext } from 'react'

// context
import { AppContext } from 'context'
import { toggleTheme } from 'context/theme'

// components
import Button from 'components/Shared/Button'

function Home() {
  const { state, dispatch } = useContext(AppContext)
  const { mode } = state.theme

  return (
    <div>
      <p>Current Theme: {mode}</p>
      <Button icon="plus" onClick={() => dispatch(toggleTheme(state))}>
        Toggle Theme
      </Button>
      <Button icon="plus" color="secondary">
        Secondary
      </Button>
    </div>
  )
}

export default Home
