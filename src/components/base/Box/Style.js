import styled from '@emotion/styled'

export const BoxWrapper = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  padding: 10px 20px;
  border: ${({ border }) => `1px solid ${border}`};
  border-radius: 4px;
`
