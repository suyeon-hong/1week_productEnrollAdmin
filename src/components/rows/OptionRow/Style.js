import styled from '@emotion/styled'

export const Row = styled.div`
  width: 100%;
  margin: 5px 0;

  &.right {
    width: auto;
    align-self: flex-end;
  }

  &.flexRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.indent {
    padding-left: 2em;

    &::before {
      content: 'ﾤ';
      padding-right: ${({ theme }) => theme.table.innerPadding};
    }
  }
`

export const Inline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    margin-right: ${({ theme }) => theme.table.innerPadding};
  }
`

export const AddOptionBtn = styled.button`
  padding: ${({ theme }) => `${theme.table.padding} 0`};
  text-align: left;
`
