import React, { useContext } from 'react'
import { InformationContext } from '@contexts/InformationContext/InformationProvider'
import {
  ADD_INFORMATION_SET,
  DELETE_INFORMATION_SET,
  UPDATE_INFORMATION_SET,
  ADD_ADDITORY_INFO,
  DELETE_ADDITORY_INFO,
} from '@contexts/InformationContext/types'
import { Button, Input } from '@components/base'
import theme from '@style/theme'
import * as S from '../Style'

const AddInformationRow = ({ additoryInfos, parentIndex }) => {
  const { _, dispatch } = useContext(InformationContext)

  const handleDeleteAditoryOptions = (e, parentIndex) => {
    const clickedIndex = +e.target.closest('div').dataset.index

    dispatch({
      type: DELETE_ADDITORY_INFO,
      payload: { parentIndex, clickedIndex },
    })
  }

  return React.Children.toArray(
    additoryInfos?.map((_, index) => (
      <S.Row className="flexRow" data-index={index}>
        <Input
          width="30%"
          placeholder="항목 제목 자유 입력"
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
          onClick={(e) => handleDeleteAditoryOptions(e, parentIndex)}
        >
          삭제
        </Button>
      </S.Row>
    )),
  )
}

export default AddInformationRow
