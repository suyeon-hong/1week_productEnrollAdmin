import React from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'

const RadioButton = ({
  items,
  name,
  width,
  height,
  color,
  selected,
  setSelected,
  ...props
}) => {
  return (
    <S.RadioWrapper>
      {items.map((item) => (
        <div key={item.index}>
          <S.InputItem
            id={item.index}
            type="radio"
            name={name}
            value={item.item}
            checked={selected === item.index}
            onChange={(e) => setSelected(+e.currentTarget.id)}
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
  Items: [{ index: 1, item: '제한 없음' }],
  width: '100%',
  height: '100%',
}

export default RadioButton
