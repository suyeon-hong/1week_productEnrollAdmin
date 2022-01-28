import PropTypes from 'prop-types'
import theme from '@style/theme'
import * as S from './Style'

const Box = ({ index, width, height, border, children, ...props }) => {
  return (
    <S.BoxWrapper
      data-index={index}
      width={width}
      height={height}
      border={border}
      style={{ ...props.style }}
    >
      {children}
    </S.BoxWrapper>
  )
}

Box.propTypes = {
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
}

Box.defaultProps = {
  index: '',
  width: '100%',
  height: '100%',
  border: theme.color.border,
}

export default Box
