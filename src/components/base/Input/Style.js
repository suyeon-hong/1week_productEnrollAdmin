import styled from '@emotion/styled'
import { checkTypeOfCss } from '@utils/functions'
import { style } from '@utils/constants'
import theme from '@style/theme'

export const InputWrapper = styled.input`
  width: ${({ width }) => checkTypeOfCss(width)};
  height: ${({ height }) => checkTypeOfCss(height)};
  padding: 10px;
  border: ${({ isBorderDark }) => `1px solid
    ${isBorderDark ? theme.color.borderDarker : theme.color.border}`};
  border-radius: ${({ isRadius }) => (isRadius ? style.BASE_BORDER_RADIUS : 0)};
`
