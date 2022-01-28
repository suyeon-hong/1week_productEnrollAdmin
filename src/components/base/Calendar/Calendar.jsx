import { DatePicker, DateTimePicker } from 'react-rainbow-components'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'

const Calendar = ({ time }) => {
  const [date, setDate] = useState(new Date())
  return (
    <S.DatePickerBlock>
      {time ? (
        <DateTimePicker
          value={date}
          onChange={(value) => setDate(value)}
          hour24
        />
      ) : (
        <DatePicker value={date} onChange={(value) => setDate(value)} hour24 />
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
