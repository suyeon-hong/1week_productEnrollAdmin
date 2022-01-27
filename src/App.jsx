import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from '@style/GlobalStyle'
import theme from '@style/theme'
import ProductEnrollAdmin from '@pages/ProductEnrollAdmin'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProductEnrollAdmin />
      </ThemeProvider>
    </>
  )
}

export default App
