import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import GlobalStyle from './assets/styles/global'
import Routes from './routes'

const App: React.FC = () => {
  return (
    <Router>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </Router>
  )
}

export default App
