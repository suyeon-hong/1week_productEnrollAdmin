import React from 'react'
import { Table } from '@components/base'
import { TableBody } from '@components/base'
import { Toggle } from '@components/base'
import {
  useTableDispatch,
  useTableState,
} from '../../../contexts/TableContext/TableProvider'
import { CHANGE_PRODUCTION_BENEFIT } from '../../../contexts/TableContext/types'

const ItemBenefitSetting = () => {
  const { productionBenefit } = useTableState()
  const dispatch = useTableDispatch()
  const handleChange = () => {
    dispatch({
      type: CHANGE_PRODUCTION_BENEFIT,
      payload: !productionBenefit,
    })
  }
  return (
    <div>
      <Table thead="상품 혜택 허용 설정">
        <TableBody
          title="마일리지 적립"
          children={
            <Toggle isToggle={productionBenefit} onChange={handleChange} />
          }
        ></TableBody>
      </Table>
    </div>
  )
}

export default ItemBenefitSetting
