import * as S from './Style'
import { Box } from '../../base'
import CheckBox from '../../base/CheckBox/CheckBox'
import { useState } from 'react'

const CategoryRow = ({}) => {
  const [categories, setCategories] = useState([
    { name: '카테고리1', checked: false },
    { name: '카테고리2', checked: false },
    { name: '카테고리3', checked: false },
    { name: '카테고리4', checked: false },
    { name: '카테고리11115', checked: false },
    { name: '카테고리6', checked: false },
    { name: '카테고리7', checked: false },
    { name: '카테고리8', checked: false },
    { name: '카테고리9', checked: false },
  ])

  const removeCategory = (name) => {
    const nextCategories = categories.map((category) =>
      category.name !== name
        ? category
        : { ...category, checked: !category.checked },
    )

    setCategories(nextCategories)
  }

  return (
    <S.CategoryRowWrapper>
      <Box width={350} height={300}>
        <CheckBox categories={categories} setCategories={setCategories} />
      </Box>
      <Box width={200} height={300}>
        <S.SelectedCategories>
          {categories.map(
            ({ name, checked }) =>
              checked && (
                <li key={name} onClick={() => removeCategory(name)}>
                  {name} X
                </li>
              ),
          )}
        </S.SelectedCategories>
      </Box>
    </S.CategoryRowWrapper>
  )
}

CategoryRow.propTypes = {}

export default CategoryRow
