import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from '@style/GlobalStyle'
import theme from '@style/theme'
import { ProductEnrollAdmin } from '@pages'
import { TableProvider } from './contexts/TableContext/TableProvider'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <TableProvider>
          <ProductEnrollAdmin />
        </TableProvider>
      </ThemeProvider>
    </>
  )
}

export default App
