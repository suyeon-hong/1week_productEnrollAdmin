import React, { useEffect, useContext, useRef } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import {
  DELETE_OPTION_SET,
  DELETE_OPTION,
  UPDATE_OPTION_INFO,
  ADD_ADDITORY_OPTION,
} from '@contexts/OptionContext/types'
import { optionInfoKey } from '@contexts/OptionContext/reducer'
import AddInformationRow from './AddInformationRow/AddInformationRow'
import { Box, Button, Input } from '@components/base'
import { debounce } from '@utils/functions'
import theme from '@style/theme'
import * as S from './Style'

const InformationRow = ({ optionInfo, additoryOptions, optionsIndex }) => {
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
      type: UPDATE_OPTION_INFO,
      payload: addOptionInfoRef.current,
    })

  const handleInput = (e, optionInfoIndex) => {
    addOptionInfoRef.current[e.target.name] = e.target.value
    addOptionInfoRef.current.optionsIndex = optionsIndex
    addOptionInfoRef.current.optionInfoIndex = optionInfoIndex

    const debounceFn = debounce(callback, 500)
    debounceFn() // FIXME: 잘 작동안됨
  }

  const handleaAddAditoryOptions = (e, optionInfoIndex) => {
    dispatch({
      type: ADD_ADDITORY_OPTION,
      payload: { optionsIndex, optionInfoIndex },
    })
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

  return React.Children.toArray(
    optionInfo?.map((option, optionInfoIndex) => (
      <>
        <S.Row className="flexRow">
          <S.InputName>제품명 / 중량</S.InputName>
          <Input
            name={optionName}
            placeholder="제품명 / 중량을 입력해 주세요."
            required
            onChange={(e) => handleInput(e, optionInfoIndex)}
          />
        </S.Row>
        <S.Row className="flexRow">
          <S.InputName>원산지 / 원재료 함량</S.InputName>
          <Input
            name={optionName}
            placeholder="원산지 / 원재 함량을 입력해 주세요."
            required
            onChange={(e) => handleInput(e, optionInfoIndex)}
          />
        </S.Row>
        <S.Row className="flexRow">
          <S.InputName>등급</S.InputName>
          <Input
            name={optionName}
            placeholder="등급 (근내지방도 수치)를 입력해 주세요."
            required
            onChange={(e) => handleInput(e, optionInfoIndex)}
          />
        </S.Row>
        <S.Row className="flexRow">
          <S.InputName>보관</S.InputName>
          <Input
            name={optionName}
            placeholder="보관 방식을 입력해 주세요"
            required
            onChange={(e) => handleInput(e, optionInfoIndex)}
          />
        </S.Row>
        <S.Row className="flexRow">
          <S.InputName>식품 유형</S.InputName>
          <Input
            name={optionName}
            placeholder="식품 유형을 입력해 주세요. (ex)포장육"
            required
            onChange={(e) => handleInput(e, optionInfoIndex)}
          />
        </S.Row>

        <AddInformationRow
          additoryOptions={additoryOptions}
          optionsIndex={optionsIndex}
          optionInfoIndex={optionInfoIndex}
        />
        <S.AddInformationBtn
          onClick={(e) => handleaAddAditoryOptions(e, optionInfoIndex)}
        >
          + 항목 추가
        </S.AddInformationBtn>
      </>
    )),
  )
}

export default InformationRow
