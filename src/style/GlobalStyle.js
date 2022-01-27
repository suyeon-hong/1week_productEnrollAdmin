import { Global, css } from '@emotion/react'
import theme from '@style/theme'

const ResetCss = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-size: 16px;
    color: ${theme.color.primary};
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background-color: transparent;
    border: none;
  }

  table,
  th,
  td {
    border: 1px solid;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }
`

export const GlobalStyle = () => <Global styles={ResetCss} />
