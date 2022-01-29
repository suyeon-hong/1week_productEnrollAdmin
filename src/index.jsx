import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { OptionProvider } from '@contexts/OptionContext/OptionProvider'
import { TableProvider } from './contexts/TableContext/TableProvider'

ReactDOM.render(
  <React.StrictMode>
    <OptionProvider>
      <TableProvider>
        <App />
      </TableProvider>
    </OptionProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
