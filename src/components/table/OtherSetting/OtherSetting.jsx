import React from 'react'
import { Table } from '@components/base'
import { TableBody } from '@components/base'
import { Toggle } from '@components/base'
import {
  useTableDispatch,
  useTableState,
} from '@contexts/TableContext/TableProvider'
import { CHANGE_OTHER_SETTING } from '@contexts/TableContext/types'

const OtherSetting = () => {
  const { otherSetting } = useTableState()
  const dispatch = useTableDispatch()
  const handleChange = () => {
    dispatch({
      type: CHANGE_OTHER_SETTING,
      payload: !otherSetting,
    })
  }
  return (
    <div>
      <Table thead="기타 설정">
        <TableBody
          width="90%"
          title="감사카드 제공"
          children={<Toggle isToggle={otherSetting} onChange={handleChange} />}
        ></TableBody>
      </Table>
    </div>
  )
}

export default OtherSetting
