import React, { useEffect, useContext, useRef } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import {
  DELETE_OPTION_SET,
  DELETE_OPTION,
  ADD_OPTION_INFO,
  ADD_ADDITORY_OPTION,
} from '@contexts/OptionContext/types'
import { optionInfoKey } from '@contexts/OptionContext/reducer'
import AddOptionRow from './AddOptionRow/AddOptionRow'
import { Box, Button, Input } from '@components/base'
import { debounce } from '@utils/functions'
import theme from '@style/theme'
import * as S from './Style'

const OptionRow = ({ optionInfo, additoryOptions, optionsIndex }) => {
  const { options, dispatch } = useContext(OptionContext)
  const addOptionInfoRef = useRef({})

  const { optionName, normalPrice, price, stock, isTax } = optionInfoKey
  const handleOptionDelete = (e, optionInfoIndex) => {
    const deletedOptionInfo = optionInfo.filter(
      (option) => option.index !== optionInfoIndex,
    )

    dispatch({
      type: DELETE_OPTION,
      payload: { optionsIndex, deletedOptionInfo },
    })
  }

  const callback = () =>
    dispatch({
      type: ADD_OPTION_INFO,
      payload: addOptionInfoRef.current,
    })

  const handleInput = (e, optionInfoIndex) => {
    addOptionInfoRef.current[e.target.name] = e.target.value
    addOptionInfoRef.current.optionsIndex = optionsIndex
    addOptionInfoRef.current.optionInfoIndex = optionInfoIndex

    const debounceFn = debounce(callback, 500)
    debounceFn() // FIXME: 잘 작동안됨
  }

  useEffect(() => {
    if (optionInfo?.length === 0) {
      dispatch({
        type: DELETE_OPTION_SET,
        payload: optionsIndex,
      })
    }
  }, [optionInfo])

  return React.Children.toArray(
    optionInfo?.map((option, optionInfoIndex) => (
      <Box
        index={optionInfoIndex}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          margin: `${theme.table.padding} 0`,
        }}
      >
        <S.Row className="right">
          <Button
            width={50}
            height={30}
            border={theme.color.red}
            color={theme.color.red}
            onClick={(e) => handleOptionDelete(e, optionInfoIndex)}
          >
            삭제
          </Button>
        </S.Row>
        <S.Row>
          <Input
            name={optionName}
            placeholder="옵션명을 입력해 주세요.(필수)"
            required
            onChange={(e) => handleInput(e, optionInfoIndex)}
            // value={optionName}
          />
        </S.Row>
        <S.Row className="flexRow">
          <S.Inline>
            <Input
              name={normalPrice}
              type="number"
              placeholder="상품 정상가(필수)"
              required
              onChange={(e) => handleInput(e, optionInfoIndex)}
            />
            원
          </S.Inline>
          <span aria-label="할인율">할인율 %</span>
          <S.Inline>
            <Input
              name={price}
              type="number"
              placeholder="상품 판매가(필수)"
              required
              onChange={(e) => handleInput(e, optionInfoIndex)}
            />
            원
          </S.Inline>
          <S.Inline>
            <Input
              name={stock}
              type="number"
              placeholder="재고(필수)"
              required
              onChange={(e) => handleInput(e, optionInfoIndex)}
            />
            개
          </S.Inline>
          <select name="" id="">
            <option value="과세">과세</option>
            <option value="비과세">비과세</option>
          </select>
        </S.Row>
        <AddOptionRow additoryOptions={additoryOptions} />
        <S.AddOptionBtn>➕ 추가 옵션 상품 추가</S.AddOptionBtn>
      </Box>
    )),
  )
}

export default OptionRow
