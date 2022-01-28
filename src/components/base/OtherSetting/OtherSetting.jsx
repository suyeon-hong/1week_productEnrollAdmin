import React from 'react'
import { Table } from '@components/base'
import { TableBody } from '@components/base'
import { Toggle } from '@components/base'

const OtherSetting = () => {
  const handleChange = (e) => {
    console.log(e)
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
