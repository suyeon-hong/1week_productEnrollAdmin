import React from 'react'
import * as S from './style'
import theme from '../../style/theme'

import {
  ItemBenefitSetting,
  OtherSetting,
  OptionTable,
  ProductImageTable,
  ProductionInformation,
  SetPeriodTable,
  RecommendImageTable,
  ItemDeliverySetting,
  ItemInformationTable,
} from '@components/table'
import { Gnb, Button } from '@components/base'
import { useTableState } from '../../contexts/TableContext/TableProvider'

const ProductEnrollAdmin = () => {
  const tableState = useTableState()
  const handleClick = () => {
    console.log(tableState)
  }

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
              onClick={handleClick}
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
            <ItemDeliverySetting />
            <ItemInformationTable />
            <ItemBenefitSetting />
            <OtherSetting />
          </S.Form>
        </S.FormWrapper>
      </S.PageWrapper>
    </>
  )
}

export default ProductEnrollAdmin
