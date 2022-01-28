import styled from '@emotion/styled'
import theme from '@style/theme'

export const ToggleContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  user-select: none;
`

export const ToggleInput = styled.input`
  display: none;
  &:checked + div {
    background-color: #ada7e2;
  }
  &:checked + div::after {
    left: calc(100% - 26px);
    background-color: ${theme.color.purpleDarker};
    box-shadow: 1px 2px 2px 0 ${theme.color.border};
  }
  &:disabled + div {
    opacity: 0.7;
    cursor: not-allowed;
    &::after {
      opacity: 0.7;
    }
  }
`

export const ToggleSwitch = styled.div`
  margin-top: 100px;
  display: inline-flex;
  align-items: center;
  width: 45px;
  height: 17px;
  padding: 2px;
  border: none;
  border-radius: 15px;
  background-color: #aaa;
  box-sizing: border-box;
  transition: background-color 200ms ease-out;

  &::after {
    content: '';
    position: relative;
    left: 0;
    display: block;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 1px 2px 2px 0 ${theme.color.border};
    transition: left 200ms ease-out;
  }
`
