import React, { useEffect, useContext, useRef, useCallback } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import {
  DELETE_OPTION_SET,
  ADD_OPTION,
  DELETE_OPTION,
  UPDATE_OPTION_INFO,
  ADD_ADDITORY_OPTION,
} from '@contexts/OptionContext/types'
import { optionInfoKey } from '@contexts/OptionContext/reducer'
import AddOptionRow from './AddOptionRow/AddOptionRow'
import { Box, Button, Input } from '@components/base'
import { debounceGenerator, calculateDiscount } from '@utils/functions'
import theme from '@style/theme'
import * as S from './Style'

const OptionRow = ({ optionInfo, additoryOptions, optionsIndex }) => {
  const { options, dispatch } = useContext(OptionContext)
  const addOptionInfoRef = useRef({})
  const debounceFn = useCallback(debounceGenerator(800), [])

  const { optionName, normalPrice, price, stock, isVAT } = optionInfoKey
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
      type: UPDATE_OPTION_INFO,
      payload: addOptionInfoRef.current,
    })

  const handleInput = (e, optionInfoIndex) => {
    const { normalPrice, price, isVAT, ...props } = addOptionInfoRef.current
    addOptionInfoRef.current[e.target.name] = e.target.value
    addOptionInfoRef.current.optionsIndex = optionsIndex
    addOptionInfoRef.current.optionInfoIndex = optionInfoIndex

    debounceFn(callback)
  }

  const handleaAddAditoryOptions = (e, optionInfoIndex) => {
    dispatch({
      type: ADD_ADDITORY_OPTION,
      payload: { optionsIndex, optionInfoIndex },
    })
  }

  const handleAddOption = (e) => {
    dispatch({
      type: ADD_OPTION,
      payload: optionsIndex,
    })
  }

  const onChange = (e) => {
    console.log(e.target.value)
  }

  useEffect(() => {
    // @NOTE: 각 옵션 세트의 옵션이 없을 경우 옵션 세트 삭제
    if (optionInfo?.length === 0) {
      dispatch({
        type: DELETE_OPTION_SET,
        payload: optionsIndex,
      })
    }
  }, [optionInfo])

  return (
    <>
      {React.Children.toArray(
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
              <span aria-label="할인율">
                {calculateDiscount(option.normalPrice, option.price)} %
              </span>
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
              <select
                onChange={(e) => handleInput(e, optionInfoIndex)}
                name={isVAT}
              >
                <option value={true}>과세</option>
                <option value={false}>비과세</option>
              </select>
            </S.Row>
            <AddOptionRow
              additoryOptions={additoryOptions}
              optionsIndex={optionsIndex}
              optionInfoIndex={optionInfoIndex}
            />
            <S.AddOptionBtn
              onClick={(e) => handleaAddAditoryOptions(e, optionInfoIndex)}
            >
              ➕ 추가 옵션 상품 추가
            </S.AddOptionBtn>
          </Box>
        )),
      )}
      <Button
        height={theme.table.baseHeight}
        style={{ marginBottom: theme.table.padding }}
        onClick={handleAddOption}
      >
        + 옵션 추가
      </Button>
    </>
  )
}

export default React.memo(OptionRow)
