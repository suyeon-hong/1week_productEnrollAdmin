import styled from '@emotion/styled'

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const Logo = styled.h1`
  width: 100%;
  heigth: 50px;
  padding-left: ${({ theme }) => theme.table.padding};
  font: 24px/50px 'arial';
  color: ${({ theme }) => theme.color.purple};
  background: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`

export const Form = styled.form`
  width: 100%;
  position: relative;
  padding-left: 15vw;
  padding-top: 100px;
`

export const FormInner = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.table.padding};
`

export const Title = styled.h2`
  width: 100%;
  height: 47px;
  font: bold 16px/47px 'arial';
  color: ${({ theme }) => theme.color.primary};
  background: #fff;
  padding-left: ${({ theme }) => theme.table.padding};
  border: 1px solid ${({ theme }) => theme.color.border};
  position: fixed;
  top: 50px;
  left: 15vw;
  z-index: 1;
`
