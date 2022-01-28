import styled from '@emotion/styled'

export const CategoryRowWrapper = styled.div`
  display: flex;
  > * {
    margin: 10px;
  }
`

export const SelectedCategories = styled.ul`
  > * {
    margin: 5px;
  }
  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    border: 1px solid ${({ theme }) => theme.color.menuSelectedColor};
    border-radius: ${({ theme }) => theme.border.radius};
    background: ${({ theme }) => theme.color.selectedBackground};
    cursor: pointer;
  }
`
