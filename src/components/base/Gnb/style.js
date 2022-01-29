import styled from '@emotion/styled'

export const Gnb = styled.ul`
  width: 15vw;
  min-width: 180px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.color.border};
  position: fixed;
  top: 50px;
  left: 0;
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
