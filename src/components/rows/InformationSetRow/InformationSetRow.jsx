import React, { useContext } from 'react'
import { InformationContext } from '@contexts/InformationContext/InformationProvider'
import { DELETE_INFORMATION_SET } from '@contexts/InformationContext/types'
import { Button } from '@components/base'
import { InformationRow } from '@components/rows'
import theme from '@style/theme'
import * as S from './Style'

const InformationSetRow = () => {
  const { informations, dispatch } = useContext(InformationContext)

  const handleDeleteOptionSet = (e) => {
    const { index } = e.target.closest('div > div').dataset
    dispatch({
      type: DELETE_INFORMATION_SET,
      payload: index,
    })
  }

  return (
    <S.InformationSetRowWrapper>
      {React.Children.toArray(
        informations?.map((infomation) => (
          <S.InformationSetRowContainer
            data-index={infomation.index}
            id="date-set`${}"
          >
            <S.Title>
              <p style={({ fontSize: '110%' }, { fontWeight: 'bold' })}>
                정보고시 {infomation.index + 1}
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
              infomation={infomation}
              additoryInfos={infomation.additoryInfos}
              parentIndex={infomation.index}
            />
          </S.InformationSetRowContainer>
        )),
      )}
    </S.InformationSetRowWrapper>
  )
}

export default InformationSetRow
