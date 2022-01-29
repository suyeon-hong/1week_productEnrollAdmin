import styled from '@emotion/styled'

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  & > button {
    width: 50px;
    padding: 10px 0;

    &:nth-of-type(2) {
      margin-left: 5px;
    }
  }
`

export const Text = styled.p`
  padding-top: 20px;
`
