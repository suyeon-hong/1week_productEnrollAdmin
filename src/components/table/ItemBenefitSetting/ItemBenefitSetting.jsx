import React, { useState } from 'react'
import { Table } from '@components/base'
import { TableBody } from '@components/base'
import { Toggle } from '@components/base'

const ItemBenefitSetting = () => {
  const [isChecked, setIsChecked] = useState(true)
  const handleChange = (e) => {
    setIsChecked(e.target.checked)
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
