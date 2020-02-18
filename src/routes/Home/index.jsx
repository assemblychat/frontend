import React from 'react'

// components
import Authentication from 'components/Authentication'

const Home = () => {
  return (
    <div>
      <Authentication provider="twitter" />
    </div>
  )
}

export default Home
