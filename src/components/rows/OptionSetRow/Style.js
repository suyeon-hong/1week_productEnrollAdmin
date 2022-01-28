import styled from '@emotion/styled'

export const OptionSetRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`

export const OptionSetRowWrapper = styled.div`
  padding: ${({ theme }) => theme.table.padding};
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  margin: 10px 0;
`
