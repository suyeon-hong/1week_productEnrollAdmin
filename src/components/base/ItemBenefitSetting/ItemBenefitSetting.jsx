import React from 'react'
import { Table } from '@components/base'
import { TableBody } from '@components/base'
import { Toggle } from '@components/base'

const ItemBenefitSetting = () => {
  const handleChange = (e) => {
    console.log(`id: ${e.target.id}`)
  }
  return (
    <div>
      <Table thead="상품 혜택 허용 설정">
        <TableBody
          title="마일리지 적립"
          children={<Toggle isToggle={true} onChange={handleChange} />}
        ></TableBody>
      </Table>
    </div>
  )
}

export default ItemBenefitSetting
