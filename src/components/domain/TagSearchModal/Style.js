import styled from '@emotion/styled'

export const TagSearchModalWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 600px;
  height: 400px;
  border-radius: ${({ theme }) => theme.border.radius};
  background: white;
  padding: 24px;

  box-shadow: rgb(51 51 51) 0 4px 10px, rgb(51 51 51 / 50%) 0 0 4px;

  > * {
    margin: 10px 0;
  }
`

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 5px;
  }
`

export const Title = styled.div`
  position: absolute;
  font-size: 12px;
  left: 50px;
  top: 212px;
`

export const Input = styled.input`
  width: 525px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;
`
