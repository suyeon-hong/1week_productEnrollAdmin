import React, { useState } from 'react'
import { Table } from '@components/base'
import { TableBody } from '@components/base'
import { Toggle } from '@components/base'
import { Calendar } from '@components/base'
import { AlertModal } from '@components/domain'
import * as S from './Style.js'

const ItemDiliverySetting = () => {
  const [customDelivery, setCustomDelivery] = useState(false)
  const [visitGet, setVisitGet] = useState(false)
  const [reserveDelivery, setReserveDelivery] = useState(true)
  const [diliveryStartTime, setDiliveryStartTime] = useState(new Date())
  const [diliveryExpiredTime, setDiliveryExpiredTime] = useState(new Date())

  const onCustomDelevery = () => {
    setCustomDelivery((value) => !value)
  }

  const onVisitorGet = () => {
    setVisitGet((value) => !value)
  }

  const onReserveDelivery = () => {
    setReserveDelivery((value) => !value)
  }

  const checkDiliveryStartTime = (value) => {
    setDiliveryStartTime(value)
  }

  const checkDiliveryExpiredTime = (value) => {
    setDiliveryExpiredTime(value)
    if (value.getTime() <= diliveryStartTime.getTime()) {
      return (
        <AlertModal isCancelButton={true} isValidate={false}>
          주문시작시간 이후의 시간을 선택해 주세요.
        </AlertModal>
      )
    }
  }

  const onAlert = (value) => {
    if (diliveryExpiredTime.getTime() > value.getTime()) {
      console.log(diliveryExpiredTime.getTime() > value.getTime())
      return (
        <AlertModal isCancelButton={true} isValidate={false}>
          주문시간 이후로 출고일을 지정해 주세요.
        </AlertModal>
      )
    }
  }

  return (
    <>
      <Table thead={'상품배송설정'}>
        <TableBody
          width="90%"
          title="사용자 배송일 출발일 지정"
          children={
            <Toggle
              isToggle={customDelivery}
              onChange={onCustomDelevery}
              disabled={reserveDelivery}
            />
          }
        />
        <TableBody
          width="90%"
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
          width="90%"
          title="선 주문 예약 배송"
          children={
            <>
              <Toggle
                isToggle={reserveDelivery}
                disabled={customDelivery || visitGet}
                onChange={onReserveDelivery}
              />
              <S.CalendarWrapper>
                주문 시간
                {
                  <Calendar
                    time={diliveryStartTime}
                    handleTime={checkDiliveryStartTime}
                  />
                }
                ~
                {
                  <Calendar
                    time={diliveryStartTime}
                    handleTime={checkDiliveryExpiredTime}
                  />
                }
              </S.CalendarWrapper>
              <S.CalendarWrapper>
                새벽 배송
                {<Calendar handleTime={onAlert} />} 일반배송
                {<Calendar handleTime={onAlert} />}
              </S.CalendarWrapper>
            </>
          }
        />
      </Table>
    </>
  )
}

export default ItemDiliverySetting
