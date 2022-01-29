import styled from '@emotion/styled'
import { checkTypeOfCss } from '@utils/functions'

export const ButtonWrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => checkTypeOfCss(width)};
  height: ${({ height }) => checkTypeOfCss(height)};
  border: ${({ border }) => border && `1px solid ${border}`};
  border-radius: ${({ radius, theme }) => (radius ? theme.border.radius : 0)};
  background: ${({ background }) => (background ? background : '#fff')};
  color: ${({ color }) => color && color};
  cursor: pointer;
`
