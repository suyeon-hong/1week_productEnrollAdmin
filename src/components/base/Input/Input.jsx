import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import * as S from './Style'

const Input = forwardRef(
  (
    {
      required,
      type,
      name,
      value,
      width,
      height,
      isBorderDark,
      isRadius,
      placeholder,
      onChange,
      ...props
    },
    ref,
  ) => {
    return (
      <S.InputWrapper
        ref={ref}
        required={required}
        type={type}
        name={name}
        value={value}
        width={width}
        height={height}
        isBorderDark={isBorderDark}
        isRadius={isRadius}
        placeholder={placeholder}
        onChange={onChange}
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
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isBorderDark: PropTypes.bool,
  isRadius: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  required: false,
  type: 'text',
  name: '',
  width: '100%',
  height: '100%',
  isRadius: true,
  isBorderDark: false,
  onChange: () => {},
}

export default Input
