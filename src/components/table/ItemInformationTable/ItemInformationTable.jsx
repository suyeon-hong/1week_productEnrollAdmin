import { useContext } from 'react'
import { InformationContext } from '@contexts/InformationContext/InformationProvider'
import { ADD_INFORMATION_SET } from '@contexts/InformationContext/types'
import { initialValue } from '@contexts/InformationContext/reducer'
import { InformationSetRow } from '@components/rows'
import { Table, Button } from '@components/base'
import theme from '@style/theme'
import * as S from './Style'

const ItemInformationTable = () => {
  const { informations, dispatch } = useContext(InformationContext)

  const AddInformationSet = () => {
    dispatch({ type: ADD_INFORMATION_SET, payload: initialValue })
  }

  return (
    <>
      <Table thead="상품 정보 고시" className="noPadding">
        {informations?.length > 0 ? (
          <InformationSetRow />
        ) : (
          <S.AlertText className="alertText">
            <span>정보고시를 추가하여 옵션을 구성해 주세요.</span>
          </S.AlertText>
        )}
        <Button
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
