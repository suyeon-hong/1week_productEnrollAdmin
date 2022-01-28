import styled from '@emotion/styled'
import { checkTypeOfCss } from '@utils/functions'

export const InputWrapper = styled.input`
  width: ${({ width }) => checkTypeOfCss(width)};
  height: ${({ height }) => checkTypeOfCss(height)};
  padding: ${({ theme }) => theme.table.padding};
  border: ${({ isBorderDark, theme }) => `1px solid
    ${isBorderDark ? theme.color.borderDarker : theme.color.border}`};
  border-radius: ${({ isRadius, theme }) =>
    isRadius ? theme.border.radius : 0};
`
