import { AppProps } from 'next/app'
import { AppProvider } from 'context'

// global css
import 'normalize.css'

// components
import AppLayout from 'components/AppLayout'

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProvider>
  )
}

export default App
