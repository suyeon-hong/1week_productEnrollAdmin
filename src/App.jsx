import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from '@style/GlobalStyle'
import theme from '@style/theme'
import { ProductEnrollAdmin } from '@pages'
import { OptionTable } from '@components/table'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProductEnrollAdmin />
        <OptionTable />
      </ThemeProvider>
    </>
  )
}

export default App
