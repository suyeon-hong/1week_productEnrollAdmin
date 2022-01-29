import styled from '@emotion/styled'

export const InformationRowWrapper = styled.div``

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
      padding-right: ${({ theme }) => theme.table.innerPadding};
    }
  }
`
export const InputName = styled.p`
  width: 40%;
  margin-left: 5%;
  color: gray;
  font-size: 90%;
  font-weight: bold;
`

export const Inline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > input {
    margin-right: ${({ theme }) => theme.table.innerPadding};
  }
`

export const AddInformationBtn = styled.button`
  padding: 15px 50px;
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  color: ${({ theme }) => `${theme.color.purple}`};
`
