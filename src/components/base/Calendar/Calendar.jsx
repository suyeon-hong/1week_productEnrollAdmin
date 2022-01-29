import { DatePicker, DateTimePicker } from 'react-rainbow-components'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'

const Calendar = ({ time, handleTime }) => {
  const [date, setDate] = useState(time ? time : new Date())

  const handleChange = (value) => {
    handleTime(value)
    setDate(value)
  }

  return (
    <S.DatePickerBlock>
      {time ? (
        <DateTimePicker
          value={date}
          onChange={(value) => handleChange(value)}
          hour24
        />
      ) : (
        <DatePicker
          value={date}
          onChange={(value) => handleChange(value)}
          hour24
        />
      )}
    </S.DatePickerBlock>
  )
}

Calendar.propTypes = {
  time: PropTypes.object,
  handleTime: PropTypes.func.isRequired,
}

Calendar.defaultProps = {
  time: null,
}

export default Calendar
