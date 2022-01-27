import React, { useState } from 'react'
import PropTypes from 'prop-types'
import theme from '@style/theme'
import * as S from './Style'

const formData = [
  { index: 1, name: '카테고리명' },
  { index: 2, name: '카테고리명' },
  { index: 3, name: '카테고리명' },
]

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [checkedItems, setCheckedItems] = useState(new Set())

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked)
    checkedItemHandler(target, target.value, target.checked)
  }

  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      //체크 되었을때
      checkedItems.add(id) //체크시 삽입
      setCheckedItems(checkedItems) //체크 요소 넣어주기
      box.style.backgroundColor = theme.color.purple //스타일 변경
    } else if (!isChecked && checkedItems.has(id)) {
      //체크가 안되었고, id가 있을때(클릭 2번시)
      checkedItems.delete(id) //체크 두번시 삭제
      setCheckedItems(checkedItems)
      box.style.backgroundColor = '#F6CB44' //스타일 변경
    }
    return checkedItems
  }

  return (
    <div className="contStyle">
      {formData.map((item) => (
        <label key={item.id} className="innerBox">
          <input
            type="checkbox"
            value={item.name}
            onChange={(e) => checkHandler(e)}
          />
          <div>{item.name}</div>
        </label>
      ))}
    </div>
  )
}

// Box.PropTypes = {
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   hieght: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   children: PropTypes.node.isRequired,
// }

// Box.defaultProps = {
//   width: '100%',
//   height: '100%',
//   border: theme.color.border,
// }

export default CheckBox
