import styled from '@emotion/styled'

export const OptionImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 230px;
  background: ${({ theme }) => theme.color.border};

  & > label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: inherit;
  }
`

export const ImageArea = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  z-index: 1;
`
