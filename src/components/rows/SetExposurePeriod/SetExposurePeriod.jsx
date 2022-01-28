import PropTypes from 'prop-types'
import { Table } from '@components/base'
import { TableBody } from '@components/base'
import { RadioButton } from '@components/base'

const SetExposurePeriod = ({ thead, title, Items }) => {
  return (
    <Table thead={thead}>
      <TableBody title={title}>
        <RadioButton Items={Items} />
      </TableBody>
    </Table>
  )
}

SetExposurePeriod.propTypes = {
  thead: PropTypes.string,
  title: PropTypes.string,
  Items: PropTypes.object,
}
SetExposurePeriod.defaultProps = {
  thead: '노출 및 판매기간 설정',
  title: '상품 노출 기한',
  Items: [{ index: 1, item: '제한 없음' }],
}
export default SetExposurePeriod
