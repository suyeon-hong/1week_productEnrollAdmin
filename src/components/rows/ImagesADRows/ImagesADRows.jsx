import PropTypes from 'prop-types'
import { Table } from '@components/base'
import { ImageContainer } from '@components/domain'

const ImagesADRows = ({ thead }) => {
  return (
    <Table thead={thead}>
      <ImageContainer />
    </Table>
  )
}

ImagesADRows.propTypes = {
  thead: PropTypes.string,
}
ImagesADRows.defaultProps = {
  thead: '상품 소개 이미지',
}

export default ImagesADRows
