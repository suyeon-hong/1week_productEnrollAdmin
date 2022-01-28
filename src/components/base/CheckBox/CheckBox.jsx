import PropTypes from 'prop-types'
import * as S from './Style'

const CheckBox = ({ categories, setCategories }) => {
  const checkHandler = ({ target }) => {
    const nextCategories = categories.map((category) =>
      category.name === target.value
        ? { ...category, checked: !category.checked }
        : category,
    )

    setCategories(nextCategories)
  }

  return (
    <>
      {categories.map(({ name, checked }) => (
        <S.CheckBoxWrapper key={name}>
          <label className="innerBox">
            <input
              type="checkbox"
              value={name}
              checked={checked}
              onChange={checkHandler}
            />
            <S.SpanItem>{name}</S.SpanItem>
          </label>
        </S.CheckBoxWrapper>
      ))}
    </>
  )
}

CheckBox.propTypes = {
  categories: PropTypes.array,
  setCategories: PropTypes.func,
}

export default CheckBox
