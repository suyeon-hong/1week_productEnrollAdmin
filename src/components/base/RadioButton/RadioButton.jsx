import React, { useState } from 'react'
import PropTypes from 'prop-types'
import theme from '@style/theme'
import * as S from './Style'
import styled from '@emotion/styled'

const InputItem = styled.input`
  &:checked ~ .checkmark {
    background-color: #000000;
  }
`

const Items = [
  { index: 1, item: '제한 없음' },
  { index: 2, item: '미노출' },
  { index: 3, item: '노출 기간 설정' },
]

const RadioButton = ({
  width,
  height,
  border,
  radius,
  background,
  color,
  ...props
}) => {
  const [index, setIndex] = useState(1)
  return (
    <S.RadioWrapper>
      {Items.map((item) => (
        <div key={item.index}>
          <InputItem
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

export default RadioButton
