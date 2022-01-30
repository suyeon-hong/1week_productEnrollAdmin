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
  margin-top: -51px;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Head = styled.div`
  width: 150px;
  height: 101px;
  border-right: 1px solid ${({ theme }) => `${theme.color.border}`};
  border-top: 1px solid ${({ theme }) => `${theme.color.border}`};
  border-bottom: 1px solid ${({ theme }) => `${theme.color.border}`};
  background-color: ${({ theme }) => theme.color.tHead};
`
export const Contents = styled.div`
  width: 150px;
`
