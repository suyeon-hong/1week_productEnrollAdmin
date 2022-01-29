import styled from '@emotion/styled'

export const InformationSetRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding: 10px;
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
`

export const InformationSetRowWrapper = styled.div`
  padding: ${({ theme }) => theme.table.padding};
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  margin: 10px 0;
`
export const Title = styled.section`
  display: flex;
  margin: 10px 5%;
  width: 95%;
  justify-content: space-between;
`
