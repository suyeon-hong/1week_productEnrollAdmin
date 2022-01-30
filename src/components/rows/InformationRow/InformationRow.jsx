import React, { useEffect, useContext, useRef, useCallback } from 'react'
import { InformationContext } from '@contexts/InformationContext/InformationProvider'
import {
  ADD_INFORMATION_SET,
  DELETE_INFORMATION_SET,
  UPDATE_INFORMATION_SET,
  ADD_ADDITORY_INFO,
} from '@contexts/InformationContext/types'
import { informationKey } from '@contexts/InformationContext/reducer'
import AddInformationRow from './AddInformationRow/AddInformationRow'
import { debounceGenerator } from '@utils/functions'
import { Input } from '@components/base'
import * as S from './Style'

const InformationRow = ({ information, additoryInfos, parentIndex }) => {
  const { _, dispatch } = useContext(InformationContext)
  const debounceFn = useCallback(debounceGenerator(800), [])
  const informationRef = useRef({})

  const { productName, origin, quality, storage, type } = informationKey

  const callback = () => {
    dispatch({
      type: UPDATE_INFORMATION_SET,
      payload: informationRef.current,
    })
  }

  const handleInput = (e) => {
    informationRef.current[e.target.name] = e.target.value
    informationRef.current.parentIndex = parentIndex

    debounceFn(callback)
  }

  const handleAddAditoryInfos = (_, parentIndex) => {
    dispatch({
      type: ADD_ADDITORY_INFO,
      payload: parentIndex,
    })
  }

  return (
    <>
      <S.Row className="flexRow">
        <S.InputName>제품명 / 중량</S.InputName>
        <Input
          name={productName}
          placeholder="제품명 / 중량을 입력해 주세요."
          onChange={handleInput}
        />
      </S.Row>
      <S.Row className="flexRow">
        <S.InputName>원산지 / 원재료 함량</S.InputName>
        <Input
          name={origin}
          placeholder="원산지 / 원재 함량을 입력해 주세요."
          onChange={handleInput}
        />
      </S.Row>
      <S.Row className="flexRow">
        <S.InputName>등급</S.InputName>
        <Input
          name={quality}
          placeholder="등급 (근내지방도 수치)를 입력해 주세요."
          onChange={handleInput}
        />
      </S.Row>
      <S.Row className="flexRow">
        <S.InputName>보관</S.InputName>
        <Input
          name={storage}
          placeholder="보관 방식을 입력해 주세요"
          onChange={handleInput}
        />
      </S.Row>
      <S.Row className="flexRow">
        <S.InputName>식품 유형</S.InputName>
        <Input
          name={type}
          placeholder="식품 유형을 입력해 주세요. (ex)포장육"
          onChange={handleInput}
        />
      </S.Row>
      <AddInformationRow
        additoryInfos={additoryInfos}
        parentIndex={parentIndex}
      />
      <S.AddInformationBtn
        onClick={(e) => handleAddAditoryInfos(e, parentIndex)}
      >
        + 항목 추가
      </S.AddInformationBtn>
    </>
  )
}

export default InformationRow
