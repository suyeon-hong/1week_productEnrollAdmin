import React, { useState } from 'react'
import { ItemDiliverySetting } from '@components/table'
import { ItemBenefitSetting } from '@components/table'
import { OtherSetting } from '@components/table'
import { OptionTable } from '@components/table'
import { ProductImageTable } from '@components/table'
import { RecommendImageTable } from '@components/table'
import { ProductionInformation } from '@components/table'
import { SetPeriodTable } from '@components/table'
import { Button } from '@components/base'
import * as S from './style'
import theme from '../../style/theme'

const ProductEnrollAdmin = () => {
  const [value, setValue] = useState('')
  const [isOn, setIsOn] = useState('')
  const onClick = (e) => {
    setValue(e.target.value)
  }
  return (
    <>
      <S.Logo>Sir.LOIN</S.Logo>
      <S.PageWrapper>
        <S.Gnb>
          <S.Menu onClick={onClick} value="기본설정">
            기본설정
          </S.Menu>
          <S.Menu onClick={onClick} value="회원">
            회원
          </S.Menu>
          <S.Menu onClick={onClick} value="진열">
            진열
          </S.Menu>
          <S.Menu onClick={onClick} value="상품">
            상품
          </S.Menu>
          <ul id="상품" className={isOn}>
            <S.InnerMenu>상품 리스트</S.InnerMenu>
            <S.InnerMenu>상품 재고 관리</S.InnerMenu>
            <S.ActiveMenu>상품 등록</S.ActiveMenu>
          </ul>
          <S.Menu onClick={onClick} value="주문">
            주문
          </S.Menu>
          <S.Menu onClick={onClick} value="배송">
            배송
          </S.Menu>
          <S.Menu onClick={onClick} value="프로모션">
            프로모션
          </S.Menu>
          <S.Menu onClick={onClick} value="혜택">
            혜택
          </S.Menu>
          <S.Menu onClick={onClick} value="고객 센터 관리">
            고객 센터 관리
          </S.Menu>
          <S.Menu onClick={onClick} value="알림">
            알림
          </S.Menu>
        </S.Gnb>
        <S.FormWrapper>
          <S.Title>
            상품 등록
            <Button
              width={100}
              height={35}
              background={theme.color.purple}
              color={'#fff'}
              style={{
                transform: 'translateX(70vw)',
              }}
            >
              저장하기
            </Button>
          </S.Title>
          <S.Form>
            <SetPeriodTable />
            <ProductionInformation />
            <OptionTable />
            <ProductImageTable />
            <RecommendImageTable />
            <ItemDiliverySetting />
            <ItemBenefitSetting />
            <OtherSetting />
          </S.Form>
        </S.FormWrapper>
      </S.PageWrapper>
    </>
  )
}

export default ProductEnrollAdmin
