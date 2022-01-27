import styled from '@emotion/styled'
import { style } from '@utils/constants'

export const ButtonWrapper = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}px`};
  border: ${({ border }) => border && `1px solid ${border}`};
  border-radius: ${({ radius }) => (radius ? style.BASE_BORDER_RADIUS : 0)};
  background: ${({ background }) => (background ? background : '#fff')};
  color: ${({ color }) => color && color};
`
