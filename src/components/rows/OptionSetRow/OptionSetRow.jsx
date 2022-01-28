import React, { useContext } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { DELETE_OPTION_SET } from '@contexts/OptionContext/types'
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

  return (
    <S.OptionSetRowWrapper>
      {React.Children.toArray(
        options.map(({ imageInfo, optionInfo, addOptions }, index) => (
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
              addOptions={addOptions}
              optionsIndex={index}
            />
          </S.OptionSetRowContainer>
        )),
      )}
      <Button
        height={theme.table.baseHeight}
        style={{ marginBottom: theme.table.padding }}
      >
        + 옵션 추가
      </Button>
    </S.OptionSetRowWrapper>
  )
}

export default OptionSetRow
