import React, { useContext } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { DELETE_ADDITORY_OPTION } from '@contexts/OptionContext/types'
import { Button, Input } from '@components/base'
import theme from '@style/theme'
import * as S from '../Style'

const AddOptionRow = ({ additoryOptions, optionsIndex, optionInfoIndex }) => {
  const { options, dispatch } = useContext(OptionContext)
  const handleDeleteAditoryOptions = (e, clickedIndex) => {
    dispatch({
      type: DELETE_ADDITORY_OPTION,
      payload: { optionsIndex, optionInfoIndex, clickedIndex },
    })
  }

  return (
    additoryOptions[optionInfoIndex]?.length > 0 &&
    React.Children.toArray(
      additoryOptions[optionInfoIndex].map((option, index) => (
        <S.Row className="flexRow indent">
          <Input
            width="50%"
            placeholder="추가 옵션명 (필수)"
            required
            style={{ marginRight: theme.table.innerPadding }}
          />
          <S.Inline style={{ marginRight: theme.table.padding, flexGrow: 1 }}>
            <Input placeholder="추가 옵션명 정상가(필수)" required /> 원
          </S.Inline>
          <Button
            width={50}
            height={30}
            border={theme.color.red}
            color={theme.color.red}
            onClick={(e) => handleDeleteAditoryOptions(e, index)}
          >
            삭제
          </Button>
        </S.Row>
      )),
    )
  )
}

export default AddOptionRow
