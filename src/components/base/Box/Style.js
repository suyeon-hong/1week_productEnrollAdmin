import styled from '@emotion/styled'
import { checkTypeOfCss } from '@utils/functions'

export const BoxWrapper = styled.div`
  width: ${({ width }) => checkTypeOfCss(width)};
  height: ${({ height }) => checkTypeOfCss(height)};
  padding: 10px 20px;
  border: ${({ border }) => `1px solid ${border}`};
  border-radius: 4px;
`
