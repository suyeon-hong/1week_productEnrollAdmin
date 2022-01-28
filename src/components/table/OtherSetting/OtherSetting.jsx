import React, { useState } from 'react'
import { Table } from '@components/base'
import { TableBody } from '@components/base'
import { Toggle } from '@components/base'

const OtherSetting = () => {
  const [isChecked, setIsChecked] = useState(true)
  const handleChange = (e) => {
    setIsChecked(e.target.checked)
  }
  return (
    <div>
      <Table thead="기타 설정">
        <TableBody
          title="감사카드 제공"
          children={<Toggle onChange={handleChange} />}
        ></TableBody>
      </Table>
    </div>
  )
}

export default OtherSetting
