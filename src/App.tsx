import React, { StrictMode } from 'react'
import Routes from './routes'
import history from './services/history'

const App = () => {
  return (
    <StrictMode>
      <Routes history={history} />
    </StrictMode>
  )
}

export default App
