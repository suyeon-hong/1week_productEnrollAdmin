import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { TableBody, RadioButton, Calendar } from '@components/base'

const SetExposurePeriodRow = ({ title, items, startNum, setPeriod }) => {
  const now = new Date()
  const firstCalender = new Date()
  const secondCalender = new Date(now.setDate(now.getDate() + 30))

  const [firstTime, setFirstTime] = useState(firstCalender)
  const [secondTime, setSecondTime] = useState(secondCalender)
  const [selected, setSelected] = useState(startNum)

  useEffect(() => {
    if (secondTime.getTime() - firstTime.getTime() < 0) setSelected(startNum)
    if (secondTime.getTime() - firstTime.getTime() > 0) setSelected(startNum)
  }, [firstTime, secondTime])

  useEffect(() => {
    setPeriod({
      type: selected,
      startDate: firstTime.getTime(),
      endDate: secondTime.getTime(),
    })
  }, [firstTime, secondTime, selected])

  return (
    <TableBody title={title} width="100%">
      <RadioButton
        items={items}
        name={title}
        selected={selected}
        setSelected={setSelected}
      />
      <div style={{ display: 'table' }}>
        <Calendar time={firstTime} handleTime={setFirstTime} />
        <span style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          ~
        </span>
        <Calendar time={secondTime} handleTime={setSecondTime} />
      </div>
    </TableBody>
  )
}

SetExposurePeriodRow.propTypes = {
  thead: PropTypes.string,
  title: PropTypes.string,
  Items: PropTypes.object,
}
SetExposurePeriodRow.defaultProps = {
  thead: '노출 및 판매기간 설정',
  title: '상품 노출 기한',
  Items: [{ index: 1, item: '제한 없음' }],
}
export default SetExposurePeriodRow
