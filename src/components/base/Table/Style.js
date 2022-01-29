import styled from '@emotion/styled'

export const TableWrapper = styled.table`
  width: 100%;
  height: 100%;
  border-color: ${({ theme }) => `${theme.color.border}`};
  border-collapse: collapse;

  th,
  td,
  tr {
    padding: ${({ theme }) => theme.table.padding};
  }

  th,
  td {
    border-color: ${({ theme }) => `${theme.color.border}`};
  }

  td {
    padding-left: 5px;
  }

  &.noPadding td {
    padding-left: ${({ theme }) => theme.table.padding};
  }
`

export const TableHead = styled.thead`
  text-align: left;
`
