import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from '@style/GlobalStyle'
import theme from '@style/theme'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
