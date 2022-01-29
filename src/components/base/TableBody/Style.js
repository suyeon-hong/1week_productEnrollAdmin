import styled from '@emotion/styled'
import { checkTypeOfCss } from '@utils/functions'

export const TableBodyRow = styled.tr`
  height: ${({ height }) => height && checkTypeOfCss(height)};
`

export const TableBodyHead = styled.th`
  width: 500px;
  background-color: ${({ theme }) => theme.color.tHead};
  font-weight: normal;
  text-align: left;
`
export const TableBodyContent = styled.td`
  width: ${({ width }) => width && checkTypeOfCss(width)};
`
