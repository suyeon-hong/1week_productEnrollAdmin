import React, { useState } from 'react'
import { DatePicker, DateTimePicker } from 'react-rainbow-components'
import * as S from './Style'

const Calendar = ({ time }) => {
  const [date, setDate] = useState('')
  return (
    <S.DatePickerBlock>
      {time ? (
        <DateTimePicker
          value={date}
          onChange={(value) => setDate(value)}
          placeholder="YYYY-MM-DD YY:MM"
          hour24
        />
      ) : (
        <DatePicker
          value={date}
          onChange={(value) => setDate(value)}
          placeholder="YYYY-MM-DD"
          hour24
        />
      )}
    </S.DatePickerBlock>
  )
}

export default Calendar
