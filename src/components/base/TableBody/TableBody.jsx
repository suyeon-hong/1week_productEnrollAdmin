import PropTypes from 'prop-types'
import * as S from './Style'

const TableBody = ({ title, height, children }) => {
  return (
    <S.TableBodyRow height={height}>
      <S.TableBodyHead>{title}</S.TableBodyHead>
      <td>{children}</td>
    </S.TableBodyRow>
  )
}

TableBody.propTypes = {
  title: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

TableBody.defaultProps = {
  height: 100,
}

export default TableBody
