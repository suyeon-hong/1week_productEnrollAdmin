import PropTypes from 'prop-types'
import * as S from './Style'

const TableBody = ({ title, width, height, children }) => {
  return (
    <S.TableBodyRow height={height}>
      <S.TableBodyHead width={80}>{title}</S.TableBodyHead>
      <S.TableBodyContent width={width}>{children}</S.TableBodyContent>
    </S.TableBodyRow>
  )
}

TableBody.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

TableBody.defaultProps = {
  width: 100,
  height: 100,
}

export default TableBody
