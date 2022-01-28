import PropTypes from 'prop-types'
import { TableBody, RadioButton, Calendar } from '@components/base'

const SetExposurePeriodRow = ({ title, items, startNum }) => {
  return (
    <TableBody title={title} width="80%">
      <RadioButton items={items} name={title} startNum={startNum} />
      <div style={{ display: 'table' }}>
        <Calendar time />
        <span style={{ display: 'table-cell', verticalAlign: 'middle' }}>
          ~
        </span>
        <Calendar time />
      </div>
    </TableBody>
  )
}

SetExposurePeriodRow.propTypes = {
  thead: PropTypes.string,
  title: PropTypes.string,
  Items: PropTypes.object,
}
SetExposurePeriodRow.defaultProps = {
  thead: '노출 및 판매기간 설정',
  title: '상품 노출 기한',
  Items: [{ index: 1, item: '제한 없음' }],
}
export default SetExposurePeriodRow
