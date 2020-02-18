import React, { useEffect } from 'react'

// utils
import { connectSocket } from 'utils/io'

// components
import Routes from './routes'

function App() {
  useEffect(() => {
    // establish connection to our socket.io server
    connectSocket()
  }, [])

  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
