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
`

export const TableHead = styled.thead`
  text-align: left;
`

export const AlertText = styled.td`
  text-align: center;
  height: 100%;
  background-color: ${({ theme }) => `${theme.color.border}`};

  & > span {
    position: relative;
    bottom: 20%;
  }
`
