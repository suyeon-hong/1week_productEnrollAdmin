import React from 'react'
import { Table } from '@components/base'
import { TableBody } from '@components/base'
import { Toggle } from '@components/base'
import { Calendar } from '@components/base'
import styled from '@emotion/styled'

const ItemDiliverySetting = () => {
  const onChange = (e) => {
    console.log(e)
  }
  return (
    <>
      <Table thead={'상품배송설정'}>
        <TableBody title="사용자 배송일 출발일 설정">
          <Toggle onChange={onChange} />
        </TableBody>
        <TableBody title="방문 수령">
          <Toggle onChange={onChange} />
        </TableBody>
        <TableBody title="선 주문 예약 배송">
          <Toggle onChange={onChange} />
          <CalendarWrapper>
            주문 시간 {<Calendar time />} ~ {<Calendar time />}
          </CalendarWrapper>
          <CalendarWrapper>
            새벽 배송 {<Calendar />} ~ {<Calendar />}
          </CalendarWrapper>
        </TableBody>
      </Table>
    </>
  )
}

const CalendarWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default ItemDiliverySetting
