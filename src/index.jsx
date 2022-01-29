import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { OptionProvider } from '@contexts/OptionContext/OptionProvider'
import { InformationProvider } from '@contexts/InformationContext/InformationProvider'

ReactDOM.render(
  <React.StrictMode>
    <OptionProvider>
      <InformationProvider>
        <App />
      </InformationProvider>
    </OptionProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
