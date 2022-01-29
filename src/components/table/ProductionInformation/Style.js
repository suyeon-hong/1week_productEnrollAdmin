import styled from '@emotion/styled'

export const Row = styled.div`
  display: flex;
  position: relative;
`
export const ProductionCode = styled.div`
  display: flex;
  position: absolute;
  top: -30px;
  right: 0;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Head = styled.div`
  width: 150px;
  height: 98px;
  border-right: 1px solid ${({ theme }) => `${theme.color.border}`};
  background-color: ${({ theme }) => theme.color.tHead};
`
export const Contents = styled.div`
  width: 150px;
`
