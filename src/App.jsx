import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { GlobalStyle } from '@style/GlobalStyle'
import theme from '@style/theme'
import { Table, TableBody } from '@components/base'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        {/* <Table thead="상품 기본 정보">
          <TableBody title="카테고리*">
            <div>123373498304804938409324903894</div>
          </TableBody>
          <TableBody title="필터태그" height="100%">
            <div>123</div>
          </TableBody>
        </Table> */}
      </ThemeProvider>
    </>
  )
}

export default App
