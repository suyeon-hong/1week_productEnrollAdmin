import styled from '@emotion/styled'

export const RadioWrapper = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  padding: 10px 20px;
  border: ${({ border }) => `1px solid ${border}`};
  border-radius: 4px;
`
export const InputItem = styled.input`
  margin: 10px 5px;
  &:checked {
    background-color: #000000;
  }
`
