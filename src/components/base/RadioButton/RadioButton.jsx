import React, { useState } from 'react'
import PropTypes from 'prop-types'
import theme from '@style/theme'
import * as S from './Style'

// @NOTE: Items 예시
// const Items = [
//   { index: 1, item: '제한 없음' },
//   { index: 2, item: '미노출' },
//   { index: 3, item: '노출 기간 설정' },
// ]

const RadioButton = ({ Items, width, height, color, ...props }) => {
  const [index, setIndex] = useState(1)
  return (
    <S.RadioWrapper>
      {Items.map((item) => (
        <div key={item.index}>
          <S.InputItem
            id={item.index}
            type="radio"
            name="item-selector"
            value={item.item}
            checked={index === item.index}
            onChange={(e) => setIndex(+e.currentTarget.id)}
          />
          <label htmlFor={item.index}>{item.item}</label>
        </div>
      ))}
    </S.RadioWrapper>
  )
}

RadioButton.PropTypes = {
  Items: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hieght: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
}

RadioButton.defaultProps = {
  Items: PropTypes.null,
  width: '100%',
  height: '100%',
  // color: theme.color.purple,
}

export default RadioButton
