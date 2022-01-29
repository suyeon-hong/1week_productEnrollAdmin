import React, { useContext } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { ADD_OPTION, DELETE_OPTION_SET } from '@contexts/OptionContext/types'
import { Button } from '@components/base'
import { OptionRow } from '@components/rows'
import { OptionImageContainer } from '@components/domain'
import theme from '@style/theme'
import * as S from './Style'

const OptionSetRow = () => {
  const { options, dispatch } = useContext(OptionContext)

  const handleDeleteOptionSet = (e) => {
    const { index } = e.target.closest('div > div').dataset
    dispatch({
      type: DELETE_OPTION_SET,
      payload: index,
    })
  }

  const handleAddOption = (e) => {
    // console.log(e.target.closest('div > div')
    // dispatch({
    //   type: ADD_OPTION,
    //   payload: optionsIndex,
    // })
  }

  return (
    <S.OptionSetRowWrapper>
      {React.Children.toArray(
        options.map(({ imageInfo, optionInfo, additoryOptions }, index) => (
          <S.OptionSetRowContainer data-index={index}>
            <Button
              width={60}
              height={30}
              border={theme.color.red}
              color={theme.color.red}
              onClick={handleDeleteOptionSet}
            >
              삭제
            </Button>
            <OptionImageContainer
              imageInfo={imageInfo}
              options={options}
              optionsIndex={index}
            />
            <OptionRow
              optionInfo={optionInfo}
              additoryOptions={additoryOptions}
              optionsIndex={index}
            />
          </S.OptionSetRowContainer>
        )),
      )}
      <Button
        height={theme.table.baseHeight}
        style={{ marginBottom: theme.table.padding }}
        onClick={handleAddOption}
      >
        + 옵션 추가
      </Button>
    </S.OptionSetRowWrapper>
  )
}

export default OptionSetRow
