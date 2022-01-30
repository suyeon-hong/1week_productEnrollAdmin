import { Table } from '@components/base'
import { SetExposurePeriodRow } from '@components/rows'
import * as F from './radioItems'
import { useTableDispatch } from '@contexts/TableContext/TableProvider'
import { CHANGE_PERIOD } from '@contexts/TableContext/types'

const SetPeriodTable = () => {
  const dispatch = useTableDispatch()

  const setPeriod = (periodType) => {
    return (nextState) => {
      dispatch({ type: CHANGE_PERIOD, payload: { [periodType]: nextState } })
    }
  }

  return (
    <Table thead={'노출 및 판매기간 설정'}>
      <SetExposurePeriodRow
        title={'상품 노출 기한'}
        items={F.exposureItem}
        startNum={F.exposureStartNum}
        setPeriod={setPeriod('expose')}
      />
      <SetExposurePeriodRow
        title={'상품 판매 기한'}
        items={F.saleItem}
        startNum={F.saleItemStartNum}
        setPeriod={setPeriod('sell')}
      />
    </Table>
  )
}

export default SetPeriodTable
