import React from 'react'
import { AppProps } from 'next/app'

// global css
import 'normalize.css'

// components
import AppLayout from 'components/AppLayout'

function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default App
