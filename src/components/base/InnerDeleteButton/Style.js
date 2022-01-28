import styled from '@emotion/styled'
import theme from '@style/theme'

export const DeleteButtonWrapper = styled.div``

export const Content = styled.div`
  padding: 2px;
`

export const DeleteButton = styled.button`
  border: 1.4px solid ${theme.color.purpleDarker};
  border-radius: 0.3em;
  font-size: 105%;
  font-weight: 500;
  padding: 5px 10px;
  margin: 3px;
  background-color: ${theme.color.selectedBackground};
`

export const XText = styled.button`
  margin-left: 3px;
  font-size: 105%;
  font-weight: 600;
`
