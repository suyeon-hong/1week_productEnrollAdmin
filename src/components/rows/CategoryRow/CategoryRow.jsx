import * as S from './Style'
import { CheckBox, Box } from '@components/base'
import {
  useTableDispatch,
  useTableState,
} from '@contexts/TableContext/TableProvider'
import { CHANGE_PRODUCTION_INFORMATION } from '@contexts/TableContext/types'

const CategoryRow = ({}) => {
  const { productionInformation } = useTableState()
  const { categories } = productionInformation
  const dispatch = useTableDispatch()

  const removeCategory = (name) => {
    const nextCategories = categories.map((category) =>
      category.name !== name
        ? category
        : { ...category, checked: !category.checked },
    )

    dispatch({
      type: CHANGE_PRODUCTION_INFORMATION,
      payload: { categories: nextCategories },
    })
  }

  return (
    <S.CategoryRowWrapper>
      <Box width={'50%'} height={300}>
        <CheckBox categories={categories} dispatch={dispatch} />
      </Box>
      <Box width={'50%'} height={300}>
        <S.SelectedCategories>
          {categories.map(
            ({ name, checked }) =>
              checked && (
                <li key={name} onClick={() => removeCategory(name)}>
                  {name}
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
