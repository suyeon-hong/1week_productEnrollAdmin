import React, { useContext } from 'react'
import { OptionContext } from '@contexts/OptionContext/OptionProvider'
import { ADD_OPTION, DELETE_OPTION_SET } from '@contexts/OptionContext/types'
import { Button } from '@components/base'
import { InformationRow } from '@components/rows'
import theme from '@style/theme'
import * as S from './Style'

const InformationSetRow = () => {
  const { options, dispatch } = useContext(OptionContext)

  const handleDeleteOptionSet = (e) => {
    const { index } = e.target.closest('div > div').dataset
    dispatch({
      type: DELETE_OPTION_SET,
      payload: index,
    })
  }

  return (
    <S.InformationSetRowWrapper>
      {React.Children.toArray(
        options.map(({ optionInfo, additoryOptions }, index) => (
          <S.InformationSetRowContainer data-index={index} id="date-set`${}">
            <S.Title>
              <p style={({ fontSize: '110%' }, { fontWeight: 'bold' })}>
                정보고시 {index + 1}
              </p>
              <Button
                width={60}
                height={30}
                border={theme.color.border}
                color={theme.color.gray}
                onClick={handleDeleteOptionSet}
              >
                삭제
              </Button>
            </S.Title>

            <InformationRow
              optionInfo={optionInfo}
              additoryOptions={additoryOptions}
              optionsIndex={index}
            />
          </S.InformationSetRowContainer>
        )),
      )}
    </S.InformationSetRowWrapper>
  )
}

export default InformationSetRow
