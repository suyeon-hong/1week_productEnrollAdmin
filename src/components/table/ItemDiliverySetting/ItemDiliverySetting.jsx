import React, { useState } from 'react'
import { Table } from '@components/base'
import { TableBody } from '@components/base'
import { Toggle } from '@components/base'
import { Calendar } from '@components/base'
import * as S from './Style.js'

const ItemDiliverySetting = () => {
  const [customDelivery, setCustomDelivery] = useState(false)
  const [visitGet, setVisitGet] = useState(false)
  const [reserveDelivery, setReserveDelivery] = useState(true)

  const onCustomDelevery = (e) => {
    setCustomDelivery((value) => !value)
  }

  const onVisitorGet = (e) => {
    setVisitGet((value) => !value)
  }

  const onReserveDelivery = (e) => {
    setReserveDelivery((value) => !value)
  }

  return (
    <>
      <Table thead={'상품배송설정'}>
        <TableBody
          title="사용자 배송일 출발일 설정"
          children={
            <Toggle
              isToggle={customDelivery}
              onChange={onCustomDelevery}
              disabled={reserveDelivery}
            />
          }
        />
        <TableBody
          title="방문 수령"
          children={
            <Toggle
              isToggle={visitGet}
              onChange={onVisitorGet}
              disabled={reserveDelivery}
            />
          }
        />
        <TableBody
          title="선 주문 예약 배송"
          children={
            <>
              <Toggle
                isToggle={reserveDelivery}
                disabled={customDelivery || visitGet}
                onChange={onReserveDelivery}
              />
              <S.CalendarWrapper>
                주문 시간 {<Calendar time />} ~ {<Calendar time />}
              </S.CalendarWrapper>
              <S.CalendarWrapper>
                새벽 배송 {<Calendar />} ~ {<Calendar />}
              </S.CalendarWrapper>
            </>
          }
        />
      </Table>
    </>
  )
}

export default ItemDiliverySetting
