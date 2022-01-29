import { Table } from '@components/base'
import { SetExposurePeriodRow } from '@components/rows'
import * as F from './radioItems'

const SetPeriodTable = () => {
  return (
    <Table thead={'노출 및 판매기간 설정'}>
      <SetExposurePeriodRow
        title={'상품 노출 기한'}
        items={F.exposureItem}
        startNum={F.exposureStartNum}
      />
      <SetExposurePeriodRow
        title={'상품 판매 기한'}
        items={F.saleItem}
        startNum={F.saleItemStartNum}
      />
    </Table>
  )
}

export default SetPeriodTable
