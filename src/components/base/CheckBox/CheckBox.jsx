import React, { useState } from 'react'
import PropTypes from 'prop-types'
import theme from '@style/theme'
import * as S from './Style'

// const formData = [
//   { index: 1, name: '카테고리명' },
//   { index: 2, name: '카테고리명' },
//   { index: 3, name: '카테고리명' },
// ]

const CheckBox = ({ formData, width, height, ...props }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState(new Set())

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked)
    checkedItemHandler(target, target.value, target.checked)
  }

  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id)
      setCheckedItems(checkedItems)
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id)
      setCheckedItems(checkedItems)
    }
    return checkedItems
  }

  return (
    <>
      {formData.map((item) => (
        <S.CheckBoxWrapper>
          <label key={item.id} className="innerBox">
            <input
              type="checkbox"
              value={item.name}
              onChange={(e) => checkHandler(e)}
            />
            <S.SpanItem>{item.name}</S.SpanItem>
          </label>
        </S.CheckBoxWrapper>
      ))}
    </>
  )
}

CheckBox.PropTypes = {
  formData: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hieght: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

CheckBox.defaultProps = {
  formData: [{ index: 1, name: '카테고리명' }],
  width: '100%',
  height: '100%',
}

export default CheckBox
