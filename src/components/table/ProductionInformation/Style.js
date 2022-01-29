import styled from '@emotion/styled'

export const Row = styled.div`
  display: flex;
  position: relative;
`
export const ProductionCode = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  right: 0;
  margin-top: -55px;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Head = styled.div`
  width: 150px;
  height: 110px;
  border-right: 1px solid ${({ theme }) => `${theme.color.border}`};
  background-color: ${({ theme }) => theme.color.tHead};
`
export const Contents = styled.div`
  width: 150px;
`
