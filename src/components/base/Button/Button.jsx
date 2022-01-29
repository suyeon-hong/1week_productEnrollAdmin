import PropTypes from 'prop-types'
import theme from '@style/theme'
import * as S from './Style'

// NOTE: 아무 props도 넘겨주지 않으면 보라색 border에 흰 배경, 검정 글씨임. e.g, 검색 버튼
// NOTE: color = 폰트 컬러, radius = border-radius, background = background-color

const Button = ({
  width,
  height,
  border,
  radius,
  background,
  color,
  children,
  onClick,
  ...props
}) => {
  return (
    <S.ButtonWrapper
      width={width}
      height={height}
      border={border}
      radius={radius ? 1 : 0}
      background={background}
      color={color}
      onClick={onClick}
      style={{ ...props.style }}
      onClick={onClick}
    >
      {children}
    </S.ButtonWrapper>
  )
}

Button.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  border: PropTypes.string,
  radius: PropTypes.bool,
  background: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  width: '100%',
  height: '100%',
  radius: true,
  border: theme.color.purple,
  background: '#fff',
  color: 'inherit',
  onClick: () => {},
}

export default Button
