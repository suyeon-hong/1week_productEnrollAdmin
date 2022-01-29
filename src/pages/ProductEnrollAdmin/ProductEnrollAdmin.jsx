import React from 'react'
import {
  ItemBenefitSetting,
  OtherSetting,
  OptionTable,
  ProductImageTable,
  ProductionInformation,
  SetPeriodTable,
  RecommendImageTable,
} from '@components/table'
import { useTableState } from '../../contexts/TableContext/TableProvider'
import { ItemDeliverySetting } from '../../components/table'

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
      <ItemDeliverySetting />
      <ItemBenefitSetting />
      <OtherSetting />
    </>
  )
}

export default ProductEnrollAdmin
