import styled from '@emotion/styled'

export const ImageUploadButtonWrapper = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 40px;
  border: ${({ theme }) => `1px solid ${theme.color.purple}`};
  border-radius: 3px;
  background: #fff;
  color: ${({ theme }) => theme.color.purple};
`

export const FileInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`
