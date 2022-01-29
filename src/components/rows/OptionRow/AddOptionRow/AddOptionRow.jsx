import React, { useContext, useRef, useCallback } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import {
  DELETE_ADDITORY_OPTION,
  UPDATE_ADDITORY_OPTION,
} from '@contexts/OptionContext/types'
import { additoryOptionsKey } from '@contexts/OptionContext/reducer'
import { Button, Input } from '@components/base'
import { debounceGenerator } from '@utils/functions'
import theme from '@style/theme'
import * as S from '../Style'

const AddOptionRow = ({ additoryOptions, optionsIndex, optionInfoIndex }) => {
  const { addOptionName, addOptionNormalPrice } = additoryOptionsKey
  const updateAdditoryOptionsRef = useRef({})
  const { options, dispatch } = useContext(OptionContext)
  const debounceFn = useCallback(debounceGenerator(1000), [])

  const handleDeleteAdditoryOptions = (e, currentIndex) => {
    dispatch({
      type: DELETE_ADDITORY_OPTION,
      payload: { optionsIndex, optionInfoIndex, currentIndex },
    })
  }

  const handleUpdateAdditoryOptions = (e, currentIndex) => {
    const callback = () =>
      dispatch({
        type: UPDATE_ADDITORY_OPTION,
        payload: nextValue,
      })

    const nextValue = {
      index: {
        optionsIndex,
        optionInfoIndex,
        currentIndex,
      },
      value: updateAdditoryOptionsRef.current,
    }
    updateAdditoryOptionsRef.current[e.target.name] = e.target.value

    debounceFn(callback)
  }

  return (
    additoryOptions[optionInfoIndex]?.length > 0 &&
    React.Children.toArray(
      additoryOptions[optionInfoIndex].map((option, index) => (
        <S.Row className="flexRow indent">
          <Input
            name={addOptionName}
            width="50%"
            placeholder="추가 옵션명 (필수)"
            required
            style={{ marginRight: theme.table.innerPadding }}
            onChange={(e) => handleUpdateAdditoryOptions(e, option.index)}
          />
          <S.Inline style={{ marginRight: theme.table.padding, flexGrow: 1 }}>
            <Input
              name={addOptionNormalPrice}
              placeholder="추가 옵션명 정상가(필수)"
              required
              onChange={(e) => handleUpdateAdditoryOptions(e, option.index)}
            />
            원
          </S.Inline>
          <Button
            width={50}
            height={30}
            border={theme.color.red}
            color={theme.color.red}
            onClick={(e) => handleDeleteAdditoryOptions(e, option.index)}
          >
            삭제
          </Button>
        </S.Row>
      )),
    )
  )
}

export default React.memo(AddOptionRow)
