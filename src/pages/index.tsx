import React from 'react'

// components
import Button from 'components/Shared/Button'

function Home() {
  return (
    <div>
      <Button icon="user">Primary</Button>
      <Button icon="plus" color="secondary">
        Secondary
      </Button>
    </div>
  )
}

export default Home
