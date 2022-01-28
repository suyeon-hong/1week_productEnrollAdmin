import React, { useEffect, useContext } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { DELETE_OPTION_SET, DELETE_OPTION } from '@contexts/OptionContext/types'
import { Box, Button, Input } from '@components/base'
import AddOptionRow from './AddOptionRow/AddOptionRow'
import theme from '@style/theme'
import * as S from './Style'

const OptionRow = ({ optionInfo, addOptions, optionsIndex }) => {
  const { options, dispatch } = useContext(OptionContext)

  // useEffect(() => {
  //   console.log(optionInfo)
  // }, [optionInfo])

  // const { optionName, normalPrice, price, stock, isTax } = optionInfo
  const handleOptionDelete = (e, optionInfoIndex) => {
    const deletedOptionInfo = optionInfo.filter(
      (option) => option.index !== optionInfoIndex,
    )

    console.log(deletedOptionInfo, 'deletedOptionInfo')
    dispatch({
      type: DELETE_OPTION,
      payload: { optionsIndex, deletedOptionInfo },
    })
  }

  useEffect(() => {
    if (optionInfo.length === 0) {
      console.log(optionsIndex)
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
            placeholder="옵션명을 입력해 주세요.(필수)"
            required
            // value={optionName}
          />
        </S.Row>
        <S.Row className="flexRow">
          <S.Inline>
            <Input
              type="number"
              placeholder="상품 정상가(필수)"
              required
              // value={normalPrice}
            />{' '}
            원
          </S.Inline>
          <span aria-label="할인율">할인율 %</span>
          <S.Inline>
            <Input
              type="number"
              placeholder="상품 판매가(필수)"
              required
              // value={price}
            />{' '}
            원
          </S.Inline>
          <S.Inline>
            <Input
              type="number"
              placeholder="재고(필수)"
              required
              // value={stock}
            />{' '}
            개
          </S.Inline>
          <select name="" id="">
            <option value="과세">과세</option>
            <option value="비과세">비과세</option>
          </select>
        </S.Row>
        {/* <AddOptionRow /> */}
        <S.AddOptionBtn>➕ 추가 옵션 상품 추가</S.AddOptionBtn>
      </Box>
    )),
  )
}

export default OptionRow
