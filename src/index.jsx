import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { OptionProvider } from '@contexts/OptionContext/OptionProvider'
import { TableProvider } from '@contexts/TableContext/TableProvider'
import { InformationProvider } from '@contexts/InformationContext/InformationProvider'

ReactDOM.render(
  <React.StrictMode>
    <OptionProvider>
      <TableProvider>
        <InformationProvider>
          <App />
        </InformationProvider>
      </TableProvider>
    </OptionProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
