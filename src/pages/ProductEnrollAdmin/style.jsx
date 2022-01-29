import styled from '@emotion/styled'

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const Logo = styled.h1`
  width: 100%;
  padding: ${({ theme }) => theme.table.padding};
  font: 24px/1 'arial';
  color: ${({ theme }) => theme.color.purple};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`

export const Gnb = styled.ul`
  width: 15vw;
  min-width: 180px;
  border-right: 1px solid ${({ theme }) => theme.color.border};
`

export const Menu = styled.li`
  width: 100%;
  padding: ${({ theme }) => theme.table.padding};
  font: bold 16px/1 'arial';
  color: ${({ theme }) => theme.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  cursor: pointer;
`

export const InnerMenu = styled(Menu)`
  border-bottom: none;
  background: ${({ theme }) => theme.color.menuBackground};
`
export const ActiveMenu = styled(InnerMenu)`
  color: ${({ theme }) => theme.color.purpleDarker};
  background: ${({ theme }) => theme.color.selectedBackground};
`

export const FormWrapper = styled.div`
  width: 100%;
  position: relative;
`

export const Form = styled.form`
  width: 100%;
  padding: 70px ${({ theme }) => theme.table.padding};
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
  z-index: 1;
`
