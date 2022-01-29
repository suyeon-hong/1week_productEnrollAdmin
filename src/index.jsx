import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { OptionProvider } from '@contexts/OptionContext/OptionProvider'

ReactDOM.render(
  <React.StrictMode>
    <OptionProvider>
      <App />
    </OptionProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
