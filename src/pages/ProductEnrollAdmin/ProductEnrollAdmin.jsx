import React from 'react'
import {
  ItemDiliverySetting,
  ItemBenefitSetting,
  OtherSetting,
  OptionTable,
  ProductImageTable,
  ProductionInformation,
  SetPeriodTable,
  RecommendImageTable,
} from '@components/table'
import { useTableState } from '../../contexts/TableContext/TableProvider'

const ProductEnrollAdmin = () => {
  const tableState = useTableState()

  const handleClick = () => {
    console.log(tableState)
  }
  return (
    <>
      <button style={{ position: 'fixed' }} onClick={handleClick}>
        {' '}
        저장하기
      </button>
      <SetPeriodTable />
      <ProductionInformation />
      <OptionTable />
      <ProductImageTable />
      <RecommendImageTable />
      <ItemDiliverySetting />
      <ItemBenefitSetting />
      <OtherSetting />
    </>
  )
}

export default ProductEnrollAdmin
