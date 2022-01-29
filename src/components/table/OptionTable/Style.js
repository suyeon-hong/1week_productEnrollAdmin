import styled from '@emotion/styled'

export const OptionSet = styled.div``

export const AlertText = styled.p`
  text-align: center;
  width: 100%;
  height: ${({ theme }) => `calc(100vh - ${theme.table.baseHeight} - 32px)`};
  background-color: ${({ theme }) => `${theme.color.border}`};
  position: relative;
  bottom: 20%;

  & > span {
    position: relative;
    top: 20%;
  }
`
