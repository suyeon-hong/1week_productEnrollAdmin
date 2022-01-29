import React from 'react'
import { ItemDiliverySetting } from '@components/table'
import { ItemBenefitSetting } from '@components/table'
import { OtherSetting } from '@components/table'
import { OptionTable } from '@components/table'
import { ProductImageTable } from '@components/table'
import { RecommendImageTable } from '@components/table'
import { ProductionInformation } from '@components/table'
import { SetPeriodTable } from '@components/table'
import { Table } from '@components/base'
import * as S from './style'

const ProductEnrollAdmin = () => {
  return (
    <>
      <S.Logo>Sir.LOIN</S.Logo>
      <S.PageWrapper>
        <S.Gnb>
          <S.Menu>기본설정</S.Menu>
          <S.Menu>회원</S.Menu>
          <S.Menu>진열</S.Menu>
          <S.Menu>상품</S.Menu>
          <S.Menu>주문</S.Menu>
          <S.Menu>배송</S.Menu>
          <S.Menu>프로모션</S.Menu>
          <S.Menu>혜택</S.Menu>
          <S.Menu>고객 센터 관리</S.Menu>
          <S.Menu>알림</S.Menu>
        </S.Gnb>
        <S.Form>
          <Table thead={'상품 등록'}>
            <SetPeriodTable />
            <ProductionInformation />
            <OptionTable />
            <ProductImageTable />
            <RecommendImageTable />
            <ItemDiliverySetting />
            <ItemBenefitSetting />
            <OtherSetting />
          </Table>
        </S.Form>
      </S.PageWrapper>
    </>
  )
}

export default ProductEnrollAdmin
