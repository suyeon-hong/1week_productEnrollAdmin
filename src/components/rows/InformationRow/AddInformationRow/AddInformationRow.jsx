import React, { useContext } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { DELETE_ADDITORY_OPTION } from '@contexts/OptionContext/types'
import { Button, Input } from '@components/base'
import theme from '@style/theme'
import * as S from '../Style'

const AddInformationRow = ({
  additoryOptions,
  optionsIndex,
  optionInfoIndex,
}) => {
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
        <S.Row className="flexRow">
          <Input
            width="30%"
            placeholder="항목 제목 자유 입력"
            required
            style={{ marginRight: theme.table.innerPadding }}
          />
          <S.Inline style={{ marginRight: theme.table.padding, flexGrow: 1 }}>
            <Input placeholder="내용을 입력해주세요" required />
          </S.Inline>
          <Button
            width={100}
            height={50}
            border={theme.color.border}
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

export default AddInformationRow
