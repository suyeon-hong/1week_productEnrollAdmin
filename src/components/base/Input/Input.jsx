import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'

const Input = forwardRef(
  ({ width, height, isBorderDark, isRadius, placeholder, ...props }, ref) => {
    return (
      <S.InputWrapper
        ref={ref}
        width={width}
        height={height}
        isBorderDark={isBorderDark}
        isRadius={isRadius}
        placeholder={placeholder}
        style={{ ...props.style }}
      ></S.InputWrapper>
    )
  },
)

Input.displayName = 'Input'

Input.propTypes = {
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isBorderDark: PropTypes.bool,
  isRadius: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
}

Input.defaultProps = {
  width: '100%',
  height: '100%',
  isRadius: true,
  isBorderDark: false,
}

export default Input
