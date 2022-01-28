import { DatePicker, DateTimePicker } from 'react-rainbow-components'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'

const Calendar = ({ time, onChange }) => {
  const [date, setDate] = useState(new Date())

  const onChangeHandler = (value) => {
    setDate(value)
    onChange && onChange(value)
  }
  return (
    <S.DatePickerBlock>
      {time ? (
        <DateTimePicker
          value={date}
          onChange={(value) => onChangeHandler(value)}
          hour24
        />
      ) : (
        <DatePicker
          value={date}
          onChange={(value) => onChangeHandler(value)}
          hour24
        />
      )}
    </S.DatePickerBlock>
  )
}

Calendar.propTypes = {
  time: PropTypes.bool,
}

Calendar.defaultProps = {
  time: undefined,
}

export default Calendar
