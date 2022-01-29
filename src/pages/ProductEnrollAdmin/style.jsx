import styled from '@emotion/styled'

export const PageWrapper = styled.div`
  display: flex;
`
export const Form = styled.form`
  width: 100%;
`

export const Logo = styled.h1`
  width: 100%;
  padding: ${({ theme }) => theme.table.padding};
  font: 24px/1 'arial';
  color: ${({ theme }) => theme.color.purple};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`

export const Gnb = styled.ul`
  width: 200px;
  // border-right: 1px solid ${({ theme }) => theme.color.border};
`

export const Menu = styled.li`
  width: 100%;
  padding: ${({ theme }) => theme.table.padding};
  font: bold 16px/1 'arial';
  color: ${({ theme }) => theme.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`
