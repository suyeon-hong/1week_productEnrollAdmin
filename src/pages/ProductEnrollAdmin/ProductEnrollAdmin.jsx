import React from 'react'
import { ItemDiliverySetting } from '@components/table'
import { ItemBenefitSetting } from '@components/table'
import { OtherSetting } from '@components/table'
import { OptionTable } from '@components/table'
import { ProductImageTable } from '@components/table'
import { RecommendImageTable } from '@components/table'
import { ProductionInformation } from '@components/table'
import { SetPeriodTable } from '@components/table'
import { Button } from '@components/base'
import { Gnb } from '@components/base'
import * as S from './style'
import theme from '../../style/theme'

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
