import { useEffect, useContext } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { ADD_INFORMATION_SET } from '@contexts/OptionContext/types'
import { initialValue } from '@contexts/OptionContext/reducer'
import { OptionSetRow, InformationSetRow } from '@components/rows'
import { Table, Button, Box } from '@components/base'
import theme from '@style/theme'
import * as S from './Style'

const ItemInformationTable = () => {
  const { options, dispatch } = useContext(OptionContext)

  useEffect(() => {
    dispatch({ type: ADD_INFORMATION_SET, payload: initialValue })
  }, [])

  const AddInformationSet = () => {
    console.log('addInformation')
    dispatch({ type: ADD_INFORMATION_SET, payload: initialValue })
  }

  useEffect(() => {
    console.log(options, 'options')
  }, [options])

  return (
    <>
      <Table thead="상품 정보 고시" className="noPadding">
        {options?.length > 0 ? (
          <InformationSetRow />
        ) : (
          <S.AlertText className="alertText">
            <span>정보고시를 추가하여 옵션을 구성해 주세요.</span>
          </S.AlertText>
        )}
        <Button
          width={'100%'}
          color={theme.color.purple}
          height={theme.table.baseHeight}
          onClick={AddInformationSet}
        >
          + 정보고시 추가
        </Button>
      </Table>
    </>
  )
}

export default ItemInformationTable
