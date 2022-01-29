import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'

const RadioButton = ({
  items,
  startNum,
  unexposed = false,
  name,
  width,
  height,
  color,
  ...props
}) => {
  const [index, setIndex] = useState(startNum)

  useEffect(() => {
    if (unexposed === true) {
      setIndex(startNum + 1)
    }
  }, [unexposed])

  return (
    <S.RadioWrapper>
      {items.map((item) => (
        <div key={item.index}>
          <S.InputItem
            id={item.index}
            type="radio"
            name={name}
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
  Items: [{ index: 1, item: '제한 없음' }],
  width: '100%',
  height: '100%',
}

export default RadioButton
