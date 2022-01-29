import React, { useState } from 'react'
import * as S from './style'

const Gnb = () => {
  const MENU_LIST = [
    { title: '기본설정' },
    { title: '회원' },
    { title: '진열' },
    {
      title: '상품',
      list: ['상품 리스트', '상품 재고 관리', '상품 등록'],
    },
    { title: '주문' },
    { title: '배송' },
    { title: '프로모션' },
    { title: '혜택' },
    { title: '고객 센터 관리' },
    { title: '알림' },
  ]
  const [value, setValue] = useState('')
  const [isOn, setIsOn] = useState('')
  const onClick = (e) => {
    setValue(e.target.value)
  }

  return (
    <S.Gnb>
      {MENU_LIST.map((name) => {
        return (
          <S.Menu key={name.title} onClick={onClick} value={name.title}>
            {name.title}
          </S.Menu>
        )
      })}
    </S.Gnb>
  )
}

export default Gnb
