import React from 'react'
import {
  ItemDiliverySetting,
  ItemBenefitSetting,
  OtherSetting,
  OptionTable,
  ProductImageTable,
  RecommendImageTable,
  RecommendImageTable,
  ProductionInformation,
  SetPeriodTable,
} from '@components/table'
import { Button, Gnb } from '@components/base'
import theme from '@style/theme'
import * as S from './style'

const ProductEnrollAdmin = () => {
  return (
    <>
      <S.Logo>Sir.LOIN</S.Logo>
      <S.PageWrapper>
        <Gnb />
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
