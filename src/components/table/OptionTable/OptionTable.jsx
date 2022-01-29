import React, { useEffect, useContext } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { ADD_OPTION_SET } from '@contexts/OptionContext/types'
import { initialValue } from '@contexts/OptionContext/reducer'
import { OptionSetRow } from '@components/rows'
import { Table, Button, Box } from '@components/base'
import theme from '@style/theme'
import * as S from './Style'

const OptionTable = () => {
  const { options, dispatch } = useContext(OptionContext)

  const AddOptionSet = () => {
    console.log('addOption')
    dispatch({ type: ADD_OPTION_SET, payload: initialValue })
  }

  return (
    <>
      <Button
        width={130}
        height={theme.table.baseHeight}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        onClick={AddOptionSet}
      >
        삭제
      </Button>
      <Table thead="상품 옵션*" className="noPadding">
        <Button
          width={130}
          height={theme.table.baseHeight}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          onClick={AddOptionSet}
        >
          + 옵션 세트 추가
        </Button>
        {options?.length > 0 ? (
          <OptionSetRow />
        ) : (
          <S.AlertText className="alertText">
            <span>옵션 세트를 추가하여 옵션을 구성해 주세요.</span>
          </S.AlertText>
        )}
      </Table>
    </>
  )
}

export default React.memo(OptionTable)
