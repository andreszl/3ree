
import React from 'react'
import Routes from './routes'

import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx'

hydrate(
  <BrowserRouter>
    <App initialState={window.__INITIAL_STATE__}/>
  </BrowserRouter>,
  document.getElementById('app')
)
