import PropTypes from 'prop-types'
import theme from '@style/theme'
import * as S from './Style'

const Box = ({ width, height, border, children, ...props }) => {
  return (
    <S.BoxWrapper
      width={width}
      height={height}
      border={border}
      style={{ ...props.style }}
    >
      {children}
    </S.BoxWrapper>
  )
}

Box.PropTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hieght: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
}

Box.defaultProps = {
  width: '100%',
  height: '100%',
  border: theme.color.border,
}

export default Box
